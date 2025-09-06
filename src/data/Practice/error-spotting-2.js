const ErrorSpotting_Medium = {
  fileName: "error-spotting-2",
  testName: "Error Spotting Test - 2",
  sections: [
    {
      name: "MCQ",
      time: 12,
      status: "Not Yet Started",
      questions: [
        {
          id: "ES_Med_1",
          type: "mcq",
          text: "Neither of the two sisters are intelligent.",
          options: [
            { type: "text", value: "Neither of" },
            { type: "text", value: "the two sisters" },
            { type: "text", value: "are intelligent" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "are intelligent" },
          explanation: "Use singular verb → 'is intelligent'."
        },
        {
          id: "ES_Med_2",
          type: "mcq",
          text: "He as well as his friends were present in the function.",
          options: [
            { type: "text", value: "He as well as" },
            { type: "text", value: "his friends" },
            { type: "text", value: "were present" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "were present" },
          explanation: "With 'as well as', the verb agrees with the first subject → 'was present'."
        },
        {
          id: "ES_Med_3",
          type: "mcq",
          text: "This is one of the most unique paintings I have ever seen.",
          options: [
            { type: "text", value: "This is" },
            { type: "text", value: "one of the" },
            { type: "text", value: "most unique paintings" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "most unique paintings" },
          explanation: "'Unique' is absolute → cannot be modified by 'most'. Correct: 'a unique painting'."
        },
        {
          id: "ES_Med_4",
          type: "mcq",
          text: "The teacher explained the students the lesson.",
          options: [
            { type: "text", value: "explained the students" },
            { type: "text", value: "the lesson" },
            { type: "text", value: "The teacher" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "explained the students" },
          explanation: "Correct: 'explained the lesson to the students'."
        },
        {
          id: "ES_Med_5",
          type: "mcq",
          text: "The furniture in the room are very expensive.",
          options: [
            { type: "text", value: "The furniture" },
            { type: "text", value: "in the room" },
            { type: "text", value: "are very expensive" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "are very expensive" },
          explanation: "'Furniture' is uncountable → singular verb: 'is very expensive'."
        },
        {
          id: "ES_Med_6",
          type: "mcq",
          text: "He along with his parents have gone to Delhi.",
          options: [
            { type: "text", value: "He along with" },
            { type: "text", value: "his parents" },
            { type: "text", value: "have gone" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "have gone" },
          explanation: "Main subject 'He' is singular → 'has gone'."
        },
        {
          id: "ES_Med_7",
          type: "mcq",
          text: "She is more cleverer than her brother.",
          options: [
            { type: "text", value: "is more cleverer" },
            { type: "text", value: "than her brother" },
            { type: "text", value: "She" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "is more cleverer" },
          explanation: "Avoid double comparison → correct: 'cleverer' or 'more clever'."
        },
        {
          id: "ES_Med_8",
          type: "mcq",
          text: "He has been working here since five years.",
          options: [
            { type: "text", value: "been working" },
            { type: "text", value: "since five years" },
            { type: "text", value: "here" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "since five years" },
          explanation: "Use 'for five years' (duration) instead of 'since'."
        },
        {
          id: "ES_Med_9",
          type: "mcq",
          text: "One of my friend is going to London.",
          options: [
            { type: "text", value: "One of" },
            { type: "text", value: "my friend" },
            { type: "text", value: "is going to London" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "my friend" },
          explanation: "Correct: 'One of my friends'."
        },
        {
          id: "ES_Med_10",
          type: "mcq",
          text: "No sooner the bell rang than the students rushed out.",
          options: [
            { type: "text", value: "No sooner" },
            { type: "text", value: "the bell rang" },
            { type: "text", value: "than the students" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "the bell rang" },
          explanation: "Correct: 'No sooner did the bell ring than...'."
        }
      ]
    }
  ]
};

export default ErrorSpotting_Medium;
