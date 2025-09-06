const Computer_Organization_Basics_Easy = {
  fileName: "computer-organization-basics",
  testName: "Computer Organization Basics Test",
  sections: [
    {
      name: "Computer Organization Basics",
      status: "Not Yet Started",
      questions: [
        {
          id: "CO_Easy_1",
          type: "mcq",
          text: "What is the primary function of the ALU in a CPU?",
          options: [
            { type: "text", value: "Perform arithmetic and logical operations" },
            { type: "text", value: "Store data temporarily" },
            { type: "text", value: "Manage input/output devices" },
            { type: "text", value: "Control program execution" }
          ],
          correctAnswer: { type: "text", value: "Perform arithmetic and logical operations" },
          explanation: "The ALU performs all arithmetic and logical operations in the CPU."
        },
        {
          id: "CO_Easy_2",
          type: "mcq",
          text: "Which component controls the flow of data inside the CPU?",
          options: [
            { type: "text", value: "Control Unit" },
            { type: "text", value: "ALU" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Cache Memory" }
          ],
          correctAnswer: { type: "text", value: "Control Unit" },
          explanation: "The Control Unit directs the flow of data and instructions within the CPU."
        },
        {
          id: "CO_Easy_3",
          type: "mcq",
          text: "Which type of memory is fastest in a computer system?",
          options: [
            { type: "text", value: "Cache Memory" },
            { type: "text", value: "RAM" },
            { type: "text", value: "ROM" },
            { type: "text", value: "Hard Disk" }
          ],
          correctAnswer: { type: "text", value: "Cache Memory" },
          explanation: "Cache memory is fastest because it is located close to the CPU."
        },
        {
          id: "CO_Easy_4",
          type: "mcq",
          text: "What does the program counter (PC) store?",
          options: [
            { type: "text", value: "Address of the next instruction" },
            { type: "text", value: "Data to be processed" },
            { type: "text", value: "Result of ALU operations" },
            { type: "text", value: "Status flags" }
          ],
          correctAnswer: { type: "text", value: "Address of the next instruction" },
          explanation: "The PC points to the memory address of the next instruction to execute."
        },
        {
          id: "CO_Easy_5",
          type: "mcq",
          text: "Which register temporarily holds data being transferred to or from memory?",
          options: [
            { type: "text", value: "Memory Buffer Register (MBR)" },
            { type: "text", value: "Instruction Register (IR)" },
            { type: "text", value: "Program Counter (PC)" },
            { type: "text", value: "Stack Pointer (SP)" }
          ],
          correctAnswer: { type: "text", value: "Memory Buffer Register (MBR)" },
          explanation: "MBR temporarily stores data moving between CPU and memory."
        },
        {
          id: "CO_Easy_6",
          type: "mcq",
          text: "What is the function of registers in a CPU?",
          options: [
            { type: "text", value: "Store small amounts of data for fast access" },
            { type: "text", value: "Control the flow of instructions" },
            { type: "text", value: "Perform arithmetic operations" },
            { type: "text", value: "Store permanent data" }
          ],
          correctAnswer: { type: "text", value: "Store small amounts of data for fast access" },
          explanation: "Registers provide very fast temporary storage for the CPU."
        },
        {
          id: "CO_Easy_7",
          type: "mcq",
          text: "Which CPU component executes instructions stored in memory?",
          options: [
            { type: "text", value: "ALU" },
            { type: "text", value: "Control Unit" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Cache" }
          ],
          correctAnswer: { type: "text", value: "ALU" },
          explanation: "The ALU performs operations defined by the instructions executed by the CPU."
        },
        {
          id: "CO_Easy_8",
          type: "mcq",
          text: "Which memory is non-volatile and used to store firmware?",
          options: [
            { type: "text", value: "ROM" },
            { type: "text", value: "RAM" },
            { type: "text", value: "Cache" },
            { type: "text", value: "Registers" }
          ],
          correctAnswer: { type: "text", value: "ROM" },
          explanation: "ROM retains data even when the computer is powered off and stores firmware."
        },
        {
          id: "CO_Easy_9",
          type: "mcq",
          text: "What is the main purpose of the system bus?",
          options: [
            { type: "text", value: "Transfer data, instructions, and control signals" },
            { type: "text", value: "Perform arithmetic operations" },
            { type: "text", value: "Store temporary data" },
            { type: "text", value: "Manage user inputs" }
          ],
          correctAnswer: { type: "text", value: "Transfer data, instructions, and control signals" },
          explanation: "The system bus connects CPU, memory, and peripherals for data transfer."
        },
        {
          id: "CO_Easy_10",
          type: "mcq",
          text: "Which unit decodes instructions fetched from memory?",
          options: [
            { type: "text", value: "Control Unit" },
            { type: "text", value: "ALU" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Cache" }
          ],
          correctAnswer: { type: "text", value: "Control Unit" },
          explanation: "The Control Unit decodes instructions and issues control signals to execute them."
        },
        {
          id: "CO_Easy_11",
          type: "mcq",
          text: "Which component temporarily holds the instruction currently being executed?",
          options: [
            { type: "text", value: "Instruction Register (IR)" },
            { type: "text", value: "Program Counter (PC)" },
            { type: "text", value: "Stack Pointer (SP)" },
            { type: "text", value: "MBR" }
          ],
          correctAnswer: { type: "text", value: "Instruction Register (IR)" },
          explanation: "IR stores the instruction that the CPU is currently executing."
        },
        {
          id: "CO_Easy_12",
          type: "mcq",
          text: "Which CPU component coordinates the activities of all other components?",
          options: [
            { type: "text", value: "Control Unit" },
            { type: "text", value: "ALU" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Cache" }
          ],
          correctAnswer: { type: "text", value: "Control Unit" },
          explanation: "The Control Unit manages the execution of instructions and coordinates CPU components."
        }
      ]
    }
  ]
};

export default Computer_Organization_Basics_Easy;
