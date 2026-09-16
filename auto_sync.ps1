# Git 자동 동기화 스크립트 (Auto-Sync)
param(
    [switch]$Loop,
    [int]$IntervalSeconds = 180
)

$gitExe = "C:\Users\cmc\AppData\Local\GitHubDesktop\app-3.6.5\resources\app\git\cmd\git.exe"
if (-not (Test-Path $gitExe)) {
    $gitExe = "git"
}

function Sync-Git {
    $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$now] GitHub 동기화 시작..." -ForegroundColor Cyan
    
    # 1. 원격 변경사항 가져오기 (fetch)
    & $gitExe fetch origin
    
    # 원격 브랜치와 로컬 브랜치 차이 확인
    $localCommit = (& $gitExe rev-parse HEAD).Trim()
    $remoteCommit = (& $gitExe rev-parse origin/main).Trim()
    
    if ($localCommit -ne $remoteCommit) {
        Write-Host "[$now] 원격 최신 변경사항을 다운로드(pull)합니다..." -ForegroundColor Yellow
        & $gitExe pull --rebase origin main
    } else {
        Write-Host "[$now] 원격과 로컬이 이미 최신 상태입니다." -ForegroundColor Green
    }
    
    # 2. 로컬 변경사항 확인 및 푸시 (commit & push)
    $status = & $gitExe status --porcelain
    if ($status) {
        Write-Host "[$now] 로컬 변경사항 발견! GitHub로 자동 업로드(push)합니다..." -ForegroundColor Magenta
        & $gitExe add -A
        $commitMsg = "auto: 동기화 ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
        & $gitExe commit -m $commitMsg
        & $gitExe push origin main
        Write-Host "[$now] GitHub 업로드 완료!" -ForegroundColor Green
    } else {
        Write-Host "[$now] 로컬 변경사항 없음 (작업 트리 깨끗함)" -ForegroundColor Gray
    }
}

if ($Loop) {
    Write-Host "=== Git 백그라운드 자동 동기화 시작 ($IntervalSeconds 초 주기) ===" -ForegroundColor Green
    Write-Host "종료하려면 Ctrl + C 를 누르세요." -ForegroundColor Gray
    while ($true) {
        Sync-Git
        Start-Sleep -Seconds $IntervalSeconds
    }
} else {
    Sync-Git
}
