const CProgramming_Medium = {
  fileName: "c-programming-2",
  testName: "C Programming Pointers - 2",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "C_Med_1",
          type: "mcq",
          text: "Which operator is used to access the value at the address stored in a pointer?",
          options: [
            { type: "text", value: "*" },
            { type: "text", value: "&" },
            { type: "text", value: "->" },
            { type: "text", value: "." },
          ],
          correctAnswer: { type: "text", value: "*" },
          explanation: "The * operator dereferences a pointer to access the value at the memory location."
        },
        {
          id: "C_Med_2",
          type: "mcq",
          text: "What will be the output of the following code?\n\nint x = 10; int *p = &x; printf(\"%d\", *p);",
          options: [
            { type: "text", value: "10" },
            { type: "text", value: "Address of x" },
            { type: "text", value: "Garbage value" },
            { type: "text", value: "Compilation error" },
          ],
          correctAnswer: { type: "text", value: "10" },
          explanation: "*p gives the value stored at the address of x, which is 10."
        },
        {
          id: "C_Med_3",
          type: "mcq",
          text: "What does the '&' operator do in C?",
          options: [
            { type: "text", value: "Access value at address" },
            { type: "text", value: "Gives the address of a variable" },
            { type: "text", value: "Performs logical AND" },
            { type: "text", value: "Performs bitwise OR" },
          ],
          correctAnswer: { type: "text", value: "Gives the address of a variable" },
          explanation: "& returns the memory address of a variable."
        },
        {
          id: "C_Med_4",
          type: "mcq",
          text: "Which of the following correctly declares a pointer to an integer?",
          options: [
            { type: "text", value: "int ptr;" },
            { type: "text", value: "int *ptr;" },
            { type: "text", value: "pointer int ptr;" },
            { type: "text", value: "int &ptr;" },
          ],
          correctAnswer: { type: "text", value: "int *ptr;" },
          explanation: "int *ptr; declares a pointer to an integer."
        },
        {
          id: "C_Med_5",
          type: "mcq",
          text: "Which of the following statements about NULL pointer is true?",
          options: [
            { type: "text", value: "It points to address 0" },
            { type: "text", value: "It points to address 1" },
            { type: "text", value: "It points to garbage value" },
            { type: "text", value: "It is not supported in C" },
          ],
          correctAnswer: { type: "text", value: "It points to address 0" },
          explanation: "A NULL pointer in C is a pointer that does not point to any valid memory location, represented as 0."
        },
        {
          id: "C_Med_6",
          type: "mcq",
          text: "What will happen if you dereference a NULL pointer?",
          options: [
            { type: "text", value: "Returns 0" },
            { type: "text", value: "Segmentation fault / runtime error" },
            { type: "text", value: "Returns garbage value" },
            { type: "text", value: "Compilation error" },
          ],
          correctAnswer: { type: "text", value: "Segmentation fault / runtime error" },
          explanation: "Dereferencing NULL leads to undefined behavior, often a segmentation fault."
        },
        {
          id: "C_Med_7",
          type: "mcq",
          text: "Which of the following is true about pointer arithmetic?",
          options: [
            { type: "text", value: "Adding 1 to a pointer increases its address by 1 byte always" },
            { type: "text", value: "Adding 1 to a pointer increases its address by size of data type" },
            { type: "text", value: "Pointers cannot be incremented" },
            { type: "text", value: "Pointers always increase by 4 bytes" },
          ],
          correctAnswer: { type: "text", value: "Adding 1 to a pointer increases its address by size of data type" },
          explanation: "Pointer arithmetic depends on the size of the data type the pointer is pointing to."
        },
        {
          id: "C_Med_8",
          type: "mcq",
          text: "Which operator is used to access structure members using a pointer?",
          options: [
            { type: "text", value: "." },
            { type: "text", value: "->" },
            { type: "text", value: "*" },
            { type: "text", value: "&" },
          ],
          correctAnswer: { type: "text", value: "->" },
          explanation: "The arrow operator (->) is used to access structure members through a pointer."
        },
        {
          id: "C_Med_9",
          type: "mcq",
          text: "Which of the following is a dangling pointer?",
          options: [
            { type: "text", value: "A pointer that points to NULL" },
            { type: "text", value: "A pointer that is uninitialized" },
            { type: "text", value: "A pointer pointing to freed memory" },
            { type: "text", value: "A pointer to pointer" },
          ],
          correctAnswer: { type: "text", value: "A pointer pointing to freed memory" },
          explanation: "Dangling pointer arises when the object is deleted or deallocated but the pointer still points to the freed memory."
        },
        {
          id: "C_Med_10",
          type: "mcq",
          text: "Which of the following correctly allocates memory dynamically for 10 integers?",
          options: [
            { type: "text", value: "int *p = malloc(10);" },
            { type: "text", value: "int *p = malloc(10 * sizeof(int));" },
            { type: "text", value: "int p = malloc(10);" },
            { type: "text", value: "malloc(int *p);" },
          ],
          correctAnswer: { type: "text", value: "int *p = malloc(10 * sizeof(int));" },
          explanation: "malloc allocates memory in bytes, so we multiply number of elements by sizeof(type)."
        },
      ],
    },
  ],
};

export default CProgramming_Medium;
