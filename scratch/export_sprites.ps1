Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\mahen\.gemini\antigravity\brain\596232ca-c296-45a7-9046-a02824950ce7\.user_uploaded\media_1789221966328.png"
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

# Function to remove background with flood fill / border color distance
foreach ($item in $chars) {
    $crop = New-Object System.Drawing.Bitmap $item.w, $item.h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    # We want to key out the mint-green background.
    # Background color reference is R=227, G=242, B=239.
    # Also handle anti-aliased edge with alpha.
    for ($cy = 0; $cy -lt $item.h; $cy++) {
        for ($cx = 0; $cx -lt $item.w; $cx++) {
            $px = $item.x + $cx
            $py = $item.y + $cy
            if ($px -ge 0 -and $px -lt $src.Width -and $py -ge 0 -and $py -lt $src.Height) {
                $c = $src.GetPixel($px, $py)
                # Euclidean or Manhattan distance to background color (227, 242, 239)
                $dr = $c.R - 227
                $dg = $c.G - 242
                $db = $c.B - 239
                $dist = [Math]::Sqrt($dr*$dr + $dg*$dg + $db*$db)
                
                if ($dist -lt 18) {
                    # Fully transparent
                    $crop.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
                } elseif ($dist -lt 35) {
                    # Soft edge blending
                    $alpha = [int](($dist - 18) / (35 - 18) * 255)
                    $crop.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
                } else {
                    $crop.SetPixel($cx, $cy, $c)
                }
            }
        }
    }
    
    $outPath = Join-Path $outDir "$($item.name).png"
    $crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Output "Saved $outPath"
}

$src.Dispose()
Write-Output "All 12 characters exported successfully!"

