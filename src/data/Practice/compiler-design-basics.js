const CompilerDesign_Easy = {
  fileName: "compiler-design-basics",
  testName: "Compiler Design Basics Test",
  sections: [
    {
      name: "Compiler Design Basics",
      status: "Not Yet Started",
      questions: [
        {
          id: "CD_Easy_1",
          type: "mcq",
          text: "Which of the following is the first phase of a compiler?",
          options: [
            { type: "text", value: "Syntax Analysis" },
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Semantic Analysis" },
            { type: "text", value: "Code Generation" }
          ],
          correctAnswer: { type: "text", value: "Lexical Analysis" },
          explanation: "Lexical analysis is the first phase of a compiler. It converts source code into tokens."
        },
        {
          id: "CD_Easy_2",
          type: "mcq",
          text: "The output of the lexical analyzer is:",
          options: [
            { type: "text", value: "Parse Tree" },
            { type: "text", value: "Syntax Tree" },
            { type: "text", value: "Tokens" },
            { type: "text", value: "Intermediate Code" }
          ],
          correctAnswer: { type: "text", value: "Tokens" },
          explanation: "The lexical analyzer scans input characters and groups them into tokens."
        },
        {
          id: "CD_Easy_3",
          type: "mcq",
          text: "Which of the following checks the syntax of the program?",
          options: [
            { type: "text", value: "Lexical Analyzer" },
            { type: "text", value: "Syntax Analyzer" },
            { type: "text", value: "Semantic Analyzer" },
            { type: "text", value: "Code Optimizer" }
          ],
          correctAnswer: { type: "text", value: "Syntax Analyzer" },
          explanation: "Syntax analysis verifies the structure of code according to grammar rules."
        },
        {
          id: "CD_Easy_4",
          type: "mcq",
          text: "Which compiler phase ensures variables are declared before use?",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Semantic Analysis" },
            { type: "text", value: "Syntax Analysis" },
            { type: "text", value: "Code Generation" }
          ],
          correctAnswer: { type: "text", value: "Semantic Analysis" },
          explanation: "Semantic analysis checks meaning-related errors, such as undeclared variables."
        },
        {
          id: "CD_Easy_5",
          type: "mcq",
          text: "Which phase is responsible for generating intermediate code?",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Syntax Analysis" },
            { type: "text", value: "Intermediate Code Generation" },
            { type: "text", value: "Code Optimization" }
          ],
          correctAnswer: { type: "text", value: "Intermediate Code Generation" },
          explanation: "The intermediate code generation phase produces a machine-independent code."
        },
        {
          id: "CD_Easy_6",
          type: "mcq",
          text: "Which data structure is used in parsing?",
          options: [
            { type: "text", value: "Queue" },
            { type: "text", value: "Stack" },
            { type: "text", value: "Tree" },
            { type: "text", value: "Graph" }
          ],
          correctAnswer: { type: "text", value: "Stack" },
          explanation: "Parsing techniques like LL and LR use a stack to store grammar symbols."
        },
        {
          id: "CD_Easy_7",
          type: "mcq",
          text: "Which type of errors are detected by the compiler?",
          options: [
            { type: "text", value: "Runtime Errors" },
            { type: "text", value: "Logical Errors" },
            { type: "text", value: "Syntax and Semantic Errors" },
            { type: "text", value: "All of the above" }
          ],
          correctAnswer: { type: "text", value: "Syntax and Semantic Errors" },
          explanation: "Compilers detect syntax and semantic errors during compilation."
        },
        {
          id: "CD_Easy_8",
          type: "mcq",
          text: "Which symbol table operation is most frequent?",
          options: [
            { type: "text", value: "Deletion" },
            { type: "text", value: "Lookup" },
            { type: "text", value: "Insertion" },
            { type: "text", value: "Modification" }
          ],
          correctAnswer: { type: "text", value: "Lookup" },
          explanation: "Lookup is used often to check variable declarations and attributes."
        },
        {
          id: "CD_Easy_9",
          type: "mcq",
          text: "Which compiler phase improves performance by reducing code size or speed?",
          options: [
            { type: "text", value: "Syntax Analysis" },
            { type: "text", value: "Intermediate Code Generation" },
            { type: "text", value: "Code Optimization" },
            { type: "text", value: "Code Generation" }
          ],
          correctAnswer: { type: "text", value: "Code Optimization" },
          explanation: "Code optimization modifies the intermediate code to make it more efficient."
        },
        {
          id: "CD_Easy_10",
          type: "mcq",
          text: "Which compiler phase produces assembly code?",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Intermediate Code Generation" },
            { type: "text", value: "Code Generation" },
            { type: "text", value: "Optimization" }
          ],
          correctAnswer: { type: "text", value: "Code Generation" },
          explanation: "The code generation phase translates intermediate code into assembly or machine code."
        }
      ]
    }
  ]
};

export default CompilerDesign_Easy;
