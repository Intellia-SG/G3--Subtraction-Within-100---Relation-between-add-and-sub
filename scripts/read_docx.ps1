# scripts/read_docx.ps1
param(
    [string]$docxPath,
    [string]$outputPath
)

$tempFolder = "temp_extract_" + (Get-Random)
Copy-Item $docxPath ($tempFolder + ".zip")
Expand-Archive -Path ($tempFolder + ".zip") -DestinationPath $tempFolder -Force
Remove-Item ($tempFolder + ".zip")

if (Test-Path "$tempFolder/word/document.xml") {
    [xml]$xml = Get-Content "$tempFolder/word/document.xml" -Raw -Encoding UTF8
    
    # Use local-name() to bypass namespace issues
    $paragraphs = $xml.SelectNodes("//*[local-name()='p']")
    $outputLines = @()
    
    foreach ($p in $paragraphs) {
        $textNodes = $p.SelectNodes(".//*[local-name()='t']")
        $pText = ""
        if ($textNodes) {
            foreach ($t in $textNodes) {
                $pText += $t.InnerText
            }
        }
        $outputLines += $pText
    }
    
    $outputLines -join "`r`n" | Out-File -FilePath $outputPath -Encoding utf8
    Write-Host "Successfully extracted $docxPath to $outputPath"
} else {
    Write-Host "Could not find document.xml in $docxPath"
}

Remove-Item -Recurse -Force $tempFolder
