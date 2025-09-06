const BloodRelations_Medium = {
  fileName: "blood-relations-2",
  testName: "Blood Relations Test - 2",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "BR_Med_1",
          type: "mcq",
          text: "Pointing to a woman, Rohit said, 'She is the daughter-in-law of my father’s only son.' How is the woman related to Rohit?",
          options: [
            { type: "text", value: "Wife" },
            { type: "text", value: "Sister" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Wife" },
          explanation: "Father’s only son = Rohit himself. His daughter-in-law = Rohit’s wife."
        },
        {
          id: "BR_Med_2",
          type: "mcq",
          text: "Pointing to a man, Seema said, 'He is the son of my grandfather’s only child.' How is the man related to Seema?",
          options: [
            { type: "text", value: "Brother" },
            { type: "text", value: "Uncle" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Father" },
          ],
          correctAnswer: { type: "text", value: "Brother" },
          explanation: "Grandfather’s only child = Seema’s father. His son = Seema’s brother."
        },
        {
          id: "BR_Med_3",
          type: "mcq",
          text: "A man said, 'The woman I am pointing to is the mother of my father’s son.' How is the woman related to the man?",
          options: [
            { type: "text", value: "Mother" },
            { type: "text", value: "Aunt" },
            { type: "text", value: "Grandmother" },
            { type: "text", value: "Wife" },
          ],
          correctAnswer: { type: "text", value: "Mother" },
          explanation: "Father’s son = the man himself. The woman is his mother."
        },
        {
          id: "BR_Med_4",
          type: "mcq",
          text: "Pointing to a girl, Raj said, 'She is the only daughter of my father’s wife.' How is the girl related to Raj?",
          options: [
            { type: "text", value: "Sister" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Daughter" },
          ],
          correctAnswer: { type: "text", value: "Sister" },
          explanation: "Father’s wife = mother. Their only daughter = Raj’s sister."
        },
        {
          id: "BR_Med_5",
          type: "mcq",
          text: "If A is the brother of B and B is the daughter of C, how is A related to C?",
          options: [
            { type: "text", value: "Father" },
            { type: "text", value: "Son" },
            { type: "text", value: "Brother" },
            { type: "text", value: "Uncle" },
          ],
          correctAnswer: { type: "text", value: "Son" },
          explanation: "B is daughter of C. A is B’s brother. Hence A is also child of C → son."
        },
        {
          id: "BR_Med_6",
          type: "mcq",
          text: "Pointing to a man, Geeta said, 'He is my husband’s father’s son.' How is the man related to Geeta?",
          options: [
            { type: "text", value: "Brother-in-law" },
            { type: "text", value: "Husband" },
            { type: "text", value: "Father-in-law" },
            { type: "text", value: "Uncle" },
          ],
          correctAnswer: { type: "text", value: "Husband" },
          explanation: "Husband’s father’s son = husband himself."
        },
        {
          id: "BR_Med_7",
          type: "mcq",
          text: "If P is the son of Q and R is the son of P, then how is Q related to R?",
          options: [
            { type: "text", value: "Father" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Grandparent" },
            { type: "text", value: "Uncle" },
          ],
          correctAnswer: { type: "text", value: "Grandparent" },
          explanation: "Q → parent of P. P → parent of R. Hence Q is grandparent of R."
        },
        {
          id: "BR_Med_8",
          type: "mcq",
          text: "Pointing to a boy, Sita said, 'He is the son of my husband’s sister.' How is the boy related to Sita?",
          options: [
            { type: "text", value: "Nephew" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Brother" },
            { type: "text", value: "Uncle" },
          ],
          correctAnswer: { type: "text", value: "Nephew" },
          explanation: "Husband’s sister’s son = nephew."
        },
        {
          id: "BR_Med_9",
          type: "mcq",
          text: "A woman said, 'That boy is the son of my daughter’s husband.' How is the boy related to the woman?",
          options: [
            { type: "text", value: "Grandson" },
            { type: "text", value: "Son" },
            { type: "text", value: "Nephew" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Grandson" },
          explanation: "Daughter’s husband = son-in-law. His son = grandson of the woman."
        },
        {
          id: "BR_Med_10",
          type: "mcq",
          text: "Pointing to a lady, Mohan said, 'She is my mother’s husband’s mother.' How is the lady related to Mohan?",
          options: [
            { type: "text", value: "Grandmother" },
            { type: "text", value: "Aunt" },
            { type: "text", value: "Mother" },
            { type: "text", value: "Great Grandmother" },
          ],
          correctAnswer: { type: "text", value: "Grandmother" },
          explanation: "Mother’s husband = father. His mother = grandmother."
        },
      ],
    },
  ],
};

export default BloodRelations_Medium;
