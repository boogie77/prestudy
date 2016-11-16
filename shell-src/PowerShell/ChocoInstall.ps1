# �����ȴ�PowerShell�����ļ�Ȩ��
#Get-ExecutionPolicy -List
#Get-ExecutionPolicy -Scope CurrentUser
#Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
 
# ��װChocolate
# PowerShell.exe (Ensure Get-ExecutionPolicy is at least RemoteSigned) 
#iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
# PowerShell v3+ (Ensure Get-ExecutionPolicy is at least RemoteSigned)
#iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex

# VC Runtime
choco install vcredist2005 -y
choco install vcredist2008 -y
choco install vcredist2010 -y
choco install vcredist2012 -y
choco install vcredist2013 -y
choco install vcredist2015 -y

# .Net Framework
# choco install dotnet3.5 -y
# choco install dotnet4.0 -y
# choco install dotnet4.5.2 -y
# choco install dotnet4.6.1 -y

# Java JDK JRE
# choco install jdk7 -y
# choco install jre8 -y
# choco install jdk8 -y
# choco install jre8 -y

# Flash Media Picture
choco install flashplayerplugin -y
choco install flashplayeractivex -y
choco install k-litecodecpackmega -y
# choco install mpc-hc -y
choco install picasa -y
choco install itunes -y

# Reader
# choco install foxitreader
# choco install calibre -y
# choco install winmerge -y
# choco install beyondcompare -y

# Editor
# choco install pandoc -y
# choco install markdownpad2 -y

# Browser
# choco install ie11 -y
# choco install googlechrome -y
# choco install firefox -y
# choco install opera -y

# System Tools
# choco install 7zip.commandline -y
# choco install autohotkey.portable -y
# choco install totalcommander -y
#choco install cmder -y
choco install sysinternals -y
# choco install rapidee -y
# choco install powershell -y
# choco install winrar -y
# choco install everything -y
choco install teamviewer -y
# choco install chocolateygui -y
# choco install cpu-z -y
# choco install gpu-z -y
# choco install crystaldiskmark -y

# Version Control
#choco install tortoisesvn -y
choco install sourcetree -y

# Ruby Python
# choco install ruby -y
# choco install ruby2.devkit -y
# choco install python2 -y
# choco install python -y
# choco install pip -y

# Develop Tools
choco install nodejs -y
# choco install phantomjs -y
choco install atom -y
#choco install visualstudiocode -y
# choco install microsoft-build-tools -y
# choco install visualstudio2015enterprise -y
# choco install resharper -y
# choco install nuget.commandline -y
# choco install fiddler -y
# choco install innosetup -y
# choco install cmake -y
# choco install android-sdk -y
# choco install tomcat -y
# choco install scala -y

# Docker Virtual Environment
# choco install docker -y
# choco install virtualbox -y
# choco install vagrant -y

# Linux Tools
# choco install winscp -y
# choco install mingw -y
# choco install cygwin -y
# choco install winpcap -y

# Database
# choco install mysql -y
# choco install mysql.workbench -y
# choco install postgresql -y
# choco install mongodb -y
# choco install sqlite -y
# choco install mariadb -y
# choco install redis -y

# Note
choco install ynote -y
# choco install xmind -y

# Skype
# choco install skype -y
