const BloodRelations_Easy = {
  fileName: "blood-relations-1",
  testName: "Blood Relations Test - 1",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "BR_Easy_1",
          type: "mcq",
          text: "Pointing to a man, Rina said, 'He is the son of my grandfather’s only son.' How is the man related to Rina?",
          options: [
            { type: "text", value: "Brother" },
            { type: "text", value: "Uncle" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Father" },
          ],
          correctAnswer: { type: "text", value: "Brother" },
          explanation: "Grandfather’s only son = Rina’s father. His son = Rina’s brother."
        },
        {
          id: "BR_Easy_2",
          type: "mcq",
          text: "Introducing a boy, Meena said, 'He is the son of my mother’s daughter.' How is Meena related to the boy?",
          options: [
            { type: "text", value: "Aunt" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Sister" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Mother" },
          explanation: "My mother’s daughter = Meena herself. So the boy is her son."
        },
        {
          id: "BR_Easy_3",
          type: "mcq",
          text: "Pointing to a lady, Ravi said, 'She is my father’s only daughter.' Who is the lady to Ravi?",
          options: [
            { type: "text", value: "Sister" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Wife" },
            { type: "text", value: "Daughter" },
          ],
          correctAnswer: { type: "text", value: "Sister" },
          explanation: "Father’s only daughter = Ravi’s sister."
        },
        {
          id: "BR_Easy_4",
          type: "mcq",
          text: "Pointing to a man, Shyam said, 'He is the father of my mother’s father.' How is the man related to Shyam?",
          options: [
            { type: "text", value: "Uncle" },
            { type: "text", value: "Great Grandfather" },
            { type: "text", value: "Grandfather" },
            { type: "text", value: "Brother" },
          ],
          correctAnswer: { type: "text", value: "Great Grandfather" },
          explanation: "Mother’s father = maternal grandfather. His father = great grandfather."
        },
        {
          id: "BR_Easy_5",
          type: "mcq",
          text: "If A is the father of B and C is the mother of B, how is C related to A?",
          options: [
            { type: "text", value: "Sister" },
            { type: "text", value: "Wife" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Wife" },
          explanation: "Since A is father and C is mother of the same child B, C is A’s wife."
        },
        {
          id: "BR_Easy_6",
          type: "mcq",
          text: "Pointing to a boy, Sunita said, 'He is the son of my husband’s sister.' How is the boy related to Sunita?",
          options: [
            { type: "text", value: "Nephew" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Brother-in-law" },
            { type: "text", value: "Uncle" },
          ],
          correctAnswer: { type: "text", value: "Nephew" },
          explanation: "Husband’s sister’s son = nephew."
        },
        {
          id: "BR_Easy_7",
          type: "mcq",
          text: "If A is the brother of B, and B is the sister of C, then how is A related to C?",
          options: [
            { type: "text", value: "Brother" },
            { type: "text", value: "Uncle" },
            { type: "text", value: "Father" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Brother" },
          explanation: "A is brother of B. B and C are siblings. Hence A is also brother of C."
        },
        {
          id: "BR_Easy_8",
          type: "mcq",
          text: "If X is the father of Y and Y is the father of Z, then how is X related to Z?",
          options: [
            { type: "text", value: "Uncle" },
            { type: "text", value: "Father" },
            { type: "text", value: "Grandfather" },
            { type: "text", value: "Brother" },
          ],
          correctAnswer: { type: "text", value: "Grandfather" },
          explanation: "X → father of Y. Y → father of Z. So X is grandfather of Z."
        },
        {
          id: "BR_Easy_9",
          type: "mcq",
          text: "If P is the mother of Q and Q is the mother of R, how is P related to R?",
          options: [
            { type: "text", value: "Mother" },
            { type: "text", value: "Sister" },
            { type: "text", value: "Grandmother" },
            { type: "text", value: "Aunt" },
          ],
          correctAnswer: { type: "text", value: "Grandmother" },
          explanation: "P is mother of Q. Q is mother of R. So P is grandmother of R."
        },
        {
          id: "BR_Easy_10",
          type: "mcq",
          text: "Pointing to a girl, Arun said, 'She is my father’s wife’s daughter.' How is the girl related to Arun?",
          options: [
            { type: "text", value: "Sister" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Daughter" },
          ],
          correctAnswer: { type: "text", value: "Sister" },
          explanation: "Father’s wife = mother. Their daughter = Arun’s sister."
        },
      ],
    },
  ],
};

export default BloodRelations_Easy;
