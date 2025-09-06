const Computer_Organization_Advanced_Hard = {
  fileName: "computer-organization-advanced",
  testName: "Computer Organization Advanced Test",
  sections: [
    {
      name: "Computer Organization Advanced",
      status: "Not Yet Started",
      questions: [
        {
          id: "CO_Hard_1",
          type: "mcq",
          text: "What is pipelining in CPU architecture?",
          options: [
            { type: "text", value: "Overlapping execution of instructions" },
            { type: "text", value: "Sequential execution of instructions" },
            { type: "text", value: "Storing instructions in cache" },
            { type: "text", value: "Fetching multiple instructions simultaneously" }
          ],
          correctAnswer: { type: "text", value: "Overlapping execution of instructions" },
          explanation: "Pipelining allows multiple instruction stages to be processed simultaneously, increasing throughput."
        },
        {
          id: "CO_Hard_2",
          type: "mcq",
          text: "Which hazard occurs when an instruction depends on the result of a previous instruction?",
          options: [
            { type: "text", value: "Data hazard" },
            { type: "text", value: "Control hazard" },
            { type: "text", value: "Structural hazard" },
            { type: "text", value: "Branch hazard" }
          ],
          correctAnswer: { type: "text", value: "Data hazard" },
          explanation: "Data hazards occur when instructions need data that is not yet available from previous instructions."
        },
        {
          id: "CO_Hard_3",
          type: "mcq",
          text: "What is the main function of the stack pointer (SP)?",
          options: [
            { type: "text", value: "Points to the top of the stack in memory" },
            { type: "text", value: "Holds the return address of a function" },
            { type: "text", value: "Stores program instructions" },
            { type: "text", value: "Stores temporary data from ALU" }
          ],
          correctAnswer: { type: "text", value: "Points to the top of the stack in memory" },
          explanation: "The stack pointer indicates the current top of the stack for push/pop operations."
        },
        {
          id: "CO_Hard_4",
          type: "mcq",
          text: "Which addressing mode uses a constant value in the instruction itself?",
          options: [
            { type: "text", value: "Immediate addressing" },
            { type: "text", value: "Direct addressing" },
            { type: "text", value: "Indirect addressing" },
            { type: "text", value: "Register addressing" }
          ],
          correctAnswer: { type: "text", value: "Immediate addressing" },
          explanation: "Immediate addressing provides the operand directly within the instruction."
        },
        {
          id: "CO_Hard_5",
          type: "mcq",
          text: "Which component improves CPU performance by storing frequently accessed data?",
          options: [
            { type: "text", value: "Cache Memory" },
            { type: "text", value: "Registers" },
            { type: "text", value: "Main Memory" },
            { type: "text", value: "Hard Disk" }
          ],
          correctAnswer: { type: "text", value: "Cache Memory" },
          explanation: "Cache memory reduces CPU access time by storing frequently used data closer to the processor."
        },
        {
          id: "CO_Hard_6",
          type: "mcq",
          text: "What is the purpose of a control word in a CPU?",
          options: [
            { type: "text", value: "Directs control signals for instruction execution" },
            { type: "text", value: "Stores temporary data" },
            { type: "text", value: "Holds the memory address of operands" },
            { type: "text", value: "Performs arithmetic operations" }
          ],
          correctAnswer: { type: "text", value: "Directs control signals for instruction execution" },
          explanation: "Control words contain signals that coordinate the CPU’s operations for executing instructions."
        },
        {
          id: "CO_Hard_7",
          type: "mcq",
          text: "Which technique is used to resolve branch hazards in pipelining?",
          options: [
            { type: "text", value: "Branch prediction" },
            { type: "text", value: "Cache memory" },
            { type: "text", value: "Register renaming" },
            { type: "text", value: "Instruction fetch" }
          ],
          correctAnswer: { type: "text", value: "Branch prediction" },
          explanation: "Branch prediction guesses the outcome of conditional branches to reduce pipeline stalls."
        },
        {
          id: "CO_Hard_8",
          type: "mcq",
          text: "What is the main difference between RISC and CISC architectures?",
          options: [
            { type: "text", value: "RISC uses simple instructions; CISC uses complex instructions" },
            { type: "text", value: "RISC has more registers; CISC has fewer" },
            { type: "text", value: "RISC is slower; CISC is faster" },
            { type: "text", value: "RISC uses microcode; CISC does not" }
          ],
          correctAnswer: { type: "text", value: "RISC uses simple instructions; CISC uses complex instructions" },
          explanation: "RISC focuses on simple instructions executed quickly, whereas CISC has more complex instructions."
        },
        {
          id: "CO_Hard_9",
          type: "mcq",
          text: "What is the function of a memory address register (MAR)?",
          options: [
            { type: "text", value: "Holds the address of memory to read/write" },
            { type: "text", value: "Stores instruction to be executed" },
            { type: "text", value: "Performs arithmetic operations" },
            { type: "text", value: "Controls input/output devices" }
          ],
          correctAnswer: { type: "text", value: "Holds the address of memory to read/write" },
          explanation: "MAR stores the memory address for accessing memory locations."
        },
        {
          id: "CO_Hard_10",
          type: "mcq",
          text: "Which technique allows multiple instructions to share the same functional unit?",
          options: [
            { type: "text", value: "Time-division multiplexing" },
            { type: "text", value: "Pipelining" },
            { type: "text", value: "Branch prediction" },
            { type: "text", value: "Cache mapping" }
          ],
          correctAnswer: { type: "text", value: "Time-division multiplexing" },
          explanation: "Time-division multiplexing lets multiple instructions use the same hardware unit in different time slots."
        },
        {
          id: "CO_Hard_11",
          type: "mcq",
          text: "Which CPU component handles interrupt signals?",
          options: [
            { type: "text", value: "Interrupt controller" },
            { type: "text", value: "Control Unit" },
            { type: "text", value: "ALU" },
            { type: "text", value: "Registers" }
          ],
          correctAnswer: { type: "text", value: "Interrupt controller" },
          explanation: "The interrupt controller manages and prioritizes interrupt signals to the CPU."
        },
        {
          id: "CO_Hard_12",
          type: "mcq",
          text: "What is the function of register renaming in a CPU?",
          options: [
            { type: "text", value: "Avoids false data dependencies" },
            { type: "text", value: "Improves memory access speed" },
            { type: "text", value: "Caches frequently used instructions" },
            { type: "text", value: "Predicts branch outcomes" }
          ],
          correctAnswer: { type: "text", value: "Avoids false data dependencies" },
          explanation: "Register renaming eliminates false hazards by giving unique names to registers during execution."
        },
        {
          id: "CO_Hard_13",
          type: "mcq",
          text: "Which technique improves cache performance by keeping recently used data?",
          options: [
            { type: "text", value: "Temporal locality" },
            { type: "text", value: "Spatial locality" },
            { type: "text", value: "Direct mapping" },
            { type: "text", value: "Associative mapping" }
          ],
          correctAnswer: { type: "text", value: "Temporal locality" },
          explanation: "Temporal locality refers to accessing the same data repeatedly within a short period."
        },
        {
          id: "CO_Hard_14",
          type: "mcq",
          text: "Which memory mapping technique maps each block of main memory to a fixed cache line?",
          options: [
            { type: "text", value: "Direct mapping" },
            { type: "text", value: "Associative mapping" },
            { type: "text", value: "Set-associative mapping" },
            { type: "text", value: "Virtual mapping" }
          ],
          correctAnswer: { type: "text", value: "Direct mapping" },
          explanation: "Direct mapping assigns each main memory block to a specific cache line."
        },
        {
          id: "CO_Hard_15",
          type: "mcq",
          text: "What is the primary benefit of a superscalar architecture?",
          options: [
            { type: "text", value: "Execute multiple instructions per clock cycle" },
            { type: "text", value: "Reduce memory access time" },
            { type: "text", value: "Improve branch prediction" },
            { type: "text", value: "Increase cache size" }
          ],
          correctAnswer: { type: "text", value: "Execute multiple instructions per clock cycle" },
          explanation: "Superscalar CPUs have multiple execution units to process several instructions simultaneously."
        },
        {
          id: "CO_Hard_16",
          type: "mcq",
          text: "Which instruction format field specifies the operation to be performed?",
          options: [
            { type: "text", value: "Opcode" },
            { type: "text", value: "Operand" },
            { type: "text", value: "Address" },
            { type: "text", value: "Immediate value" }
          ],
          correctAnswer: { type: "text", value: "Opcode" },
          explanation: "The opcode field of an instruction tells the CPU which operation to perform."
        }
      ]
    }
  ]
};

export default Computer_Organization_Advanced_Hard;
