const DataStructures3 = {
  fileName: "data-structures-3",
  testName: "Data Structures Trees - 3",
  sections: [
    {
      name: "Data Structures Trees - 3",
      status: "Not Yet Started",
      questions: [
        {
          id: "DS_Hard_1",
          type: "mcq",
          text: "In a binary tree, each node has at most how many children?",
          options: [
            { type: "text", value: "1" },
            { type: "text", value: "2" },
            { type: "text", value: "3" },
            { type: "text", value: "4" }
          ],
          correctAnswer: { type: "text", value: "2" },
          explanation: "Binary tree nodes have at most two children: left and right."
        },
        {
          id: "DS_Hard_2",
          type: "mcq",
          text: "Which traversal visits nodes in the order: left, root, right?",
          options: [
            { type: "text", value: "Preorder" },
            { type: "text", value: "Inorder" },
            { type: "text", value: "Postorder" },
            { type: "text", value: "Level Order" }
          ],
          correctAnswer: { type: "text", value: "Inorder" },
          explanation: "Inorder traversal visits left subtree, root, then right subtree."
        },
        {
          id: "DS_Hard_3",
          type: "mcq",
          text: "Height of a tree is defined as:",
          options: [
            { type: "text", value: "Number of edges in longest path from root to leaf" },
            { type: "text", value: "Number of nodes" },
            { type: "text", value: "Depth of root node" },
            { type: "text", value: "Number of leaf nodes" }
          ],
          correctAnswer: { type: "text", value: "Number of edges in longest path from root to leaf" },
          explanation: "Height counts edges in the longest path from root to leaf."
        },
        {
          id: "DS_Hard_4",
          type: "mcq",
          text: "A complete binary tree is:",
          options: [
            { type: "text", value: "All levels completely filled" },
            { type: "text", value: "All levels except last are completely filled and left-aligned" },
            { type: "text", value: "Only root and last level filled" },
            { type: "text", value: "None of the above" }
          ],
          correctAnswer: { type: "text", value: "All levels except last are completely filled and left-aligned" },
          explanation: "Complete binary trees fill all levels except possibly the last, from left to right."
        },
        {
          id: "DS_Hard_5",
          type: "mcq",
          text: "Which data structure is used to implement recursion in tree traversal?",
          options: [
            { type: "text", value: "Queue" },
            { type: "text", value: "Stack" },
            { type: "text", value: "Array" },
            { type: "text", value: "Graph" }
          ],
          correctAnswer: { type: "text", value: "Stack" },
          explanation: "Stacks store function calls during recursive tree traversal."
        },
        {
          id: "DS_Hard_6",
          type: "mcq",
          text: "Which is true about a full binary tree?",
          options: [
            { type: "text", value: "Every node has 0 or 2 children" },
            { type: "text", value: "Every node has at most 1 child" },
            { type: "text", value: "Every node has exactly 2 children" },
            { type: "text", value: "All leaves at same level" }
          ],
          correctAnswer: { type: "text", value: "Every node has 0 or 2 children" },
          explanation: "Full binary trees allow nodes to have either zero or two children."
        },
        {
          id: "DS_Hard_7",
          type: "mcq",
          text: "Which traversal uses a queue for implementation?",
          options: [
            { type: "text", value: "Preorder" },
            { type: "text", value: "Inorder" },
            { type: "text", value: "Postorder" },
            { type: "text", value: "Level Order" }
          ],
          correctAnswer: { type: "text", value: "Level Order" },
          explanation: "Level order traversal visits nodes level by level using a queue."
        },
        {
          id: "DS_Hard_8",
          type: "mcq",
          text: "In a binary search tree (BST), the left child is:",
          options: [
            { type: "text", value: "Greater than parent" },
            { type: "text", value: "Smaller than parent" },
            { type: "text", value: "Equal to parent" },
            { type: "text", value: "None of the above" }
          ],
          correctAnswer: { type: "text", value: "Smaller than parent" },
          explanation: "BST property: left subtree < parent < right subtree."
        },
        {
          id: "DS_Hard_9",
          type: "mcq",
          text: "What is the maximum number of nodes at level `l` in a binary tree?",
          options: [
            { type: "text", value: "2^l" },
            { type: "text", value: "l^2" },
            { type: "text", value: "l+1" },
            { type: "text", value: "2l" }
          ],
          correctAnswer: { type: "text", value: "2^l" },
          explanation: "Maximum nodes at level l = 2^l."
        },
        {
          id: "DS_Hard_10",
          type: "mcq",
          text: "A perfect binary tree has:",
          options: [
            { type: "text", value: "All levels completely filled" },
            { type: "text", value: "All leaves at same depth" },
            { type: "text", value: "Both of the above" },
            { type: "text", value: "None of the above" }
          ],
          correctAnswer: { type: "text", value: "Both of the above" },
          explanation: "Perfect binary tree has all internal nodes with 2 children and all leaves at the same depth."
        }
      ]
    }
  ]
};

export default DataStructures3;
