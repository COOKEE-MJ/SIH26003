Add-Type -AssemblyName System.Drawing

$dir = "c:\Users\mahen\SIH26003\static\img\mascot"
$files = Get-ChildItem $dir -Filter "*.png"

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    # Check top 4 rows for isolated non-transparent pixels (stray dots)
    $modified = $false
    for ($y = 0; $y -lt 5; $y++) {
        for ($x = 0; $x -lt $bmp.Width; $x++) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.A -gt 0) {
                # Clear isolated top pixels
                $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
                $modified = $true
            }
        }
    }
    if ($modified) {
        $tempPath = "$($f.FullName).tmp.png"
        $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Move-Item -Path $tempPath -Destination $f.FullName -Force
        Write-Output "Cleaned stray pixels in $($f.Name)"
    } else {
        $bmp.Dispose()
    }
}
Write-Output "Cleanup complete!"

