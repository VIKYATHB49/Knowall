const CompilerDesign_Hard = {
  fileName: "compiler-design-advanced",
  testName: "Compiler Design Advanced Test",
  sections: [
    {
      name: "Compiler Design Advanced",
      status: "Not Yet Started",
      questions: [
        {
          id: "CD_Hard_1",
          type: "mcq",
          text: "Which parsing technique can handle left recursion directly?",
          options: [
            { type: "text", value: "LL(1)" },
            { type: "text", value: "Recursive Descent" },
            { type: "text", value: "LR Parsing" },
            { type: "text", value: "Top-down Parsing" }
          ],
          correctAnswer: { type: "text", value: "LR Parsing" },
          explanation: "LR parsers can handle left recursion, unlike LL parsers."
        },
        {
          id: "CD_Hard_2",
          type: "mcq",
          text: "DAG (Directed Acyclic Graph) in compiler design is used for:",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Intermediate Code Optimization" },
            { type: "text", value: "Parsing" },
            { type: "text", value: "Symbol Table Management" }
          ],
          correctAnswer: { type: "text", value: "Intermediate Code Optimization" },
          explanation: "DAGs represent expressions to eliminate common subexpressions in optimization."
        },
        {
          id: "CD_Hard_3",
          type: "mcq",
          text: "Which parser uses FOLLOW sets?",
          options: [
            { type: "text", value: "LL(1) Parser" },
            { type: "text", value: "SLR Parser" },
            { type: "text", value: "Recursive Descent Parser" },
            { type: "text", value: "Operator Precedence Parser" }
          ],
          correctAnswer: { type: "text", value: "LL(1) Parser" },
          explanation: "LL(1) parsers use FIRST and FOLLOW sets to construct parsing tables."
        },
        {
          id: "CD_Hard_4",
          type: "mcq",
          text: "Which grammar is accepted by LR parsers but not by LL parsers?",
          options: [
            { type: "text", value: "Ambiguous Grammar" },
            { type: "text", value: "Left Recursive Grammar" },
            { type: "text", value: "Right Recursive Grammar" },
            { type: "text", value: "Regular Grammar" }
          ],
          correctAnswer: { type: "text", value: "Left Recursive Grammar" },
          explanation: "LL parsers cannot handle left recursion, but LR parsers can."
        },
        {
          id: "CD_Hard_5",
          type: "mcq",
          text: "Which data structure is most suitable for implementing symbol tables?",
          options: [
            { type: "text", value: "Array" },
            { type: "text", value: "Linked List" },
            { type: "text", value: "Hash Table" },
            { type: "text", value: "Stack" }
          ],
          correctAnswer: { type: "text", value: "Hash Table" },
          explanation: "Hash tables allow efficient lookup operations for symbol tables."
        },
        {
          id: "CD_Hard_6",
          type: "mcq",
          text: "Which phase deals with register allocation?",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Syntax Analysis" },
            { type: "text", value: "Code Optimization" },
            { type: "text", value: "Code Generation" }
          ],
          correctAnswer: { type: "text", value: "Code Optimization" },
          explanation: "Register allocation is part of code optimization for better performance."
        },
        {
          id: "CD_Hard_7",
          type: "mcq",
          text: "Which parser requires backtracking?",
          options: [
            { type: "text", value: "Recursive Descent Parser" },
            { type: "text", value: "LL(1) Parser" },
            { type: "text", value: "LR Parser" },
            { type: "text", value: "Operator Precedence Parser" }
          ],
          correctAnswer: { type: "text", value: "Recursive Descent Parser" },
          explanation: "Recursive descent parsers may require backtracking when multiple choices exist."
        },
        {
          id: "CD_Hard_8",
          type: "mcq",
          text: "Which parsing algorithm is most powerful?",
          options: [
            { type: "text", value: "LL(1)" },
            { type: "text", value: "SLR" },
            { type: "text", value: "Canonical LR" },
            { type: "text", value: "Recursive Descent" }
          ],
          correctAnswer: { type: "text", value: "Canonical LR" },
          explanation: "Canonical LR parsing is the most powerful among deterministic bottom-up parsers."
        },
        {
          id: "CD_Hard_9",
          type: "mcq",
          text: "Which compiler phase eliminates dead code?",
          options: [
            { type: "text", value: "Lexical Analysis" },
            { type: "text", value: "Intermediate Code Generation" },
            { type: "text", value: "Code Optimization" },
            { type: "text", value: "Code Generation" }
          ],
          correctAnswer: { type: "text", value: "Code Optimization" },
          explanation: "Dead code elimination is a common optimization technique."
        },
        {
          id: "CD_Hard_10",
          type: "mcq",
          text: "What is the main advantage of DAG representation?",
          options: [
            { type: "text", value: "Handles recursion" },
            { type: "text", value: "Eliminates redundant computations" },
            { type: "text", value: "Simplifies parsing" },
            { type: "text", value: "Improves lexical scanning" }
          ],
          correctAnswer: { type: "text", value: "Eliminates redundant computations" },
          explanation: "DAGs detect and eliminate repeated subexpressions in intermediate code."
        },
        {
          id: "CD_Hard_11",
          type: "mcq",
          text: "Which parsing method uses shift-reduce actions?",
          options: [
            { type: "text", value: "LL Parsing" },
            { type: "text", value: "LR Parsing" },
            { type: "text", value: "Recursive Descent Parsing" },
            { type: "text", value: "Predictive Parsing" }
          ],
          correctAnswer: { type: "text", value: "LR Parsing" },
          explanation: "LR parsers use shift-reduce actions to build parse trees."
        },
        {
          id: "CD_Hard_12",
          type: "mcq",
          text: "Which grammar cannot be parsed by any deterministic parser?",
          options: [
            { type: "text", value: "Left Recursive Grammar" },
            { type: "text", value: "Ambiguous Grammar" },
            { type: "text", value: "Context-Free Grammar" },
            { type: "text", value: "Right Recursive Grammar" }
          ],
          correctAnswer: { type: "text", value: "Ambiguous Grammar" },
          explanation: "Ambiguous grammars cannot be parsed deterministically."
        },
        {
          id: "CD_Hard_13",
          type: "mcq",
          text: "What is the role of peephole optimization?",
          options: [
            { type: "text", value: "Optimize symbol table" },
            { type: "text", value: "Optimize small code segments" },
            { type: "text", value: "Optimize parsing table" },
            { type: "text", value: "Optimize token stream" }
          ],
          correctAnswer: { type: "text", value: "Optimize small code segments" },
          explanation: "Peephole optimization improves small code sequences by applying local transformations."
        },
        {
          id: "CD_Hard_14",
          type: "mcq",
          text: "Which parsing table is used in SLR parsers?",
          options: [
            { type: "text", value: "FIRST and FOLLOW sets" },
            { type: "text", value: "Canonical Collection of LR(1) items" },
            { type: "text", value: "Operator Precedence Table" },
            { type: "text", value: "Recursive Descent Tree" }
          ],
          correctAnswer: { type: "text", value: "FIRST and FOLLOW sets" },
          explanation: "SLR parsers construct parsing tables using FIRST and FOLLOW sets."
        },
        {
          id: "CD_Hard_15",
          type: "mcq",
          text: "Which compiler component checks type compatibility?",
          options: [
            { type: "text", value: "Lexical Analyzer" },
            { type: "text", value: "Semantic Analyzer" },
            { type: "text", value: "Syntax Analyzer" },
            { type: "text", value: "Code Generator" }
          ],
          correctAnswer: { type: "text", value: "Semantic Analyzer" },
          explanation: "Semantic analyzer checks type compatibility, scope rules, and other meaning-based errors."
        }
      ]
    }
  ]
};

export default CompilerDesign_Hard;
