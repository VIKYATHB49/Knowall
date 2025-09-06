const CProgramming_Easy = {
  fileName: "c-programming-1",
  testName: "C Programming Basics - 1",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "C_Easy_1",
          type: "mcq",
          text: "Which of the following is the correct file extension for a C program?",
          options: [
            { type: "text", value: ".c" },
            { type: "text", value: ".cpp" },
            { type: "text", value: ".java" },
            { type: "text", value: ".py" },
          ],
          correctAnswer: { type: "text", value: ".c" },
          explanation: "C programs are saved with the extension .c."
        },
        {
          id: "C_Easy_2",
          type: "mcq",
          text: "Which of the following is the correct syntax to print 'Hello World' in C?",
          options: [
            { type: "text", value: "printf('Hello World');" },
            { type: "text", value: "echo('Hello World');" },
            { type: "text", value: "System.out.println('Hello World');" },
            { type: "text", value: "cout << 'Hello World';" },
          ],
          correctAnswer: { type: "text", value: "printf('Hello World');" },
          explanation: "In C, the standard output function is printf()."
        },
        {
          id: "C_Easy_3",
          type: "mcq",
          text: "Which of the following is not a valid C data type?",
          options: [
            { type: "text", value: "int" },
            { type: "text", value: "float" },
            { type: "text", value: "real" },
            { type: "text", value: "char" },
          ],
          correctAnswer: { type: "text", value: "real" },
          explanation: "C has int, float, char, double etc. 'real' is not a valid data type."
        },
        {
          id: "C_Easy_4",
          type: "mcq",
          text: "Which symbol is used to indicate a preprocessor directive in C?",
          options: [
            { type: "text", value: "#" },
            { type: "text", value: "$" },
            { type: "text", value: "@" },
            { type: "text", value: "&" },
          ],
          correctAnswer: { type: "text", value: "#" },
          explanation: "Preprocessor directives begin with '#', e.g., #include, #define."
        },
        {
          id: "C_Easy_5",
          type: "mcq",
          text: "Which function is used to read a single character in C?",
          options: [
            { type: "text", value: "scanf()" },
            { type: "text", value: "getchar()" },
            { type: "text", value: "gets()" },
            { type: "text", value: "fgets()" },
          ],
          correctAnswer: { type: "text", value: "getchar()" },
          explanation: "getchar() reads a single character from standard input."
        },
        {
          id: "C_Easy_6",
          type: "mcq",
          text: "What is the size of int (in bytes) in C (on most 32-bit systems)?",
          options: [
            { type: "text", value: "2" },
            { type: "text", value: "4" },
            { type: "text", value: "8" },
            { type: "text", value: "Depends on compiler" },
          ],
          correctAnswer: { type: "text", value: "4" },
          explanation: "On most 32-bit systems, int is 4 bytes, but it can vary."
        },
        {
          id: "C_Easy_7",
          type: "mcq",
          text: "Which of the following is the logical 'AND' operator in C?",
          options: [
            { type: "text", value: "&&" },
            { type: "text", value: "&" },
            { type: "text", value: "||" },
            { type: "text", value: "!" },
          ],
          correctAnswer: { type: "text", value: "&&" },
          explanation: "In C, '&&' is logical AND, while '&' is bitwise AND."
        },
        {
          id: "C_Easy_8",
          type: "mcq",
          text: "Which of the following loops in C is guaranteed to execute at least once?",
          options: [
            { type: "text", value: "for" },
            { type: "text", value: "while" },
            { type: "text", value: "do-while" },
            { type: "text", value: "None of these" },
          ],
          correctAnswer: { type: "text", value: "do-while" },
          explanation: "do-while executes the loop body once before checking the condition."
        },
        {
          id: "C_Easy_9",
          type: "mcq",
          text: "Which function is used to find the length of a string in C?",
          options: [
            { type: "text", value: "strlen()" },
            { type: "text", value: "strlength()" },
            { type: "text", value: "size()" },
            { type: "text", value: "count()" },
          ],
          correctAnswer: { type: "text", value: "strlen()" },
          explanation: "strlen() is used to get the length of a string."
        },
        {
          id: "C_Easy_10",
          type: "mcq",
          text: "What is the default return type of a C function if not specified?",
          options: [
            { type: "text", value: "int" },
            { type: "text", value: "void" },
            { type: "text", value: "float" },
            { type: "text", value: "double" },
          ],
          correctAnswer: { type: "text", value: "int" },
          explanation: "In C, if the return type is not mentioned, it defaults to int."
        },
      ],
    },
  ],
};

export default CProgramming_Easy;
