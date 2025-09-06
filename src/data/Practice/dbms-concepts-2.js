const DBMSConcepts2 = {
  fileName: "dbms-concepts-2",
  testName: "DBMS Concepts Test - 2",
  sections: [
    {
      name: "DBMS Concepts Test - 2",
      status: "Not Yet Started",
      questions: [
        {
          id: "DBMS_Med_1",
          type: "mcq",
          text: "Which SQL statement is used to modify existing records?",
          options: [
            { type: "text", value: "UPDATE" },
            { type: "text", value: "INSERT" },
            { type: "text", value: "DELETE" },
            { type: "text", value: "ALTER" }
          ],
          correctAnswer: { type: "text", value: "UPDATE" },
          explanation: "UPDATE modifies existing data in a table."
        },
        {
          id: "DBMS_Med_2",
          type: "mcq",
          text: "Which command is used to remove a table and its structure from a database?",
          options: [
            { type: "text", value: "DELETE" },
            { type: "text", value: "DROP" },
            { type: "text", value: "TRUNCATE" },
            { type: "text", value: "REMOVE" }
          ],
          correctAnswer: { type: "text", value: "DROP" },
          explanation: "DROP deletes both data and table structure."
        },
        {
          id: "DBMS_Med_3",
          type: "mcq",
          text: "A relation in relational DBMS is equivalent to:",
          options: [
            { type: "text", value: "Table" },
            { type: "text", value: "Row" },
            { type: "text", value: "Column" },
            { type: "text", value: "Database" }
          ],
          correctAnswer: { type: "text", value: "Table" },
          explanation: "In RDBMS, a relation is represented as a table."
        },
        {
          id: "DBMS_Med_4",
          type: "mcq",
          text: "Which of the following is a weak entity?",
          options: [
            { type: "text", value: "Entity with no primary key" },
            { type: "text", value: "Entity dependent on another entity" },
            { type: "text", value: "Entity with multiple attributes" },
            { type: "text", value: "Entity with foreign key" }
          ],
          correctAnswer: { type: "text", value: "Entity dependent on another entity" },
          explanation: "Weak entities depend on a strong entity and cannot exist independently."
        },
        {
          id: "DBMS_Med_5",
          type: "mcq",
          text: "Which of the following is used to enforce referential integrity?",
          options: [
            { type: "text", value: "Primary Key" },
            { type: "text", value: "Foreign Key" },
            { type: "text", value: "Index" },
            { type: "text", value: "Trigger" }
          ],
          correctAnswer: { type: "text", value: "Foreign Key" },
          explanation: "Foreign keys enforce relationships and referential integrity between tables."
        },
        {
          id: "DBMS_Med_6",
          type: "mcq",
          text: "Which normal form removes transitive dependency?",
          options: [
            { type: "text", value: "1NF" },
            { type: "text", value: "2NF" },
            { type: "text", value: "3NF" },
            { type: "text", value: "BCNF" }
          ],
          correctAnswer: { type: "text", value: "3NF" },
          explanation: "3NF ensures no transitive dependency exists in the table."
        },
        {
          id: "DBMS_Med_7",
          type: "mcq",
          text: "Which of the following is a characteristic of a transaction?",
          options: [
            { type: "text", value: "Atomicity" },
            { type: "text", value: "Consistency" },
            { type: "text", value: "Isolation" },
            { type: "text", value: "All of the above" }
          ],
          correctAnswer: { type: "text", value: "All of the above" },
          explanation: "Transactions follow ACID properties to maintain reliability."
        },
        {
          id: "DBMS_Med_8",
          type: "mcq",
          text: "Which SQL keyword is used to sort query results?",
          options: [
            { type: "text", value: "ORDER BY" },
            { type: "text", value: "GROUP BY" },
            { type: "text", value: "SORT" },
            { type: "text", value: "FILTER" }
          ],
          correctAnswer: { type: "text", value: "ORDER BY" },
          explanation: "ORDER BY sorts the results in ascending or descending order."
        },
        {
          id: "DBMS_Med_9",
          type: "mcq",
          text: "A view in SQL is:",
          options: [
            { type: "text", value: "A virtual table" },
            { type: "text", value: "A physical table" },
            { type: "text", value: "A stored procedure" },
            { type: "text", value: "A trigger" }
          ],
          correctAnswer: { type: "text", value: "A virtual table" },
          explanation: "Views present data from one or more tables without storing it physically."
        },
        {
          id: "DBMS_Med_10",
          type: "mcq",
          text: "Which of the following is not a DBMS architecture?",
          options: [
            { type: "text", value: "1-tier" },
            { type: "text", value: "2-tier" },
            { type: "text", value: "3-tier" },
            { type: "text", value: "4-tier" }
          ],
          correctAnswer: { type: "text", value: "4-tier" },
          explanation: "Standard DBMS architectures include 1-tier, 2-tier, and 3-tier."
        },
        {
          id: "DBMS_Med_11",
          type: "mcq",
          text: "Which of the following is used to prevent concurrent transaction conflicts?",
          options: [
            { type: "text", value: "Locking" },
            { type: "text", value: "Indexing" },
            { type: "text", value: "Normalization" },
            { type: "text", value: "Backup" }
          ],
          correctAnswer: { type: "text", value: "Locking" },
          explanation: "Locking ensures that two transactions do not modify the same data simultaneously."
        },
        {
          id: "DBMS_Med_12",
          type: "mcq",
          text: "Which SQL clause is used to group rows sharing a property?",
          options: [
            { type: "text", value: "GROUP BY" },
            { type: "text", value: "ORDER BY" },
            { type: "text", value: "WHERE" },
            { type: "text", value: "HAVING" }
          ],
          correctAnswer: { type: "text", value: "GROUP BY" },
          explanation: "GROUP BY groups rows with common values in specified columns."
        },
        {
          id: "DBMS_Med_13",
          type: "mcq",
          text: "Which SQL statement is used to create an index?",
          options: [
            { type: "text", value: "CREATE INDEX" },
            { type: "text", value: "CREATE TABLE" },
            { type: "text", value: "CREATE VIEW" },
            { type: "text", value: "CREATE TRIGGER" }
          ],
          correctAnswer: { type: "text", value: "CREATE INDEX" },
          explanation: "Indexes speed up data retrieval."
        },
        {
          id: "DBMS_Med_14",
          type: "mcq",
          text: "Which of the following is true about stored procedures?",
          options: [
            { type: "text", value: "They can accept parameters" },
            { type: "text", value: "They improve performance" },
            { type: "text", value: "They reduce network traffic" },
            { type: "text", value: "All of the above" }
          ],
          correctAnswer: { type: "text", value: "All of the above" },
          explanation: "Stored procedures enhance performance and maintainability."
        },
        {
          id: "DBMS_Med_15",
          type: "mcq",
          text: "Which type of join returns all records from left table and matched records from right?",
          options: [
            { type: "text", value: "INNER JOIN" },
            { type: "text", value: "LEFT JOIN" },
            { type: "text", value: "RIGHT JOIN" },
            { type: "text", value: "FULL JOIN" }
          ],
          correctAnswer: { type: "text", value: "LEFT JOIN" },
          explanation: "LEFT JOIN returns all rows from left and matching rows from right."
        },
        {
          id: "DBMS_Med_16",
          type: "mcq",
          text: "Which type of join returns rows that do not have matching values in both tables?",
          options: [
            { type: "text", value: "INNER JOIN" },
            { type: "text", value: "LEFT JOIN" },
            { type: "text", value: "RIGHT JOIN" },
            { type: "text", value: "FULL OUTER JOIN" }
          ],
          correctAnswer: { type: "text", value: "FULL OUTER JOIN" },
          explanation: "FULL OUTER JOIN returns unmatched rows from both tables."
        },
        {
          id: "DBMS_Med_17",
          type: "mcq",
          text: "Which of the following is used to automatically maintain data integrity?",
          options: [
            { type: "text", value: "Trigger" },
            { type: "text", value: "Index" },
            { type: "text", value: "View" },
            { type: "text", value: "Cursor" }
          ],
          correctAnswer: { type: "text", value: "Trigger" },
          explanation: "Triggers enforce automatic actions in response to events."
        },
        {
          id: "DBMS_Med_18",
          type: "mcq",
          text: "Which is the default transaction mode in most DBMS?",
          options: [
            { type: "text", value: "Autocommit" },
            { type: "text", value: "Manual commit" },
            { type: "text", value: "Read-only" },
            { type: "text", value: "Serializable" }
          ],
          correctAnswer: { type: "text", value: "Autocommit" },
          explanation: "Most DBMS automatically commit each transaction by default."
        },
        {
          id: "DBMS_Med_19",
          type: "mcq",
          text: "Which of the following is used for recovery in DBMS?",
          options: [
            { type: "text", value: "Transaction log" },
            { type: "text", value: "Index" },
            { type: "text", value: "Trigger" },
            { type: "text", value: "View" }
          ],
          correctAnswer: { type: "text", value: "Transaction log" },
          explanation: "Transaction logs help in recovery after crashes."
        },
        {
          id: "DBMS_Med_20",
          type: "mcq",
          text: "Which constraint ensures a column cannot have NULL values?",
          options: [
            { type: "text", value: "NOT NULL" },
            { type: "text", value: "PRIMARY KEY" },
            { type: "text", value: "UNIQUE" },
            { type: "text", value: "FOREIGN KEY" }
          ],
          correctAnswer: { type: "text", value: "NOT NULL" },
          explanation: "NOT NULL prevents NULL entries in a column."
        }
      ]
    }
  ]
};

export default DBMSConcepts2;
