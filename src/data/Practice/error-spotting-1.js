const ErrorSpotting_Easy = {
  fileName: "error-spotting-1",
  testName: "Error Spotting Test - 1",
  sections: [
    {
      name: "MCQ",
      time: 10,
      status: "Not Yet Started",
      questions: [
        {
          id: "ES_Easy_1",
          type: "mcq",
          text: "He did not knew the answer to the question.",
          options: [
            { type: "text", value: "did not knew" },
            { type: "text", value: "the answer" },
            { type: "text", value: "to the question" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "did not knew" },
          explanation: "Correct form: 'did not know'."
        },
        {
          id: "ES_Easy_2",
          type: "mcq",
          text: "She is senior than me by two years.",
          options: [
            { type: "text", value: "senior than" },
            { type: "text", value: "me" },
            { type: "text", value: "by two years" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "senior than" },
          explanation: "Use 'senior to', not 'senior than'."
        },
        {
          id: "ES_Easy_3",
          type: "mcq",
          text: "The baby was sleeping besides her mother.",
          options: [
            { type: "text", value: "baby was" },
            { type: "text", value: "sleeping besides" },
            { type: "text", value: "her mother" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "sleeping besides" },
          explanation: "'Besides' means 'in addition to'. Correct: 'beside'."
        },
        {
          id: "ES_Easy_4",
          type: "mcq",
          text: "Each of the boys have a book.",
          options: [
            { type: "text", value: "Each of" },
            { type: "text", value: "the boys" },
            { type: "text", value: "have a book" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "have a book" },
          explanation: "'Each' is singular → use 'has a book'."
        },
        {
          id: "ES_Easy_5",
          type: "mcq",
          text: "My friend invited me on his birthday party.",
          options: [
            { type: "text", value: "invited me" },
            { type: "text", value: "on his" },
            { type: "text", value: "birthday party" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "on his" },
          explanation: "Correct phrase: 'to his birthday party'."
        },
        {
          id: "ES_Easy_6",
          type: "mcq",
          text: "He is good in playing cricket.",
          options: [
            { type: "text", value: "good in" },
            { type: "text", value: "playing cricket" },
            { type: "text", value: "He is" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "good in" },
          explanation: "Correct phrase: 'good at'."
        },
        {
          id: "ES_Easy_7",
          type: "mcq",
          text: "She congratulated me for my success.",
          options: [
            { type: "text", value: "congratulated me" },
            { type: "text", value: "for my success" },
            { type: "text", value: "She" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "for my success" },
          explanation: "Correct phrase: 'congratulated me on my success'."
        },
        {
          id: "ES_Easy_8",
          type: "mcq",
          text: "He prefers tea than coffee.",
          options: [
            { type: "text", value: "prefers" },
            { type: "text", value: "tea than" },
            { type: "text", value: "coffee" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "tea than" },
          explanation: "Use 'to' instead of 'than' → 'prefers tea to coffee'."
        },
        {
          id: "ES_Easy_9",
          type: "mcq",
          text: "He is married with a doctor.",
          options: [
            { type: "text", value: "is married with" },
            { type: "text", value: "a doctor" },
            { type: "text", value: "He" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "is married with" },
          explanation: "Correct: 'married to a doctor'."
        },
        {
          id: "ES_Easy_10",
          type: "mcq",
          text: "The train will arrive to the station at 5 PM.",
          options: [
            { type: "text", value: "arrive to" },
            { type: "text", value: "the station" },
            { type: "text", value: "at 5 PM" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "arrive to" },
          explanation: "Correct usage: 'arrive at the station'."
        }
      ]
    }
  ]
};

export default ErrorSpotting_Easy;
