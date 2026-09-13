Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("c:\Users\mahen\SIH26003\static\img\mascot\smiling.png")
# Check center pixels (dress area: x=w/2, y=h*0.6)
$midX = [int]($img.Width / 2)
$dressY = [int]($img.Height * 0.6)
$faceY = [int]($img.Height * 0.3)

Write-Output "Dress pixel ($midX, $dressY): $($img.GetPixel($midX, $dressY))"
Write-Output "Face pixel ($midX, $faceY): $($img.GetPixel($midX, $faceY))"
Write-Output "Top-left corner (2, 2): $($img.GetPixel(2, 2))"

$img.Dispose()

