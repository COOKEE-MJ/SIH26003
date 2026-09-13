Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\mahen\SIH26003\.user_uploaded\media_1789221966328.png"
if (-not (Test-Path $srcPath)) {
    $srcPath = "C:\Users\mahen\.gemini\antigravity\brain\596232ca-c296-45a7-9046-a02824950ce7\.user_uploaded\media_1789221966328.png"
}
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

$outDir = "c:\Users\mahen\SIH26003\static\img\mascot"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$chars = @(
    @{ name = "smiling";      x = 132; y = 30;  w = 78;  h = 144 },
    @{ name = "happy";        x = 362; y = 30;  w = 76;  h = 144 },
    @{ name = "cheerful";     x = 575; y = 28;  w = 100; h = 146 },
    @{ name = "sad";          x = 818; y = 30;  w = 78;  h = 144 },
    @{ name = "anxious";      x = 134; y = 205; w = 76;  h = 142 },
    @{ name = "confused";     x = 364; y = 205; w = 82;  h = 142 },
    @{ name = "surprised";    x = 594; y = 205; w = 76;  h = 142 },
    @{ name = "thoughtful";   x = 822; y = 205; w = 74;  h = 142 },
    @{ name = "encouraging";  x = 134; y = 376; w = 76;  h = 140 },
    @{ name = "affectionate"; x = 360; y = 376; w = 78;  h = 140 },
    @{ name = "angry";        x = 592; y = 376; w = 76;  h = 140 },
    @{ name = "calm";         x = 818; y = 376; w = 76;  h = 140 }
)

$scale = 2 # 2x high-resolution export

foreach ($item in $chars) {
    # 1. First crop 1:1 and key out background
    $crop = New-Object System.Drawing.Bitmap $item.w, $item.h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    for ($cy = 0; $cy -lt $item.h; $cy++) {
        for ($cx = 0; $cx -lt $item.w; $cx++) {
            $px = $item.x + $cx
            $py = $item.y + $cy
            if ($px -ge 0 -and $px -lt $src.Width -and $py -ge 0 -and $py -lt $src.Height) {
                $c = $src.GetPixel($px, $py)
                $dr = $c.R - 227
                $dg = $c.G - 242
                $db = $c.B - 239
                $dist = [Math]::Sqrt($dr*$dr + $dg*$dg + $db*$db)
                
                if ($dist -lt 18) {
                    $crop.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
                } elseif ($dist -lt 35) {
                    $alpha = [int](($dist - 18) / (35 - 18) * 255)
                    $crop.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
                } else {
                    $crop.SetPixel($cx, $cy, $c)
                }
            }
        }
    }

    # Clean top 4 rows of stray dots
    for ($y = 0; $y -lt 4; $y++) {
        for ($x = 0; $x -lt $crop.Width; $x++) {
            $crop.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }

    # 2. Rescale to 2x with high-quality bicubic interpolation
    $targetW = $item.w * $scale
    $targetH = $item.h * $scale
    $hiRes = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($hiRes)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.DrawImage($crop, 0, 0, $targetW, $targetH)
    $g.Dispose()
    $crop.Dispose()

    $outPath = Join-Path $outDir "$($item.name).png"
    $hiRes.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $hiRes.Dispose()
    Write-Output "Saved 2x Hi-Res: $outPath ($targetW x $targetH)"
}

$src.Dispose()
Write-Output "All 2x high-resolution mascots generated successfully!"

