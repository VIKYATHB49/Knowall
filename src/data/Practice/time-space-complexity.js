const Time_Space_Complexity_Medium = {
  fileName: "time-space-complexity",
  testName: "Time & Space Complexity Test",
  sections: [
    {
      name: "Time & Space Complexity",
      status: "Not Yet Started",
      questions: [
        {
          id: "TSC_Med_1",
          type: "mcq",
          text: "What is the worst-case complexity of linear search?",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "Worst case occurs when the element is at the last position or not present."
        },
        {
          id: "TSC_Med_2",
          type: "mcq",
          text: "What is the best-case complexity of bubble sort?",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(n^2)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(1)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "If the array is already sorted, bubble sort performs a single pass."
        },
        {
          id: "TSC_Med_3",
          type: "mcq",
          text: "Which of the following sorting algorithms has O(n log n) worst-case complexity?",
          options: [
            { type: "text", value: "Merge Sort" },
            { type: "text", value: "Insertion Sort" },
            { type: "text", value: "Selection Sort" },
            { type: "text", value: "Bubble Sort" }
          ],
          correctAnswer: { type: "text", value: "Merge Sort" },
          explanation: "Merge Sort divides and merges arrays in O(n log n) time."
        },
        {
          id: "TSC_Med_4",
          type: "mcq",
          text: "Which data structure requires O(n) space for storing n elements?",
          options: [
            { type: "text", value: "Array" },
            { type: "text", value: "Linked List" },
            { type: "text", value: "Stack" },
            { type: "text", value: "All of the above" }
          ],
          correctAnswer: { type: "text", value: "All of the above" },
          explanation: "All of these store n elements, requiring O(n) space."
        },
        {
          id: "TSC_Med_5",
          type: "mcq",
          text: "The space complexity of a recursive factorial function is:",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "Each recursive call adds a new stack frame, leading to O(n) space."
        },
        {
          id: "TSC_Med_6",
          type: "mcq",
          text: "The time complexity of binary search is:",
          options: [
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(n log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(log n)" },
          explanation: "Binary search divides the search space by 2 each step."
        },
        {
          id: "TSC_Med_7",
          type: "mcq",
          text: "Which notation represents the lower bound of an algorithm?",
          options: [
            { type: "text", value: "Omega" },
            { type: "text", value: "Big O" },
            { type: "text", value: "Theta" },
            { type: "text", value: "Sigma" }
          ],
          correctAnswer: { type: "text", value: "Omega" },
          explanation: "Omega notation defines the lower bound of an algorithm's complexity."
        },
        {
          id: "TSC_Med_8",
          type: "mcq",
          text: "For n elements, the time complexity of selection sort is:",
          options: [
            { type: "text", value: "O(n^2)" },
            { type: "text", value: "O(n log n)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" }
          ],
          correctAnswer: { type: "text", value: "O(n^2)" },
          explanation: "Selection sort always scans remaining elements for min, leading to O(n^2)."
        },
        {
          id: "TSC_Med_9",
          type: "mcq",
          text: "Which of these search algorithms is more efficient on a sorted array?",
          options: [
            { type: "text", value: "Binary Search" },
            { type: "text", value: "Linear Search" },
            { type: "text", value: "Bubble Search" },
            { type: "text", value: "Insertion Search" }
          ],
          correctAnswer: { type: "text", value: "Binary Search" },
          explanation: "Binary search reduces time complexity from O(n) to O(log n)."
        },
        {
          id: "TSC_Med_10",
          type: "mcq",
          text: "The auxiliary space complexity of iterative Fibonacci is:",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n^2)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "Iterative Fibonacci only uses constant extra variables."
        },
        {
          id: "TSC_Med_11",
          type: "mcq",
          text: "The best-case complexity of insertion sort is:",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(n^2)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(1)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "If array is already sorted, insertion sort performs a single pass."
        },
        {
          id: "TSC_Med_12",
          type: "mcq",
          text: "Which of these algorithms is stable?",
          options: [
            { type: "text", value: "Merge Sort" },
            { type: "text", value: "Quick Sort" },
            { type: "text", value: "Heap Sort" },
            { type: "text", value: "Selection Sort" }
          ],
          correctAnswer: { type: "text", value: "Merge Sort" },
          explanation: "Merge Sort preserves relative order of equal elements."
        },
        {
          id: "TSC_Med_13",
          type: "mcq",
          text: "Which of the following is true for quicksort's average case?",
          options: [
            { type: "text", value: "O(n log n)" },
            { type: "text", value: "O(n^2)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" }
          ],
          correctAnswer: { type: "text", value: "O(n log n)" },
          explanation: "Average case for quicksort is O(n log n)."
        },
        {
          id: "TSC_Med_14",
          type: "mcq",
          text: "Space complexity of iterative binary search is:",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(1)" },
          explanation: "Iterative binary search uses constant space."
        },
        {
          id: "TSC_Med_15",
          type: "mcq",
          text: "The average case time complexity of linear search is:",
          options: [
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "On average, linear search examines half the elements."
        }
      ]
    }
  ]
};

export default Time_Space_Complexity_Medium;
