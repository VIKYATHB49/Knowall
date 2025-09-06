const DataStructures1 = {
  fileName: "data-structures-1",
  testName: "Data Structures Basics - 1",
  sections: [
    {
      name: "Data Structures Basics - 1",
      status: "Not Yet Started",
      questions: [
        {
          id: "DS_Easy_1",
          type: "mcq",
          text: "Which of the following is a linear data structure?",
          options: [
            { type: "text", value: "Array" },
            { type: "text", value: "Tree" },
            { type: "text", value: "Graph" },
            { type: "text", value: "Heap" }
          ],
          correctAnswer: { type: "text", value: "Array" },
          explanation: "Array is a linear data structure where elements are stored sequentially."
        },
        {
          id: "DS_Easy_2",
          type: "mcq",
          text: "Which data structure uses FIFO order?",
          options: [
            { type: "text", value: "Stack" },
            { type: "text", value: "Queue" },
            { type: "text", value: "Tree" },
            { type: "text", value: "Graph" }
          ],
          correctAnswer: { type: "text", value: "Queue" },
          explanation: "Queue operates on First In First Out (FIFO) principle."
        },
        {
          id: "DS_Easy_3",
          type: "mcq",
          text: "Which operation adds an element to the end of an array?",
          options: [
            { type: "text", value: "Push" },
            { type: "text", value: "Pop" },
            { type: "text", value: "InsertAtStart" },
            { type: "text", value: "Delete" }
          ],
          correctAnswer: { type: "text", value: "Push" },
          explanation: "Push adds an element to the end of the array."
        },
        {
          id: "DS_Easy_4",
          type: "mcq",
          text: "Which of these is NOT a primitive data type?",
          options: [
            { type: "text", value: "Integer" },
            { type: "text", value: "Boolean" },
            { type: "text", value: "Array" },
            { type: "text", value: "Character" }
          ],
          correctAnswer: { type: "text", value: "Array" },
          explanation: "Array is a composite data type, not primitive."
        },
        {
          id: "DS_Easy_5",
          type: "mcq",
          text: "What is the index of the first element in an array?",
          options: [
            { type: "text", value: "0" },
            { type: "text", value: "1" },
            { type: "text", value: "-1" },
            { type: "text", value: "Depends on language" }
          ],
          correctAnswer: { type: "text", value: "0" },
          explanation: "In most programming languages, arrays are 0-indexed."
        },
        {
          id: "DS_Easy_6",
          type: "mcq",
          text: "Which data structure is used for recursion?",
          options: [
            { type: "text", value: "Queue" },
            { type: "text", value: "Stack" },
            { type: "text", value: "Linked List" },
            { type: "text", value: "Graph" }
          ],
          correctAnswer: { type: "text", value: "Stack" },
          explanation: "Stacks follow LIFO order, ideal for recursion."
        },
        {
          id: "DS_Easy_7",
          type: "mcq",
          text: "Which of the following is a dynamic data structure?",
          options: [
            { type: "text", value: "Array" },
            { type: "text", value: "Linked List" },
            { type: "text", value: "Integer" },
            { type: "text", value: "Boolean" }
          ],
          correctAnswer: { type: "text", value: "Linked List" },
          explanation: "Linked List can grow and shrink at runtime."
        },
        {
          id: "DS_Easy_8",
          type: "mcq",
          text: "Which operation removes an element from the top of a stack?",
          options: [
            { type: "text", value: "Push" },
            { type: "text", value: "Pop" },
            { type: "text", value: "Peek" },
            { type: "text", value: "Insert" }
          ],
          correctAnswer: { type: "text", value: "Pop" },
          explanation: "Pop removes the element from the top of a stack."
        },
        {
          id: "DS_Easy_9",
          type: "mcq",
          text: "Which of these allows insertion and deletion at both ends?",
          options: [
            { type: "text", value: "Stack" },
            { type: "text", value: "Queue" },
            { type: "text", value: "Deque" },
            { type: "text", value: "Array" }
          ],
          correctAnswer: { type: "text", value: "Deque" },
          explanation: "Deque (Double-ended queue) allows operations at both ends."
        },
        {
          id: "DS_Easy_10",
          type: "mcq",
          text: "Which structure is ideal for implementing adjacency lists in graphs?",
          options: [
            { type: "text", value: "Array" },
            { type: "text", value: "Linked List" },
            { type: "text", value: "Stack" },
            { type: "text", value: "Queue" }
          ],
          correctAnswer: { type: "text", value: "Linked List" },
          explanation: "Linked Lists efficiently store neighbors in adjacency lists."
        }
      ]
    }
  ]
};

export default DataStructures1;
