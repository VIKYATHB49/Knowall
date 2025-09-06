const Cybersecurity_Advanced_Hard = {
  fileName: "cybersecurity-advanced",
  testName: "Cybersecurity Advanced Test",
  sections: [
    {
      name: "Cybersecurity Advanced",
      status: "Not Yet Started",
      questions: [
        {
          id: "CS_Hard_1",
          type: "mcq",
          text: "Which cryptographic algorithm is asymmetric?",
          options: [
            { type: "text", value: "RSA" },
            { type: "text", value: "AES" },
            { type: "text", value: "DES" },
            { type: "text", value: "Blowfish" }
          ],
          correctAnswer: { type: "text", value: "RSA" },
          explanation: "RSA uses a public and private key pair, making it asymmetric."
        },
        {
          id: "CS_Hard_2",
          type: "mcq",
          text: "What is the main purpose of a SIEM system?",
          options: [
            { type: "text", value: "Centralized logging and security monitoring" },
            { type: "text", value: "Encrypting files" },
            { type: "text", value: "Updating firewalls automatically" },
            { type: "text", value: "Backup cloud storage" }
          ],
          correctAnswer: { type: "text", value: "Centralized logging and security monitoring" },
          explanation: "SIEM collects logs from multiple sources to detect security threats."
        },
        {
          id: "CS_Hard_3",
          type: "mcq",
          text: "Which attack exploits vulnerabilities in SQL queries?",
          options: [
            { type: "text", value: "SQL Injection" },
            { type: "text", value: "Cross-site scripting" },
            { type: "text", value: "Phishing" },
            { type: "text", value: "Brute force" }
          ],
          correctAnswer: { type: "text", value: "SQL Injection" },
          explanation: "SQL Injection allows attackers to manipulate database queries through user input."
        },
        {
          id: "CS_Hard_4",
          type: "mcq",
          text: "What is a zero-day vulnerability?",
          options: [
            { type: "text", value: "A flaw unknown to developers and exploited before a patch" },
            { type: "text", value: "An outdated antivirus signature" },
            { type: "text", value: "A harmless system bug" },
            { type: "text", value: "A scheduled software update" }
          ],
          correctAnswer: { type: "text", value: "A flaw unknown to developers and exploited before a patch" },
          explanation: "Zero-day vulnerabilities are unknown to developers, making them critical security risks."
        },
        {
          id: "CS_Hard_5",
          type: "mcq",
          text: "What is the primary difference between symmetric and asymmetric encryption?",
          options: [
            { type: "text", value: "Symmetric uses one key, asymmetric uses two keys" },
            { type: "text", value: "Symmetric is slower than asymmetric" },
            { type: "text", value: "Asymmetric cannot encrypt data" },
            { type: "text", value: "Symmetric always uses RSA" }
          ],
          correctAnswer: { type: "text", value: "Symmetric uses one key, asymmetric uses two keys" },
          explanation: "Symmetric encryption uses a single key for both encryption and decryption, while asymmetric uses a key pair."
        },
        {
          id: "CS_Hard_6",
          type: "mcq",
          text: "Which type of malware hides its presence from detection software?",
          options: [
            { type: "text", value: "Rootkit" },
            { type: "text", value: "Ransomware" },
            { type: "text", value: "Spyware" },
            { type: "text", value: "Trojan" }
          ],
          correctAnswer: { type: "text", value: "Rootkit" },
          explanation: "Rootkits are designed to conceal their activities and evade detection."
        },
        {
          id: "CS_Hard_7",
          type: "mcq",
          text: "What is a man-in-the-middle attack?",
          options: [
            { type: "text", value: "Intercepting and potentially altering communication between parties" },
            { type: "text", value: "Installing malware on a server" },
            { type: "text", value: "Sending phishing emails" },
            { type: "text", value: "Brute-forcing passwords" }
          ],
          correctAnswer: { type: "text", value: "Intercepting and potentially altering communication between parties" },
          explanation: "MITM attacks intercept communication to steal data or inject malicious content."
        },
        {
          id: "CS_Hard_8",
          type: "mcq",
          text: "Which protocol ensures secure HTTP communication?",
          options: [
            { type: "text", value: "HTTPS" },
            { type: "text", value: "FTP" },
            { type: "text", value: "Telnet" },
            { type: "text", value: "HTTP" }
          ],
          correctAnswer: { type: "text", value: "HTTPS" },
          explanation: "HTTPS encrypts HTTP traffic using SSL/TLS to ensure secure communication."
        },
        {
          id: "CS_Hard_9",
          type: "mcq",
          text: "What is the role of a DMZ in network security?",
          options: [
            { type: "text", value: "Isolate public-facing servers from internal network" },
            { type: "text", value: "Store backups offsite" },
            { type: "text", value: "Scan for malware on endpoints" },
            { type: "text", value: "Encrypt email communications" }
          ],
          correctAnswer: { type: "text", value: "Isolate public-facing servers from internal network" },
          explanation: "A DMZ separates external-facing services from internal networks for security."
        },
        {
          id: "CS_Hard_10",
          type: "mcq",
          text: "Which cybersecurity framework is widely used for critical infrastructure?",
          options: [
            { type: "text", value: "NIST Cybersecurity Framework" },
            { type: "text", value: "ISO 9001" },
            { type: "text", value: "COBIT 2019" },
            { type: "text", value: "GDPR" }
          ],
          correctAnswer: { type: "text", value: "NIST Cybersecurity Framework" },
          explanation: "The NIST framework provides guidelines to manage and reduce cybersecurity risk."
        },
        {
          id: "CS_Hard_11",
          type: "mcq",
          text: "Which of the following is a common feature of advanced persistent threats (APT)?",
          options: [
            { type: "text", value: "Long-term, targeted attacks against specific organizations" },
            { type: "text", value: "Random attacks for financial gain" },
            { type: "text", value: "One-time malware infection" },
            { type: "text", value: "Accidental system misconfiguration" }
          ],
          correctAnswer: { type: "text", value: "Long-term, targeted attacks against specific organizations" },
          explanation: "APTs are carefully planned, stealthy attacks targeting high-value entities over time."
        },
        {
          id: "CS_Hard_12",
          type: "mcq",
          text: "Which method protects against replay attacks in network security?",
          options: [
            { type: "text", value: "Using nonces or timestamps" },
            { type: "text", value: "Encrypting files locally" },
            { type: "text", value: "Installing antivirus software" },
            { type: "text", value: "Limiting bandwidth" }
          ],
          correctAnswer: { type: "text", value: "Using nonces or timestamps" },
          explanation: "Nonces and timestamps ensure that messages are unique and cannot be reused maliciously."
        },
        {
          id: "CS_Hard_13",
          type: "mcq",
          text: "Which security model enforces mandatory access control?",
          options: [
            { type: "text", value: "Bell-LaPadula Model" },
            { type: "text", value: "Discretionary Access Control" },
            { type: "text", value: "Role-Based Access Control" },
            { type: "text", value: "Attribute-Based Access Control" }
          ],
          correctAnswer: { type: "text", value: "Bell-LaPadula Model" },
          explanation: "The Bell-LaPadula model enforces strict rules for information flow based on classification levels."
        },
        {
          id: "CS_Hard_14",
          type: "mcq",
          text: "What is a honeypot used for?",
          options: [
            { type: "text", value: "Attract attackers to study their behavior" },
            { type: "text", value: "Encrypting sensitive data" },
            { type: "text", value: "Backup critical files" },
            { type: "text", value: "Preventing phishing emails" }
          ],
          correctAnswer: { type: "text", value: "Attract attackers to study their behavior" },
          explanation: "Honeypots act as decoys to gather intelligence on attackers."
        },
        {
          id: "CS_Hard_15",
          type: "mcq",
          text: "Which protocol is commonly used for secure file transfer?",
          options: [
            { type: "text", value: "SFTP" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "FTP" },
            { type: "text", value: "Telnet" }
          ],
          correctAnswer: { type: "text", value: "SFTP" },
          explanation: "SFTP encrypts both commands and data during file transfer."
        },
        {
          id: "CS_Hard_16",
          type: "mcq",
          text: "Which attack manipulates DNS responses to redirect users?",
          options: [
            { type: "text", value: "DNS Spoofing" },
            { type: "text", value: "SQL Injection" },
            { type: "text", value: "ARP Poisoning" },
            { type: "text", value: "Cross-Site Request Forgery" }
          ],
          correctAnswer: { type: "text", value: "DNS Spoofing" },
          explanation: "DNS spoofing corrupts DNS data to redirect traffic to malicious sites."
        },
        {
          id: "CS_Hard_17",
          type: "mcq",
          text: "What is the principle of least privilege?",
          options: [
            { type: "text", value: "Users get only the permissions necessary to perform their tasks" },
            { type: "text", value: "Users get all permissions by default" },
            { type: "text", value: "Admins grant permissions without restrictions" },
            { type: "text", value: "Permissions are shared openly between departments" }
          ],
          correctAnswer: { type: "text", value: "Users get only the permissions necessary to perform their tasks" },
          explanation: "Least privilege limits exposure to threats by minimizing unnecessary access rights."
        },
        {
          id: "CS_Hard_18",
          type: "mcq",
          text: "Which of the following is an example of a post-quantum cryptography approach?",
          options: [
            { type: "text", value: "Lattice-based cryptography" },
            { type: "text", value: "RSA-2048" },
            { type: "text", value: "DES" },
            { type: "text", value: "AES-128" }
          ],
          correctAnswer: { type: "text", value: "Lattice-based cryptography" },
          explanation: "Lattice-based cryptography is resistant to attacks by quantum computers."
        },
        {
          id: "CS_Hard_19",
          type: "mcq",
          text: "Which cybersecurity measure mitigates the risk of insider threats?",
          options: [
            { type: "text", value: "Monitoring user activity and role-based access control" },
            { type: "text", value: "Installing ad blockers" },
            { type: "text", value: "Upgrading graphics drivers" },
            { type: "text", value: "Using strong Wi-Fi passwords" }
          ],
          correctAnswer: { type: "text", value: "Monitoring user activity and role-based access control" },
          explanation: "Insider threats are mitigated by monitoring access and limiting permissions based on roles."
        },
        {
          id: "CS_Hard_20",
          type: "mcq",
          text: "Which framework is used for threat intelligence sharing?",
          options: [
            { type: "text", value: "STIX/TAXII" },
            { type: "text", value: "NTP" },
            { type: "text", value: "SMTP" },
            { type: "text", value: "IMAP" }
          ],
          correctAnswer: { type: "text", value: "STIX/TAXII" },
          explanation: "STIX/TAXII is a structured language and protocol for sharing threat intelligence."
        }
      ]
    }
  ]
};

export default Cybersecurity_Advanced_Hard;
