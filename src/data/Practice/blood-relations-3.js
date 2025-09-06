const BloodRelations_Hard = {
  fileName: "blood-relations-3",
  testName: "Blood Relations Test - 3",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "BR_Hard_1",
          type: "mcq",
          text: "Pointing to a man, Rita said, 'He is the son of my grandfather’s only daughter.' How is the man related to Rita?",
          options: [
            { type: "text", value: "Brother" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Uncle" },
            { type: "text", value: "Nephew" },
          ],
          correctAnswer: { type: "text", value: "Brother" },
          explanation: "Grandfather’s only daughter = Rita’s mother. Her son = Rita’s brother."
        },
        {
          id: "BR_Hard_2",
          type: "mcq",
          text: "A woman says, 'The boy I am pointing to is the son of my husband’s father’s only son.' How is the boy related to the woman?",
          options: [
            { type: "text", value: "Son" },
            { type: "text", value: "Nephew" },
            { type: "text", value: "Grandson" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Son" },
          explanation: "Husband’s father’s only son = husband. His son = woman’s son."
        },
        {
          id: "BR_Hard_3",
          type: "mcq",
          text: "Pointing to a lady, Anil said, 'She is my wife’s mother’s husband’s only daughter.' How is the lady related to Anil?",
          options: [
            { type: "text", value: "Wife" },
            { type: "text", value: "Sister-in-law" },
            { type: "text", value: "Mother-in-law" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Wife" },
          explanation: "Wife’s mother’s husband = wife’s father. His only daughter = Anil’s wife."
        },
        {
          id: "BR_Hard_4",
          type: "mcq",
          text: "Ravi said, 'The woman I am pointing to is the daughter of my mother’s husband’s daughter.' How is the woman related to Ravi?",
          options: [
            { type: "text", value: "Niece" },
            { type: "text", value: "Sister" },
            { type: "text", value: "Daughter" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Niece" },
          explanation: "Mother’s husband = father. Father’s daughter = Ravi’s sister. Her daughter = Ravi’s niece."
        },
        {
          id: "BR_Hard_5",
          type: "mcq",
          text: "Pointing to a man, Sunil said, 'He is my daughter’s husband’s brother.' How is the man related to Sunil?",
          options: [
            { type: "text", value: "Son-in-law" },
            { type: "text", value: "Brother-in-law" },
            { type: "text", value: "Nephew" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Brother-in-law" },
          explanation: "Daughter’s husband = son-in-law. His brother = brother-in-law of Sunil."
        },
        {
          id: "BR_Hard_6",
          type: "mcq",
          text: "A man introduced a lady saying, 'She is the daughter of my wife’s father’s only son.' How is the lady related to the man?",
          options: [
            { type: "text", value: "Daughter" },
            { type: "text", value: "Niece" },
            { type: "text", value: "Sister-in-law" },
            { type: "text", value: "Cousin" },
          ],
          correctAnswer: { type: "text", value: "Daughter" },
          explanation: "Wife’s father’s only son = wife’s brother (or husband if only one). If only son = husband. His daughter = man’s daughter."
        },
        {
          id: "BR_Hard_7",
          type: "mcq",
          text: "Pointing to a woman, Ajay said, 'She is the daughter of my grandfather’s only son’s wife.' How is the woman related to Ajay?",
          options: [
            { type: "text", value: "Sister" },
            { type: "text", value: "Cousin" },
            { type: "text", value: "Aunt" },
            { type: "text", value: "Mother" },
          ],
          correctAnswer: { type: "text", value: "Sister" },
          explanation: "Grandfather’s only son = Ajay’s father. His wife = mother. Their daughter = Ajay’s sister."
        },
        {
          id: "BR_Hard_8",
          type: "mcq",
          text: "Looking at a man, Neha said, 'He is the son of my mother’s husband’s sister.' How is the man related to Neha?",
          options: [
            { type: "text", value: "Cousin" },
            { type: "text", value: "Uncle" },
            { type: "text", value: "Brother" },
            { type: "text", value: "Nephew" },
          ],
          correctAnswer: { type: "text", value: "Cousin" },
          explanation: "Mother’s husband = father. Father’s sister’s son = cousin."
        },
        {
          id: "BR_Hard_9",
          type: "mcq",
          text: "Pointing to a girl, Mohan said, 'She is my father’s daughter’s daughter.' How is the girl related to Mohan?",
          options: [
            { type: "text", value: "Daughter" },
            { type: "text", value: "Niece" },
            { type: "text", value: "Granddaughter" },
            { type: "text", value: "Sister" },
          ],
          correctAnswer: { type: "text", value: "Niece" },
          explanation: "Father’s daughter = Mohan’s sister (not himself). Her daughter = Mohan’s niece."
        },
        {
          id: "BR_Hard_10",
          type: "mcq",
          text: "Ramesh said, 'That boy is the grandson of my mother’s only child.' How is the boy related to Ramesh?",
          options: [
            { type: "text", value: "Son" },
            { type: "text", value: "Nephew" },
            { type: "text", value: "Brother" },
            { type: "text", value: "Grandson" },
          ],
          correctAnswer: { type: "text", value: "Son" },
          explanation: "Mother’s only child = Ramesh himself. His grandson = his son’s son → boy is his son."
        },
      ],
    },
  ],
};

export default BloodRelations_Hard;
