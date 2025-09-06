const DBMSConcepts1 = {
  fileName: "dbms-concepts-1",
  testName: "DBMS Concepts Test - 1",
  sections: [
    {
      name: "DBMS Concepts Test - 1",
      status: "Not Yet Started",
      questions: [
        {
          id: "DBMS_Easy_1",
          type: "mcq",
          text: "Which of the following is a type of DBMS?",
          options: [
            { type: "text", value: "Hierarchical" },
            { type: "text", value: "Network" },
            { type: "text", value: "Relational" },
            { type: "text", value: "All of the above" }
          ],
          correctAnswer: { type: "text", value: "All of the above" },
          explanation: "DBMS types include hierarchical, network, relational, and object-oriented."
        },
        {
          id: "DBMS_Easy_2",
          type: "mcq",
          text: "Which SQL command is used to retrieve data from a database?",
          options: [
            { type: "text", value: "SELECT" },
            { type: "text", value: "INSERT" },
            { type: "text", value: "UPDATE" },
            { type: "text", value: "DELETE" }
          ],
          correctAnswer: { type: "text", value: "SELECT" },
          explanation: "SELECT is used to retrieve data from tables."
        },
        {
          id: "DBMS_Easy_3",
          type: "mcq",
          text: "What does ACID in DBMS stand for?",
          options: [
            { type: "text", value: "Atomicity, Consistency, Isolation, Durability" },
            { type: "text", value: "Accuracy, Control, Integrity, Data" },
            { type: "text", value: "Access, Control, Information, Data" },
            { type: "text", value: "Atomicity, Control, Isolation, Data" }
          ],
          correctAnswer: { type: "text", value: "Atomicity, Consistency, Isolation, Durability" },
          explanation: "ACID properties ensure reliable transactions in DBMS."
        },
        {
          id: "DBMS_Easy_4",
          type: "mcq",
          text: "Which key uniquely identifies a record in a table?",
          options: [
            { type: "text", value: "Primary Key" },
            { type: "text", value: "Foreign Key" },
            { type: "text", value: "Candidate Key" },
            { type: "text", value: "Alternate Key" }
          ],
          correctAnswer: { type: "text", value: "Primary Key" },
          explanation: "Primary key uniquely identifies each record in a table."
        },
        {
          id: "DBMS_Easy_5",
          type: "mcq",
          text: "Which SQL command is used to remove all records from a table?",
          options: [
            { type: "text", value: "DELETE" },
            { type: "text", value: "DROP" },
            { type: "text", value: "TRUNCATE" },
            { type: "text", value: "REMOVE" }
          ],
          correctAnswer: { type: "text", value: "TRUNCATE" },
          explanation: "TRUNCATE removes all rows efficiently while keeping the table structure."
        },
        {
          id: "DBMS_Easy_6",
          type: "mcq",
          text: "Which key is used to link two tables together?",
          options: [
            { type: "text", value: "Primary Key" },
            { type: "text", value: "Foreign Key" },
            { type: "text", value: "Candidate Key" },
            { type: "text", value: "Super Key" }
          ],
          correctAnswer: { type: "text", value: "Foreign Key" },
          explanation: "Foreign key creates relationships between tables."
        },
        {
          id: "DBMS_Easy_7",
          type: "mcq",
          text: "Normalization is primarily used to:",
          options: [
            { type: "text", value: "Eliminate redundancy" },
            { type: "text", value: "Increase storage" },
            { type: "text", value: "Speed up queries" },
            { type: "text", value: "Back up data" }
          ],
          correctAnswer: { type: "text", value: "Eliminate redundancy" },
          explanation: "Normalization organizes data to remove redundancy and improve consistency."
        },
        {
          id: "DBMS_Easy_8",
          type: "mcq",
          text: "Which of the following is not a DML command?",
          options: [
            { type: "text", value: "INSERT" },
            { type: "text", value: "UPDATE" },
            { type: "text", value: "DELETE" },
            { type: "text", value: "CREATE" }
          ],
          correctAnswer: { type: "text", value: "CREATE" },
          explanation: "CREATE is a DDL command, not DML."
        },
        {
          id: "DBMS_Easy_9",
          type: "mcq",
          text: "Which relationship type allows multiple records in both tables?",
          options: [
            { type: "text", value: "One-to-One" },
            { type: "text", value: "One-to-Many" },
            { type: "text", value: "Many-to-Many" },
            { type: "text", value: "Self-Referencing" }
          ],
          correctAnswer: { type: "text", value: "Many-to-Many" },
          explanation: "Many-to-Many allows multiple records in both tables."
        },
        {
          id: "DBMS_Easy_10",
          type: "mcq",
          text: "Which command is used to create a new table in SQL?",
          options: [
            { type: "text", value: "CREATE TABLE" },
            { type: "text", value: "INSERT TABLE" },
            { type: "text", value: "ALTER TABLE" },
            { type: "text", value: "NEW TABLE" }
          ],
          correctAnswer: { type: "text", value: "CREATE TABLE" },
          explanation: "CREATE TABLE is used to define a new table structure."
        },
        {
          id: "DBMS_Easy_11",
          type: "mcq",
          text: "In DBMS, data consistency is maintained using:",
          options: [
            { type: "text", value: "Indexes" },
            { type: "text", value: "Transactions" },
            { type: "text", value: "Views" },
            { type: "text", value: "Schemas" }
          ],
          correctAnswer: { type: "text", value: "Transactions" },
          explanation: "Transactions ensure ACID properties, maintaining data consistency."
        },
        {
          id: "DBMS_Easy_12",
          type: "mcq",
          text: "Which of the following ensures uniqueness of a column?",
          options: [
            { type: "text", value: "Primary Key" },
            { type: "text", value: "Foreign Key" },
            { type: "text", value: "Unique Constraint" },
            { type: "text", value: "Both Primary Key and Unique Constraint" }
          ],
          correctAnswer: { type: "text", value: "Both Primary Key and Unique Constraint" },
          explanation: "Both primary key and unique constraint ensure column uniqueness."
        },
        {
          id: "DBMS_Easy_13",
          type: "mcq",
          text: "Indexing in DBMS is used to:",
          options: [
            { type: "text", value: "Increase retrieval speed" },
            { type: "text", value: "Store more data" },
            { type: "text", value: "Normalize tables" },
            { type: "text", value: "Enforce constraints" }
          ],
          correctAnswer: { type: "text", value: "Increase retrieval speed" },
          explanation: "Indexes provide fast access to records without full table scan."
        },
        {
          id: "DBMS_Easy_14",
          type: "mcq",
          text: "Which DBMS model is used by Oracle and MySQL?",
          options: [
            { type: "text", value: "Hierarchical" },
            { type: "text", value: "Network" },
            { type: "text", value: "Relational" },
            { type: "text", value: "Document" }
          ],
          correctAnswer: { type: "text", value: "Relational" },
          explanation: "Oracle and MySQL are relational DBMS using tables and relations."
        },
        {
          id: "DBMS_Easy_15",
          type: "mcq",
          text: "Which SQL clause is used to filter records?",
          options: [
            { type: "text", value: "WHERE" },
            { type: "text", value: "GROUP BY" },
            { type: "text", value: "ORDER BY" },
            { type: "text", value: "HAVING" }
          ],
          correctAnswer: { type: "text", value: "WHERE" },
          explanation: "WHERE clause is used to filter rows based on condition."
        }
      ]
    }
  ]
};

export default DBMSConcepts1;
