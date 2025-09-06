// src/data/digital-logic.js

const DigitalLogic_Medium = {
  fileName: "digital-logic",
  testName: "Digital Logic Test",
  sections: [
    {
      name: "Digital Logic",
      time: 30,
      status: "Not Yet Started",
      questions: [
        {
          id: "DL_Med_1",
          type: "mcq",
          text: "Which of the following number systems is not a positional number system?",
          options: [
            { type: "text", value: "Decimal" },
            { type: "text", value: "Binary" },
            { type: "text", value: "Unary" },
            { type: "text", value: "Octal" }
          ],
          correctAnswer: { type: "text", value: "Unary" },
          explanation: "Unary is not positional since it does not depend on the position of digits."
        },
        {
          id: "DL_Med_2",
          type: "mcq",
          text: "Which gate is known as a 'Universal Gate'?",
          options: [
            { type: "text", value: "OR Gate" },
            { type: "text", value: "NAND Gate" },
            { type: "text", value: "XOR Gate" },
            { type: "text", value: "AND Gate" }
          ],
          correctAnswer: { type: "text", value: "NAND Gate" },
          explanation: "NAND and NOR are universal gates since any logic function can be built using them."
        },
        {
          id: "DL_Med_3",
          type: "mcq",
          text: "The Boolean expression A + A'B simplifies to:",
          options: [
            { type: "text", value: "A + B" },
            { type: "text", value: "A' + B" },
            { type: "text", value: "A + B'" },
            { type: "text", value: "A" }
          ],
          correctAnswer: { type: "text", value: "A + B" },
          explanation: "Using the Absorption Law, A + A'B = A + B."
        },
        {
          id: "DL_Med_4",
          type: "mcq",
          text: "Which logic family is the fastest?",
          options: [
            { type: "text", value: "CMOS" },
            { type: "text", value: "ECL" },
            { type: "text", value: "TTL" },
            { type: "text", value: "RTL" }
          ],
          correctAnswer: { type: "text", value: "ECL" },
          explanation: "Emitter Coupled Logic (ECL) is the fastest due to non-saturation of transistors."
        },
        {
          id: "DL_Med_5",
          type: "mcq",
          text: "The 2’s complement of binary number 10110 is:",
          options: [
            { type: "text", value: "01001" },
            { type: "text", value: "01010" },
            { type: "text", value: "10101" },
            { type: "text", value: "01101" }
          ],
          correctAnswer: { type: "text", value: "01010" },
          explanation: "Invert bits: 01001 → add 1 = 01010."
        },
        {
          id: "DL_Med_6",
          type: "mcq",
          text: "What is the minimal form of the expression AB + A'C + BC?",
          options: [
            { type: "text", value: "AB + A'C" },
            { type: "text", value: "A + C" },
            { type: "text", value: "BC + A'C" },
            { type: "text", value: "AB + C" }
          ],
          correctAnswer: { type: "text", value: "AB + A'C" },
          explanation: "Using Boolean simplification, AB + A'C + BC reduces to AB + A'C."
        },
        {
          id: "DL_Med_7",
          type: "mcq",
          text: "Which flip-flop is known as the 'Toggle Flip-Flop'?",
          options: [
            { type: "text", value: "SR Flip-Flop" },
            { type: "text", value: "JK Flip-Flop" },
            { type: "text", value: "T Flip-Flop" },
            { type: "text", value: "D Flip-Flop" }
          ],
          correctAnswer: { type: "text", value: "T Flip-Flop" },
          explanation: "T Flip-Flop toggles its state on every clock pulse when T=1."
        },
        {
          id: "DL_Med_8",
          type: "mcq",
          text: "Which method is used to minimize Boolean expressions?",
          options: [
            { type: "text", value: "Truth Table" },
            { type: "text", value: "Karnaugh Map" },
            { type: "text", value: "Shannon Expansion" },
            { type: "text", value: "DeMorgan’s Theorem" }
          ],
          correctAnswer: { type: "text", value: "Karnaugh Map" },
          explanation: "K-Map is a graphical method used for minimization."
        },
        {
          id: "DL_Med_9",
          type: "mcq",
          text: "A half-adder circuit has how many inputs and outputs?",
          options: [
            { type: "text", value: "2 inputs, 1 output" },
            { type: "text", value: "2 inputs, 2 outputs" },
            { type: "text", value: "3 inputs, 2 outputs" },
            { type: "text", value: "2 inputs, 3 outputs" }
          ],
          correctAnswer: { type: "text", value: "2 inputs, 2 outputs" },
          explanation: "Half-adder has two inputs and two outputs: Sum and Carry."
        },
        {
          id: "DL_Med_10",
          type: "mcq",
          text: "Gray code is primarily used in:",
          options: [
            { type: "text", value: "Error detection" },
            { type: "text", value: "Binary arithmetic" },
            { type: "text", value: "Rotary encoders" },
            { type: "text", value: "Floating point representation" }
          ],
          correctAnswer: { type: "text", value: "Rotary encoders" },
          explanation: "Gray code prevents errors in mechanical encoders as only one bit changes at a time."
        },
        {
          id: "DL_Med_11",
          type: "mcq",
          text: "The output of XOR gate is 1 when:",
          options: [
            { type: "text", value: "Inputs are equal" },
            { type: "text", value: "Inputs are different" },
            { type: "text", value: "Both inputs are 1" },
            { type: "text", value: "Both inputs are 0" }
          ],
          correctAnswer: { type: "text", value: "Inputs are different" },
          explanation: "XOR produces HIGH only when inputs are different."
        },
        {
          id: "DL_Med_12",
          type: "mcq",
          text: "How many select lines are required for a 16:1 multiplexer?",
          options: [
            { type: "text", value: "2" },
            { type: "text", value: "3" },
            { type: "text", value: "4" },
            { type: "text", value: "5" }
          ],
          correctAnswer: { type: "text", value: "4" },
          explanation: "A 16:1 MUX requires log2(16) = 4 select lines."
        },
        {
          id: "DL_Med_13",
          type: "mcq",
          text: "Which counter counts in both directions?",
          options: [
            { type: "text", value: "Ring Counter" },
            { type: "text", value: "Up Counter" },
            { type: "text", value: "Down Counter" },
            { type: "text", value: "Up/Down Counter" }
          ],
          correctAnswer: { type: "text", value: "Up/Down Counter" },
          explanation: "Up/Down Counter can count incrementally or decrementally."
        },
        {
          id: "DL_Med_14",
          type: "mcq",
          text: "Which of the following is not a combinational circuit?",
          options: [
            { type: "text", value: "Decoder" },
            { type: "text", value: "Encoder" },
            { type: "text", value: "Counter" },
            { type: "text", value: "Multiplexer" }
          ],
          correctAnswer: { type: "text", value: "Counter" },
          explanation: "Counter is sequential as it requires clock and memory."
        },
        {
          id: "DL_Med_15",
          type: "mcq",
          text: "Which of the following is the fastest adder?",
          options: [
            { type: "text", value: "Ripple Carry Adder" },
            { type: "text", value: "Carry Look-ahead Adder" },
            { type: "text", value: "Serial Adder" },
            { type: "text", value: "Parallel Adder" }
          ],
          correctAnswer: { type: "text", value: "Carry Look-ahead Adder" },
          explanation: "Carry Look-ahead Adder reduces carry propagation delay."
        },
        {
          id: "DL_Med_16",
          type: "mcq",
          text: "Which code detects single-bit errors?",
          options: [
            { type: "text", value: "Gray Code" },
            { type: "text", value: "Parity Bit" },
            { type: "text", value: "ASCII" },
            { type: "text", value: "BCD" }
          ],
          correctAnswer: { type: "text", value: "Parity Bit" },
          explanation: "Parity checks detect single-bit errors in communication."
        },
        {
          id: "DL_Med_17",
          type: "mcq",
          text: "What is the minimum number of NAND gates required to implement an OR gate?",
          options: [
            { type: "text", value: "2" },
            { type: "text", value: "3" },
            { type: "text", value: "4" },
            { type: "text", value: "1" }
          ],
          correctAnswer: { type: "text", value: "3" },
          explanation: "Using DeMorgan’s theorem, OR can be implemented with 3 NANDs."
        },
        {
          id: "DL_Med_18",
          type: "mcq",
          text: "Which of the following is not a characteristic of CMOS?",
          options: [
            { type: "text", value: "Low power consumption" },
            { type: "text", value: "High noise immunity" },
            { type: "text", value: "High speed" },
            { type: "text", value: "High packing density" }
          ],
          correctAnswer: { type: "text", value: "High speed" },
          explanation: "CMOS is slower than ECL but has high density and low power consumption."
        },
        {
          id: "DL_Med_19",
          type: "mcq",
          text: "What is the main advantage of a synchronous counter over an asynchronous counter?",
          options: [
            { type: "text", value: "Requires fewer flip-flops" },
            { type: "text", value: "No propagation delay accumulation" },
            { type: "text", value: "Cheaper to design" },
            { type: "text", value: "Simpler design" }
          ],
          correctAnswer: { type: "text", value: "No propagation delay accumulation" },
          explanation: "In synchronous counters, all flip-flops are clocked simultaneously."
        },
        {
          id: "DL_Med_20",
          type: "mcq",
          text: "Which of the following circuits converts serial data to parallel data?",
          options: [
            { type: "text", value: "Decoder" },
            { type: "text", value: "Multiplexer" },
            { type: "text", value: "Shift Register" },
            { type: "text", value: "Counter" }
          ],
          correctAnswer: { type: "text", value: "Shift Register" },
          explanation: "Shift registers can convert between serial and parallel data formats."
        }
      ]
    }
  ]
};

export default DigitalLogic_Medium;
