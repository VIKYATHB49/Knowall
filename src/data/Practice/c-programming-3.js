const CProgramming_Hard = {
  fileName: "c-programming-3",
  testName: "C Programming Advanced - 3",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "C_Hard_1",
          type: "mcq",
          text: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n   char *str = \"Hello\";\n   *str = 'h';\n   printf(\"%s\", str);\n   return 0;\n}",
          options: [
            { type: "text", value: "hello" },
            { type: "text", value: "Hello" },
            { type: "text", value: "Segmentation fault / runtime error" },
            { type: "text", value: "Compilation error" },
          ],
          correctAnswer: { type: "text", value: "Segmentation fault / runtime error" },
          explanation: "String literals are stored in read-only memory. Modifying them leads to undefined behavior, often a segmentation fault."
        },
        {
          id: "C_Hard_2",
          type: "mcq",
          text: "Which keyword is used in C to request that a variable be stored in a CPU register?",
          options: [
            { type: "text", value: "auto" },
            { type: "text", value: "register" },
            { type: "text", value: "volatile" },
            { type: "text", value: "static" },
          ],
          correctAnswer: { type: "text", value: "register" },
          explanation: "The 'register' keyword suggests the compiler to store the variable in a CPU register for faster access."
        },
        {
          id: "C_Hard_3",
          type: "mcq",
          text: "What is the difference between malloc() and calloc()?",
          options: [
            { type: "text", value: "malloc initializes memory to zero, calloc does not" },
            { type: "text", value: "calloc initializes memory to zero, malloc does not" },
            { type: "text", value: "Both initialize memory to zero" },
            { type: "text", value: "Both do not initialize memory" },
          ],
          correctAnswer: { type: "text", value: "calloc initializes memory to zero, malloc does not" },
          explanation: "calloc() allocates and zero-initializes memory, malloc() allocates uninitialized memory."
        },
        {
          id: "C_Hard_4",
          type: "mcq",
          text: "What will sizeof('A') return in C?",
          options: [
            { type: "text", value: "1" },
            { type: "text", value: "2" },
            { type: "text", value: "4" },
            { type: "text", value: "Depends on compiler" },
          ],
          correctAnswer: { type: "text", value: "4" },
          explanation: "'A' is an int constant in C, so sizeof('A') is typically 4 bytes on most systems."
        },
        {
          id: "C_Hard_5",
          type: "mcq",
          text: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n   int a = 5;\n   printf(\"%d %d %d\", a, ++a, a++);\n   return 0;\n}",
          options: [
            { type: "text", value: "5 6 6" },
            { type: "text", value: "5 5 5" },
            { type: "text", value: "Undefined behavior" },
            { type: "text", value: "6 6 5" },
          ],
          correctAnswer: { type: "text", value: "Undefined behavior" },
          explanation: "Modifying and accessing a variable multiple times without sequence points leads to undefined behavior in C."
        },
        {
          id: "C_Hard_6",
          type: "mcq",
          text: "Which of the following is NOT a valid storage class specifier in C?",
          options: [
            { type: "text", value: "auto" },
            { type: "text", value: "static" },
            { type: "text", value: "global" },
            { type: "text", value: "register" },
          ],
          correctAnswer: { type: "text", value: "global" },
          explanation: "There is no 'global' storage class specifier in C. Valid ones are auto, static, register, extern."
        },
        {
          id: "C_Hard_7",
          type: "mcq",
          text: "Which function is used to deallocate dynamically allocated memory in C?",
          options: [
            { type: "text", value: "delete()" },
            { type: "text", value: "free()" },
            { type: "text", value: "remove()" },
            { type: "text", value: "dispose()" },
          ],
          correctAnswer: { type: "text", value: "free()" },
          explanation: "free() is used to release dynamically allocated memory in C."
        },
        {
          id: "C_Hard_8",
          type: "mcq",
          text: "Which of the following about inline functions in C is true?",
          options: [
            { type: "text", value: "They must be defined in header files" },
            { type: "text", value: "They reduce function call overhead" },
            { type: "text", value: "They guarantee faster execution" },
            { type: "text", value: "They cannot have loops" },
          ],
          correctAnswer: { type: "text", value: "They reduce function call overhead" },
          explanation: "Inline functions suggest the compiler to insert function code at the call site, reducing function call overhead."
        },
        {
          id: "C_Hard_9",
          type: "mcq",
          text: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n   const int x = 10;\n   int *ptr = (int*)&x;\n   *ptr = 20;\n   printf(\"%d\", x);\n   return 0;\n}",
          options: [
            { type: "text", value: "10" },
            { type: "text", value: "20" },
            { type: "text", value: "Undefined behavior" },
            { type: "text", value: "Compilation error" },
          ],
          correctAnswer: { type: "text", value: "Undefined behavior" },
          explanation: "Casting away const and modifying leads to undefined behavior, though some compilers may allow it."
        },
        {
          id: "C_Hard_10",
          type: "mcq",
          text: "Which of the following is true about volatile keyword in C?",
          options: [
            { type: "text", value: "It prevents optimization on the variable" },
            { type: "text", value: "It makes variable constant" },
            { type: "text", value: "It allocates memory dynamically" },
            { type: "text", value: "It is used only with pointers" },
          ],
          correctAnswer: { type: "text", value: "It prevents optimization on the variable" },
          explanation: "volatile tells the compiler that the variable can change unexpectedly, so it should not optimize accesses to it."
        },
      ],
    },
  ],
};

export default CProgramming_Hard;
