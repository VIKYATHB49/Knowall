const BoatsAndStreams_Easy = {
  fileName: "boats-and-streams-1",
  testName: "Boats And Streams Test - 1",
  sections: [
    {
      name: "MCQ",
      status: "Not Yet Started",
      questions: [
        {
          id: "BS_Easy_1",
          type: "mcq",
          text: "A boat can travel 10 km downstream in 2 hours. If the speed of the stream is 2 km/h, what is the speed of the boat in still water?",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "7 km/h" },
            { type: "text", value: "8 km/h" },
          ],
          correctAnswer: { type: "text", value: "3 km/h" },
          explanation: "First, find the downstream speed by dividing distance by time: 10 km / 2 hours = 5 km/h. Since Downstream Speed = Boat Speed + Stream Speed, we have 5 km/h = Boat Speed + 2 km/h. Solving for the boat's speed gives 5 - 2 = 3 km/h."
        },
        {
          id: "BS_Easy_2",
          type: "mcq",
          text: "A boat goes 12 km downstream in 3 hours. If the stream’s speed is 1 km/h, what is the boat’s speed in still water?",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
          ],
          correctAnswer: { type: "text", value: "3 km/h" },
          explanation: "Calculate the downstream speed: 12 km / 3 hours = 4 km/h. Using the formula Downstream Speed = Boat Speed + Stream Speed, we get 4 km/h = Boat Speed + 1 km/h. Therefore, the boat's speed in still water is 4 - 1 = 3 km/h."
        },
        {
          id: "BS_Easy_3",
          type: "mcq",
          text: "A boat covers 8 km upstream in 2 hours. If the speed of the stream is 1 km/h, what is the speed of the boat in still water?",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
          ],
          correctAnswer: { type: "text", value: "5 km/h" },
          explanation: "First, determine the upstream speed: 8 km / 2 hours = 4 km/h. The formula for upstream speed is Upstream Speed = Boat Speed - Stream Speed. Substituting the values, we get 4 km/h = Boat Speed - 1 km/h. Solving for the boat's speed gives 4 + 1 = 5 km/h."
        },
        {
          id: "BS_Easy_4",
          type: "mcq",
          text: "A man rows downstream at 12 km/h and upstream at 8 km/h. Find his speed in still water.",
          options: [
            { type: "text", value: "9 km/h" },
            { type: "text", value: "10 km/h" },
            { type: "text", value: "11 km/h" },
            { type: "text", value: "12 km/h" },
          ],
          correctAnswer: { type: "text", value: "10 km/h" },
          explanation: "The speed in still water is the average of the downstream and upstream speeds. Using the formula: (Downstream Speed + Upstream Speed) / 2. We get (12 km/h + 8 km/h) / 2 = 20 / 2 = 10 km/h."
        },
        {
          id: "BS_Easy_5",
          type: "mcq",
          text: "If a boat can travel 20 km downstream in 4 hours, what is its downstream speed?",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
          ],
          correctAnswer: { type: "text", value: "5 km/h" },
          explanation: "Downstream speed is calculated by dividing the distance traveled by the time taken. Speed = Distance / Time = 20 km / 4 hours = 5 km/h."
        },
        {
          id: "BS_Easy_6",
          type: "mcq",
          text: "A boat goes 24 km downstream in 6 hours. Find its speed downstream.",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
          ],
          correctAnswer: { type: "text", value: "4 km/h" },
          explanation: "To find the downstream speed, divide the distance by the time. Speed = Distance / Time = 24 km / 6 hours = 4 km/h."
        },
        {
          id: "BS_Easy_7",
          type: "mcq",
          text: "If the speed of a boat in still water is 6 km/h and the speed of the stream is 2 km/h, find its downstream speed.",
          options: [
            { type: "text", value: "4 km/h" },
            { type: "text", value: "6 km/h" },
            { type: "text", value: "8 km/h" },
            { type: "text", value: "10 km/h" },
          ],
          correctAnswer: { type: "text", value: "8 km/h" },
          explanation: "Downstream speed is the sum of the boat's speed in still water and the stream's speed. So, Downstream Speed = 6 km/h + 2 km/h = 8 km/h."
        },
        {
          id: "BS_Easy_8",
          type: "mcq",
          text: "If a boat rows at 5 km/h in still water, and the stream flows at 1 km/h, what is its upstream speed?",
          options: [
            { type: "text", value: "3 km/h" },
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
          ],
          correctAnswer: { type: "text", value: "4 km/h" },
          explanation: "Upstream speed is the boat's speed in still water minus the stream's speed. Therefore, Upstream Speed = 5 km/h - 1 km/h = 4 km/h."
        },
        {
          id: "BS_Easy_9",
          type: "mcq",
          text: "If a boat goes downstream 15 km in 3 hours, find its downstream speed.",
          options: [
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
            { type: "text", value: "7 km/h" },
          ],
          correctAnswer: { type: "text", value: "5 km/h" },
          explanation: "Calculate the downstream speed by dividing the distance by the time. Speed = Distance / Time = 15 km / 3 hours = 5 km/h."
        },
        {
          id: "BS_Easy_10",
          type: "mcq",
          text: "If the speed downstream is 8 km/h and upstream is 4 km/h, find the boat’s speed in still water.",
          options: [
            { type: "text", value: "4 km/h" },
            { type: "text", value: "5 km/h" },
            { type: "text", value: "6 km/h" },
            { type: "text", value: "7 km/h" },
          ],
          correctAnswer: { type: "text", value: "6 km/h" },
          explanation: "The boat's speed in still water is the average of its downstream and upstream speeds. Using the formula: (Downstream Speed + Upstream Speed) / 2. We have (8 km/h + 4 km/h) / 2 = 12 / 2 = 6 km/h."
        },
      ],
    },
  ],
};

export default BoatsAndStreams_Easy;