const Complexity_Basics_Easy = {
  fileName: "complexity-basics",
  testName: "Algorithm Complexity Basics",
  sections: [
    {
      name: "Algorithm Complexity Basics",
      status: "Not Yet Started",
      questions: [
        {
          id: "CB_Easy_1",
          type: "mcq",
          text: "What is the time complexity of accessing an element in an array by index?",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "Accessing an array element by index is done in constant time."
        },
        {
          id: "CB_Easy_2",
          type: "mcq",
          text: "Which of the following is a measure of the growth rate of an algorithm?",
          options: [
            { type: "text", value: "Time Complexity" },
            { type: "text", value: "Space Complexity" },
            { type: "text", value: "Execution Time" },
            { type: "text", value: "CPU Usage" }
          ],
          correctAnswer: { type: "text", value: "Time Complexity" },
          explanation: "Time complexity describes how the runtime grows with input size."
        },
        {
          id: "CB_Easy_3",
          type: "mcq",
          text: "What is the best case complexity of linear search?",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "If the element is at the first position, linear search takes O(1) time."
        },
        {
          id: "CB_Easy_4",
          type: "mcq",
          text: "Which algorithm has a worst case complexity of O(n log n)?",
          options: [
            { type: "text", value: "Merge Sort" },
            { type: "text", value: "Bubble Sort" },
            { type: "text", value: "Linear Search" },
            { type: "text", value: "Binary Search" }
          ],
          correctAnswer: { type: "text", value: "Merge Sort" },
          explanation: "Merge Sort has a worst-case complexity of O(n log n)."
        },
        {
          id: "CB_Easy_5",
          type: "mcq",
          text: "What is the space complexity of a recursive function with n recursive calls?",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "Each recursive call adds a new stack frame, leading to O(n) space usage."
        },
        {
          id: "CB_Easy_6",
          type: "mcq",
          text: "Binary search works on which type of data structure?",
          options: [
            { type: "text", value: "Sorted array" },
            { type: "text", value: "Linked list" },
            { type: "text", value: "Stack" },
            { type: "text", value: "Queue" }
          ],
          correctAnswer: { type: "text", value: "Sorted array" },
          explanation: "Binary search requires a sorted array to divide and conquer the search space."
        },
        {
          id: "CB_Easy_7",
          type: "mcq",
          text: "What is the worst-case complexity of inserting an element at the end of an array?",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "Inserting at the end is constant time if the array has extra space."
        },
        {
          id: "CB_Easy_8",
          type: "mcq",
          text: "Which of the following is NOT a factor in algorithm analysis?",
          options: [
            { type: "text", value: "Input Size" },
            { type: "text", value: "Programming Language" },
            { type: "text", value: "Algorithm Steps" },
            { type: "text", value: "Hardware Complexity" }
          ],
          correctAnswer: { type: "text", value: "Programming Language" },
          explanation: "Algorithm analysis is independent of programming language specifics."
        },
        {
          id: "CB_Easy_9",
          type: "mcq",
          text: "Which notation describes the upper bound of an algorithm?",
          options: [
            { type: "text", value: "Big O" },
            { type: "text", value: "Omega" },
            { type: "text", value: "Theta" },
            { type: "text", value: "Sigma" }
          ],
          correctAnswer: { type: "text", value: "Big O" },
          explanation: "Big O notation gives the upper bound on algorithm growth rate."
        },
        {
          id: "CB_Easy_10",
          type: "mcq",
          text: "The time complexity of accessing the top element in a stack implemented using an array is:",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "Top element access in a stack is always constant time."
        }
      ]
    }
  ]
};

export default Complexity_Basics_Easy;
