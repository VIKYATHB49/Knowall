const DataStructures2 = {
  fileName: "data-structures-2",
  testName: "Data Structures LinkedList - 2",
  sections: [
    {
      name: "Data Structures LinkedList - 2",
      status: "Not Yet Started",
      questions: [
        {
          id: "DS_Med_1",
          type: "mcq",
          text: "Which of the following is true about a singly linked list?",
          options: [
            { type: "text", value: "Each node points to the previous node" },
            { type: "text", value: "Each node points to the next node" },
            { type: "text", value: "It forms a circular structure" },
            { type: "text", value: "All nodes are stored contiguously" }
          ],
          correctAnswer: { type: "text", value: "Each node points to the next node" },
          explanation: "In a singly linked list, each node contains data and a pointer to the next node."
        },
        {
          id: "DS_Med_2",
          type: "mcq",
          text: "Which operation is faster in a linked list than an array?",
          options: [
            { type: "text", value: "Random access" },
            { type: "text", value: "Insertion at beginning" },
            { type: "text", value: "Indexing" },
            { type: "text", value: "Sorting" }
          ],
          correctAnswer: { type: "text", value: "Insertion at beginning" },
          explanation: "Insertion at the beginning is faster because we just change the head pointer."
        },
        {
          id: "DS_Med_3",
          type: "mcq",
          text: "In a doubly linked list, each node contains:",
          options: [
            { type: "text", value: "Data only" },
            { type: "text", value: "Data and one pointer" },
            { type: "text", value: "Data and two pointers" },
            { type: "text", value: "Data and three pointers" }
          ],
          correctAnswer: { type: "text", value: "Data and two pointers" },
          explanation: "Each node has a pointer to previous and next node."
        },
        {
          id: "DS_Med_4",
          type: "mcq",
          text: "Which is the main disadvantage of linked lists compared to arrays?",
          options: [
            { type: "text", value: "Dynamic size" },
            { type: "text", value: "Non-contiguous memory" },
            { type: "text", value: "Ease of insertion" },
            { type: "text", value: "Supports pointers" }
          ],
          correctAnswer: { type: "text", value: "Non-contiguous memory" },
          explanation: "Linked lists require extra memory for pointers and nodes are not stored contiguously."
        },
        {
          id: "DS_Med_5",
          type: "mcq",
          text: "What is the time complexity to search an element in a linked list?",
          options: [
            { type: "text", value: "O(1)" },
            { type: "text", value: "O(log n)" },
            { type: "text", value: "O(n)" },
            { type: "text", value: "O(n log n)" }
          ],
          correctAnswer: { type: "text", value: "O(n)" },
          explanation: "Searching requires traversing nodes one by one."
        },
        {
          id: "DS_Med_6",
          type: "mcq",
          text: "Which type of linked list connects the last node to the first?",
          options: [
            { type: "text", value: "Singly Linked List" },
            { type: "text", value: "Doubly Linked List" },
            { type: "text", value: "Circular Linked List" },
            { type: "text", value: "Linear Linked List" }
          ],
          correctAnswer: { type: "text", value: "Circular Linked List" },
          explanation: "In a circular linked list, the last node points back to the first node."
        },
        {
          id: "DS_Med_7",
          type: "mcq",
          text: "Inserting at the end of a singly linked list requires:",
          options: [
            { type: "text", value: "Traversing to the last node" },
            { type: "text", value: "Just changing head" },
            { type: "text", value: "Direct access via index" },
            { type: "text", value: "Swapping nodes" }
          ],
          correctAnswer: { type: "text", value: "Traversing to the last node" },
          explanation: "We need to traverse to the last node to insert at the end."
        },
        {
          id: "DS_Med_8",
          type: "mcq",
          text: "Which linked list is best suited for implementing a deque?",
          options: [
            { type: "text", value: "Singly Linked List" },
            { type: "text", value: "Doubly Linked List" },
            { type: "text", value: "Circular Singly Linked List" },
            { type: "text", value: "Array" }
          ],
          correctAnswer: { type: "text", value: "Doubly Linked List" },
          explanation: "Doubly linked lists allow insertion/deletion from both ends."
        },
        {
          id: "DS_Med_9",
          type: "mcq",
          text: "Which operation has O(1) complexity in a doubly linked list?",
          options: [
            { type: "text", value: "Insert at beginning" },
            { type: "text", value: "Search" },
            { type: "text", value: "Access by index" },
            { type: "text", value: "Delete by value" }
          ],
          correctAnswer: { type: "text", value: "Insert at beginning" },
          explanation: "Insertion at beginning only requires adjusting a few pointers."
        },
        {
          id: "DS_Med_10",
          type: "mcq",
          text: "Which memory overhead is associated with linked lists?",
          options: [
            { type: "text", value: "Pointers for each node" },
            { type: "text", value: "Contiguous storage" },
            { type: "text", value: "Array resizing" },
            { type: "text", value: "None" }
          ],
          correctAnswer: { type: "text", value: "Pointers for each node" },
          explanation: "Each node contains pointer(s), adding memory overhead."
        }
      ]
    }
  ]
};

export default DataStructures2;
