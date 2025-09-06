const ErrorSpotting_Hard = {
  fileName: "error-spotting-3",
  testName: "Error Spotting Test - 3",
  sections: [
    {
      name: "MCQ",
      time: 15,
      status: "Not Yet Started",
      questions: [
        {
          id: "ES_Hard_1",
          type: "mcq",
          text: "Scarcely had the train left the station when the accident has occurred.",
          options: [
            { type: "text", value: "Scarcely had" },
            { type: "text", value: "the train left" },
            { type: "text", value: "the accident has occurred" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "the accident has occurred" },
          explanation: "Correct: 'the accident occurred' (past tense, not present perfect)."
        },
        {
          id: "ES_Hard_2",
          type: "mcq",
          text: "Hardly I had reached the office when the boss called me.",
          options: [
            { type: "text", value: "Hardly I had" },
            { type: "text", value: "reached the office" },
            { type: "text", value: "when the boss called me" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "Hardly I had" },
          explanation: "Correct: 'Hardly had I reached...'. Inversion after 'hardly'."
        },
        {
          id: "ES_Hard_3",
          type: "mcq",
          text: "No sooner he entered the class when the students stood up.",
          options: [
            { type: "text", value: "No sooner he entered" },
            { type: "text", value: "the class" },
            { type: "text", value: "when the students" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "No sooner he entered" },
          explanation: "Correct: 'No sooner did he enter...'. Requires auxiliary verb 'did'."
        },
        {
          id: "ES_Hard_4",
          type: "mcq",
          text: "Neither the teacher nor the students was interested in the trip.",
          options: [
            { type: "text", value: "Neither the teacher" },
            { type: "text", value: "nor the students" },
            { type: "text", value: "was interested" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "was interested" },
          explanation: "When subjects differ in number, verb agrees with the nearer one → 'were interested'."
        },
        {
          id: "ES_Hard_5",
          type: "mcq",
          text: "The committee are divided in their opinion regarding the proposal.",
          options: [
            { type: "text", value: "The committee" },
            { type: "text", value: "are divided" },
            { type: "text", value: "in their opinion" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "No error" },
          explanation: "Here 'committee' is plural in sense, so 'are divided' is correct."
        },
        {
          id: "ES_Hard_6",
          type: "mcq",
          text: "Each of the boys have submitted their homework.",
          options: [
            { type: "text", value: "Each of the boys" },
            { type: "text", value: "have submitted" },
            { type: "text", value: "their homework" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "have submitted" },
          explanation: "'Each' is singular → 'has submitted'."
        },
        {
          id: "ES_Hard_7",
          type: "mcq",
          text: "He denied to have stolen the watch.",
          options: [
            { type: "text", value: "denied to have" },
            { type: "text", value: "stolen the watch" },
            { type: "text", value: "He" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "denied to have" },
          explanation: "Correct: 'denied having stolen the watch'."
        },
        {
          id: "ES_Hard_8",
          type: "mcq",
          text: "Not only he was punished but also fined.",
          options: [
            { type: "text", value: "Not only he was" },
            { type: "text", value: "punished" },
            { type: "text", value: "but also fined" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "Not only he was" },
          explanation: "Correct: 'Not only was he punished but also fined'. Inversion required."
        },
        {
          id: "ES_Hard_9",
          type: "mcq",
          text: "The number of participants have increased this year.",
          options: [
            { type: "text", value: "The number of participants" },
            { type: "text", value: "have increased" },
            { type: "text", value: "this year" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "have increased" },
          explanation: "'The number of' is singular → 'has increased'."
        },
        {
          id: "ES_Hard_10",
          type: "mcq",
          text: "No less than fifty students was present in the auditorium.",
          options: [
            { type: "text", value: "No less than" },
            { type: "text", value: "fifty students" },
            { type: "text", value: "was present" },
            { type: "text", value: "No error" }
          ],
          correctAnswer: { type: "text", value: "was present" },
          explanation: "Plural subject 'fifty students' → 'were present'."
        }
      ]
    }
  ]
};

export default ErrorSpotting_Hard;
