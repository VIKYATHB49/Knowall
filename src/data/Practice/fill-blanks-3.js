// src/data/fill-blanks-3.js
const FillBlanks_Hard = {
  fileName: "fill-blanks-3",
  testName: "Fill in the Blanks Test - 3",
  sections: [
    {
      name: "Fill in the Blanks Test - 3",
      time: 20,
      status: "Not Yet Started",
      questions: [
        {
          id: "FB_Hard_1",
          type: "mcq",
          text: "In a star topology, all devices are connected to a central ____.",
          options: [
            { type: "text", value: "Hub" },
            { type: "text", value: "Router" },
            { type: "text", value: "Switch" },
            { type: "text", value: "Repeater" }
          ],
          correctAnswer: { type: "text", value: "Hub" },
          explanation: "In a star topology, all nodes are connected through a central hub or switch."
        },
        {
          id: "FB_Hard_2",
          type: "mcq",
          text: "The difference between TCP and UDP is that TCP is ____ while UDP is not.",
          options: [
            { type: "text", value: "Reliable" },
            { type: "text", value: "Faster" },
            { type: "text", value: "Connectionless" },
            { type: "text", value: "Unreliable" }
          ],
          correctAnswer: { type: "text", value: "Reliable" },
          explanation: "TCP provides reliable, ordered delivery, while UDP is connectionless and unreliable."
        },
        {
          id: "FB_Hard_3",
          type: "mcq",
          text: "In relational algebra, the operation to combine rows from two tables based on a related column is called ____.",
          options: [
            { type: "text", value: "Join" },
            { type: "text", value: "Union" },
            { type: "text", value: "Select" },
            { type: "text", value: "Project" }
          ],
          correctAnswer: { type: "text", value: "Join" },
          explanation: "Join operation merges rows from two tables using a common attribute."
        },
        {
          id: "FB_Hard_4",
          type: "mcq",
          text: "A 4-bit binary counter can count up to ____.",
          options: [
            { type: "text", value: "15" },
            { type: "text", value: "16" },
            { type: "text", value: "8" },
            { type: "text", value: "32" }
          ],
          correctAnswer: { type: "text", value: "15" },
          explanation: "A 4-bit counter counts from 0 to 2^4 - 1 = 15."
        },
        {
          id: "FB_Hard_5",
          type: "mcq",
          text: "The IPv4 address consists of ____ bits.",
          options: [
            { type: "text", value: "32" },
            { type: "text", value: "64" },
            { type: "text", value: "128" },
            { type: "text", value: "16" }
          ],
          correctAnswer: { type: "text", value: "32" },
          explanation: "IPv4 addresses are 32-bit numerical labels assigned to devices."
        },
        {
          id: "FB_Hard_6",
          type: "mcq",
          text: "In digital circuits, a multiplexer is used to ____.",
          options: [
            { type: "text", value: "Select one input from multiple inputs" },
            { type: "text", value: "Add two numbers" },
            { type: "text", value: "Store data" },
            { type: "text", value: "Amplify signals" }
          ],
          correctAnswer: { type: "text", value: "Select one input from multiple inputs" },
          explanation: "A multiplexer routes one of several inputs to a single output line."
        },
        {
          id: "FB_Hard_7",
          type: "mcq",
          text: "In DBMS, normalization is used to eliminate ____.",
          options: [
            { type: "text", value: "Redundancy" },
            { type: "text", value: "Indexes" },
            { type: "text", value: "Keys" },
            { type: "text", value: "Tables" }
          ],
          correctAnswer: { type: "text", value: "Redundancy" },
          explanation: "Normalization organizes data to minimize redundancy and dependency."
        },
        {
          id: "FB_Hard_8",
          type: "mcq",
          text: "The bandwidth of a channel is measured in ____.",
          options: [
            { type: "text", value: "Hertz" },
            { type: "text", value: "Bytes" },
            { type: "text", value: "Seconds" },
            { type: "text", value: "Bits" }
          ],
          correctAnswer: { type: "text", value: "Hertz" },
          explanation: "Bandwidth represents the range of frequencies transmitted, measured in Hertz."
        },
        {
          id: "FB_Hard_9",
          type: "mcq",
          text: "In object-oriented programming, inheritance allows a class to ____.",
          options: [
            { type: "text", value: "Acquire properties of another class" },
            { type: "text", value: "Store objects" },
            { type: "text", value: "Encrypt data" },
            { type: "text", value: "Execute code" }
          ],
          correctAnswer: { type: "text", value: "Acquire properties of another class" },
          explanation: "Inheritance lets a class reuse fields and methods of a parent class."
        },
        {
          id: "FB_Hard_10",
          type: "mcq",
          text: "In networking, a subnet mask is used to ____.",
          options: [
            { type: "text", value: "Identify the network and host portions of an IP address" },
            { type: "text", value: "Encrypt packets" },
            { type: "text", value: "Increase bandwidth" },
            { type: "text", value: "Route traffic" }
          ],
          correctAnswer: { type: "text", value: "Identify the network and host portions of an IP address" },
          explanation: "Subnet masks separate the network and host identifiers in an IP address."
        }
      ]
    }
  ]
};

export default FillBlanks_Hard;
