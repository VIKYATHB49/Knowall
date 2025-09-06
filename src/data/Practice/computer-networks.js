const Computer_Networks_Medium = {
  fileName: "computer-networks",
  testName: "Computer Networks Test",
  sections: [
    {
      name: "Computer Networks",
      status: "Not Yet Started",
      questions: [
        {
          id: "CN_Med_1",
          type: "mcq",
          text: "Which layer of the OSI model is responsible for establishing, managing, and terminating connections?",
          options: [
            { type: "text", value: "Transport Layer" },
            { type: "text", value: "Network Layer" },
            { type: "text", value: "Session Layer" },
            { type: "text", value: "Application Layer" }
          ],
          correctAnswer: { type: "text", value: "Session Layer" },
          explanation: "The Session layer establishes, manages, and terminates sessions between applications."
        },
        {
          id: "CN_Med_2",
          type: "mcq",
          text: "Which protocol is used for sending emails?",
          options: [
            { type: "text", value: "SMTP" },
            { type: "text", value: "FTP" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "SNMP" }
          ],
          correctAnswer: { type: "text", value: "SMTP" },
          explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails."
        },
        {
          id: "CN_Med_3",
          type: "mcq",
          text: "Which of the following is a connectionless protocol?",
          options: [
            { type: "text", value: "UDP" },
            { type: "text", value: "TCP" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "FTP" }
          ],
          correctAnswer: { type: "text", value: "UDP" },
          explanation: "UDP is a connectionless protocol that does not guarantee delivery."
        },
        {
          id: "CN_Med_4",
          type: "mcq",
          text: "What is the maximum length of a CAT6 Ethernet cable for reliable transmission?",
          options: [
            { type: "text", value: "100 meters" },
            { type: "text", value: "50 meters" },
            { type: "text", value: "10 meters" },
            { type: "text", value: "500 meters" }
          ],
          correctAnswer: { type: "text", value: "100 meters" },
          explanation: "CAT6 cables support up to 100 meters of reliable transmission."
        },
        {
          id: "CN_Med_5",
          type: "mcq",
          text: "Which layer of the OSI model handles logical addressing?",
          options: [
            { type: "text", value: "Network Layer" },
            { type: "text", value: "Data Link Layer" },
            { type: "text", value: "Transport Layer" },
            { type: "text", value: "Physical Layer" }
          ],
          correctAnswer: { type: "text", value: "Network Layer" },
          explanation: "The Network layer uses IP addresses for logical addressing."
        },
        {
          id: "CN_Med_6",
          type: "mcq",
          text: "Which protocol is used to resolve IP addresses to MAC addresses?",
          options: [
            { type: "text", value: "ARP" },
            { type: "text", value: "ICMP" },
            { type: "text", value: "TCP" },
            { type: "text", value: "UDP" }
          ],
          correctAnswer: { type: "text", value: "ARP" },
          explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses."
        },
        {
          id: "CN_Med_7",
          type: "mcq",
          text: "Which protocol provides reliable, ordered, and error-checked delivery of data?",
          options: [
            { type: "text", value: "TCP" },
            { type: "text", value: "UDP" },
            { type: "text", value: "IP" },
            { type: "text", value: "ICMP" }
          ],
          correctAnswer: { type: "text", value: "TCP" },
          explanation: "TCP ensures reliable and ordered delivery with error checking."
        },
        {
          id: "CN_Med_8",
          type: "mcq",
          text: "Which network topology uses a central hub to connect all devices?",
          options: [
            { type: "text", value: "Star Topology" },
            { type: "text", value: "Ring Topology" },
            { type: "text", value: "Bus Topology" },
            { type: "text", value: "Mesh Topology" }
          ],
          correctAnswer: { type: "text", value: "Star Topology" },
          explanation: "Star topology connects all devices to a central hub or switch."
        },
        {
          id: "CN_Med_9",
          type: "mcq",
          text: "What is the function of a router in a network?",
          options: [
            { type: "text", value: "Forward packets between networks" },
            { type: "text", value: "Connect devices within a LAN" },
            { type: "text", value: "Convert digital signals to analog" },
            { type: "text", value: "Store website data" }
          ],
          correctAnswer: { type: "text", value: "Forward packets between networks" },
          explanation: "Routers direct packets between different networks using IP addresses."
        },
        {
          id: "CN_Med_10",
          type: "mcq",
          text: "Which protocol is used to securely browse websites?",
          options: [
            { type: "text", value: "HTTPS" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "FTP" },
            { type: "text", value: "SMTP" }
          ],
          correctAnswer: { type: "text", value: "HTTPS" },
          explanation: "HTTPS provides encryption for secure web communication."
        },
        {
          id: "CN_Med_11",
          type: "mcq",
          text: "Which layer of the OSI model ensures error-free transmission using checksums?",
          options: [
            { type: "text", value: "Data Link Layer" },
            { type: "text", value: "Network Layer" },
            { type: "text", value: "Transport Layer" },
            { type: "text", value: "Physical Layer" }
          ],
          correctAnswer: { type: "text", value: "Data Link Layer" },
          explanation: "Data Link Layer uses checksums for error detection in frames."
        },
        {
          id: "CN_Med_12",
          type: "mcq",
          text: "Which protocol is used for remote command-line login?",
          options: [
            { type: "text", value: "SSH" },
            { type: "text", value: "FTP" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "SMTP" }
          ],
          correctAnswer: { type: "text", value: "SSH" },
          explanation: "SSH allows secure remote login and command execution."
        },
        {
          id: "CN_Med_13",
          type: "mcq",
          text: "Which of the following is a multicast protocol?",
          options: [
            { type: "text", value: "IGMP" },
            { type: "text", value: "ARP" },
            { type: "text", value: "ICMP" },
            { type: "text", value: "TCP" }
          ],
          correctAnswer: { type: "text", value: "IGMP" },
          explanation: "IGMP (Internet Group Management Protocol) manages multicast group memberships."
        },
        {
          id: "CN_Med_14",
          type: "mcq",
          text: "Which type of IP address is used within private networks?",
          options: [
            { type: "text", value: "Private IP" },
            { type: "text", value: "Public IP" },
            { type: "text", value: "Loopback IP" },
            { type: "text", value: "Broadcast IP" }
          ],
          correctAnswer: { type: "text", value: "Private IP" },
          explanation: "Private IP addresses are reserved for internal network use."
        },
        {
          id: "CN_Med_15",
          type: "mcq",
          text: "Which protocol is used for transferring files over the internet?",
          options: [
            { type: "text", value: "FTP" },
            { type: "text", value: "SMTP" },
            { type: "text", value: "HTTP" },
            { type: "text", value: "TCP" }
          ],
          correctAnswer: { type: "text", value: "FTP" },
          explanation: "FTP (File Transfer Protocol) is used to transfer files over networks."
        },
        {
          id: "CN_Med_16",
          type: "mcq",
          text: "Which device operates at the data link layer and forwards frames based on MAC addresses?",
          options: [
            { type: "text", value: "Switch" },
            { type: "text", value: "Router" },
            { type: "text", value: "Hub" },
            { type: "text", value: "Modem" }
          ],
          correctAnswer: { type: "text", value: "Switch" },
          explanation: "Switches use MAC addresses to forward frames within a LAN."
        },
        {
          id: "CN_Med_17",
          type: "mcq",
          text: "Which topology provides high redundancy but is expensive due to many connections?",
          options: [
            { type: "text", value: "Mesh Topology" },
            { type: "text", value: "Bus Topology" },
            { type: "text", value: "Star Topology" },
            { type: "text", value: "Ring Topology" }
          ],
          correctAnswer: { type: "text", value: "Mesh Topology" },
          explanation: "Mesh topology connects every device to every other device, providing redundancy."
        },
        {
          id: "CN_Med_18",
          type: "mcq",
          text: "Which layer of the OSI model encrypts and decrypts data for secure communication?",
          options: [
            { type: "text", value: "Presentation Layer" },
            { type: "text", value: "Session Layer" },
            { type: "text", value: "Application Layer" },
            { type: "text", value: "Transport Layer" }
          ],
          correctAnswer: { type: "text", value: "Presentation Layer" },
          explanation: "The Presentation layer handles data encryption, decryption, and translation."
        }
      ]
    }
  ]
};

export default Computer_Networks_Medium;
