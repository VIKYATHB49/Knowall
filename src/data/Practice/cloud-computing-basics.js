// cloud-computing-basics.js

const CloudComputing_Medium = {
  fileName: "cloud-computing-basics",
  testName: "Cloud Computing Basics Test",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "CC_Med_1",
          type: "mcq",
          text: "Which of the following best defines cloud computing?",
          options: [
            { type: "text", value: "Using the internet to access on-demand IT resources" },
            { type: "text", value: "Storing files on a personal computer" },
            { type: "text", value: "Running applications without an operating system" },
            { type: "text", value: "Using external hard drives for backup" }
          ],
          correctAnswer: { type: "text", value: "Using the internet to access on-demand IT resources" },
          explanation: "Cloud computing provides on-demand access to IT resources like servers, databases, and storage over the internet."
        },
        {
          id: "CC_Med_2",
          type: "mcq",
          text: "Which of the following is NOT a cloud service model?",
          options: [
            { type: "text", value: "Infrastructure as a Service (IaaS)" },
            { type: "text", value: "Platform as a Service (PaaS)" },
            { type: "text", value: "Software as a Service (SaaS)" },
            { type: "text", value: "Networking as a Service (NaaS)" }
          ],
          correctAnswer: { type: "text", value: "Networking as a Service (NaaS)" },
          explanation: "The main service models are IaaS, PaaS, and SaaS. NaaS is not a primary model."
        },
        {
          id: "CC_Med_3",
          type: "mcq",
          text: "Which deployment model offers resources exclusively for one organization?",
          options: [
            { type: "text", value: "Public Cloud" },
            { type: "text", value: "Private Cloud" },
            { type: "text", value: "Hybrid Cloud" },
            { type: "text", value: "Community Cloud" }
          ],
          correctAnswer: { type: "text", value: "Private Cloud" },
          explanation: "Private Cloud is dedicated to a single organization, providing higher control and security."
        },
        {
          id: "CC_Med_4",
          type: "mcq",
          text: "Which of the following is an example of SaaS?",
          options: [
            { type: "text", value: "Google Workspace (Docs, Sheets, Gmail)" },
            { type: "text", value: "Amazon EC2" },
            { type: "text", value: "Microsoft Azure App Services" },
            { type: "text", value: "VMware vSphere" }
          ],
          correctAnswer: { type: "text", value: "Google Workspace (Docs, Sheets, Gmail)" },
          explanation: "Google Workspace is SaaS because applications are delivered via the web and managed by the provider."
        },
        {
          id: "CC_Med_5",
          type: "mcq",
          text: "Which cloud computing feature allows automatic adjustment of resources based on demand?",
          options: [
            { type: "text", value: "Elasticity" },
            { type: "text", value: "Virtualization" },
            { type: "text", value: "Scalability" },
            { type: "text", value: "Reliability" }
          ],
          correctAnswer: { type: "text", value: "Elasticity" },
          explanation: "Elasticity refers to automatically scaling resources up or down based on workload demand."
        },
        {
          id: "CC_Med_6",
          type: "mcq",
          text: "Which cloud provider service is mainly used for hosting virtual servers?",
          options: [
            { type: "text", value: "Amazon EC2" },
            { type: "text", value: "Google BigQuery" },
            { type: "text", value: "Dropbox" },
            { type: "text", value: "Microsoft OneDrive" }
          ],
          correctAnswer: { type: "text", value: "Amazon EC2" },
          explanation: "Amazon EC2 provides Infrastructure as a Service (IaaS) for hosting virtual servers."
        },
        {
          id: "CC_Med_7",
          type: "mcq",
          text: "Which of these is a major advantage of cloud computing?",
          options: [
            { type: "text", value: "Higher upfront hardware cost" },
            { type: "text", value: "Pay-as-you-go pricing model" },
            { type: "text", value: "Limited scalability" },
            { type: "text", value: "On-premises maintenance" }
          ],
          correctAnswer: { type: "text", value: "Pay-as-you-go pricing model" },
          explanation: "Cloud services typically use a pay-as-you-go model, reducing upfront costs."
        },
        {
          id: "CC_Med_8",
          type: "mcq",
          text: "Which type of cloud service is used by developers to deploy applications without managing infrastructure?",
          options: [
            { type: "text", value: "IaaS" },
            { type: "text", value: "PaaS" },
            { type: "text", value: "SaaS" },
            { type: "text", value: "DaaS" }
          ],
          correctAnswer: { type: "text", value: "PaaS" },
          explanation: "PaaS provides a ready environment for application development and deployment without managing infrastructure."
        },
        {
          id: "CC_Med_9",
          type: "mcq",
          text: "Which deployment model combines both public and private cloud features?",
          options: [
            { type: "text", value: "Private Cloud" },
            { type: "text", value: "Hybrid Cloud" },
            { type: "text", value: "Community Cloud" },
            { type: "text", value: "Distributed Cloud" }
          ],
          correctAnswer: { type: "text", value: "Hybrid Cloud" },
          explanation: "Hybrid Cloud integrates private and public clouds, allowing flexibility and optimized workload distribution."
        },
        {
          id: "CC_Med_10",
          type: "mcq",
          text: "Which of the following enables cloud virtualization?",
          options: [
            { type: "text", value: "Hypervisor" },
            { type: "text", value: "Router" },
            { type: "text", value: "Switch" },
            { type: "text", value: "Firewall" }
          ],
          correctAnswer: { type: "text", value: "Hypervisor" },
          explanation: "A hypervisor allows multiple virtual machines to run on a single physical machine, enabling virtualization."
        },
        {
          id: "CC_Med_11",
          type: "mcq",
          text: "Which company provides Microsoft Azure cloud services?",
          options: [
            { type: "text", value: "Google" },
            { type: "text", value: "Amazon" },
            { type: "text", value: "Microsoft" },
            { type: "text", value: "IBM" }
          ],
          correctAnswer: { type: "text", value: "Microsoft" },
          explanation: "Azure is Microsoft’s cloud platform offering IaaS, PaaS, and SaaS."
        },
        {
          id: "CC_Med_12",
          type: "mcq",
          text: "Which of the following is an example of cloud storage service?",
          options: [
            { type: "text", value: "Dropbox" },
            { type: "text", value: "Apache Hadoop" },
            { type: "text", value: "Oracle Database" },
            { type: "text", value: "Docker" }
          ],
          correctAnswer: { type: "text", value: "Dropbox" },
          explanation: "Dropbox is a cloud storage service, enabling users to store and share files online."
        }
      ]
    }
  ]
};

export default CloudComputing_Medium;
