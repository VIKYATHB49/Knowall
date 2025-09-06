// src/data/fill-blanks-2.js
const FillBlanks_Medium = {
  fileName: "fill-blanks-2",
  testName: "Fill in the Blanks Test - 2",
  sections: [
    {
      name: "Fill in the Blanks Test - 2",
      time: 20,
      status: "Not Yet Started",
      questions: [
        {
          id: "FB_Med_1",
          type: "mcq",
          text: "In a relational database, data is stored in ____.",
          options: [
            { type: "text", value: "Tables" },
            { type: "text", value: "Files" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Stacks" }
          ],
          correctAnswer: { type: "text", value: "Tables" },
          explanation: "Relational databases store data in structured tables with rows and columns."
        },
        {
          id: "FB_Med_2",
          type: "mcq",
          text: "The Boolean operator for logical AND is represented by ____.",
          options: [
            { type: "text", value: "&&" },
            { type: "text", value: "||" },
            { type: "text", value: "!" },
            { type: "text", value: "^" }
          ],
          correctAnswer: { type: "text", value: "&&" },
          explanation: "In most programming languages, && is used for logical AND operations."
        },
        {
          id: "FB_Med_3",
          type: "mcq",
          text: "The transport layer protocol used for reliable communication is ____.",
          options: [
            { type: "text", value: "TCP" },
            { type: "text", value: "UDP" },
            { type: "text", value: "IP" },
            { type: "text", value: "HTTP" }
          ],
          correctAnswer: { type: "text", value: "TCP" },
          explanation: "TCP (Transmission Control Protocol) ensures reliable, ordered data delivery."
        },
        {
          id: "FB_Med_4",
          type: "mcq",
          text: "The truth table for an OR gate has output 1 when ____.",
          options: [
            { type: "text", value: "At least one input is 1" },
            { type: "text", value: "Both inputs are 0" },
            { type: "text", value: "Both inputs are 1" },
            { type: "text", value: "No input is 1" }
          ],
          correctAnswer: { type: "text", value: "At least one input is 1" },
          explanation: "An OR gate outputs 1 if any input is 1."
        },
        {
          id: "FB_Med_5",
          type: "mcq",
          text: "In object-oriented programming, a class is a ____.",
          options: [
            { type: "text", value: "Blueprint" },
            { type: "text", value: "Object" },
            { type: "text", value: "Function" },
            { type: "text", value: "Variable" }
          ],
          correctAnswer: { type: "text", value: "Blueprint" },
          explanation: "A class defines the blueprint for objects, specifying properties and methods."
        },
        {
          id: "FB_Med_6",
          type: "mcq",
          text: "The command to create a new directory in Linux is ____.",
          options: [
            { type: "text", value: "mkdir" },
            { type: "text", value: "rmdir" },
            { type: "text", value: "touch" },
            { type: "text", value: "cd" }
          ],
          correctAnswer: { type: "text", value: "mkdir" },
          explanation: "`mkdir` is used to make a new directory in Linux systems."
        },
        {
          id: "FB_Med_7",
          type: "mcq",
          text: "IP address version 6 is abbreviated as ____.",
          options: [
            { type: "text", value: "IPv6" },
            { type: "text", value: "IP6" },
            { type: "text", value: "IPv4" },
            { type: "text", value: "IPV" }
          ],
          correctAnswer: { type: "text", value: "IPv6" },
          explanation: "IPv6 is the latest version of Internet Protocol addressing."
        },
        {
          id: "FB_Med_8",
          type: "mcq",
          text: "In digital logic, a flip-flop is used for ____.",
          options: [
            { type: "text", value: "Memory storage" },
            { type: "text", value: "Arithmetic operations" },
            { type: "text", value: "Networking" },
            { type: "text", value: "Switching" }
          ],
          correctAnswer: { type: "text", value: "Memory storage" },
          explanation: "Flip-flops are bistable devices used to store one bit of memory."
        },
        {
          id: "FB_Med_9",
          type: "mcq",
          text: "In DBMS, a primary key uniquely identifies a ____.",
          options: [
            { type: "text", value: "Record" },
            { type: "text", value: "Table" },
            { type: "text", value: "Column" },
            { type: "text", value: "Database" }
          ],
          correctAnswer: { type: "text", value: "Record" },
          explanation: "A primary key ensures that each record in a table is unique."
        },
        {
          id: "FB_Med_10",
          type: "mcq",
          text: "The main function of DNS is to convert domain names into ____.",
          options: [
            { type: "text", value: "IP addresses" },
            { type: "text", value: "MAC addresses" },
            { type: "text", value: "URLs" },
            { type: "text", value: "Ports" }
          ],
          correctAnswer: { type: "text", value: "IP addresses" },
          explanation: "DNS translates human-readable domain names into IP addresses used by computers."
        }
      ]
    }
  ]
};

export default FillBlanks_Medium;
