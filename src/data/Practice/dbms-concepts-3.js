const DBMSConcepts3 = {
  fileName: "dbms-concepts-3",
  testName: "DBMS Concepts Test - 3",
  sections: [
    {
      name: "DBMS Concepts Test - 3",
      status: "Not Yet Started",
      questions: [
        {
          id: "DBMS_Hard_1",
          type: "mcq",
          text: "Which type of join returns only matching rows between two tables?",
          options: [
            { type: "text", value: "INNER JOIN" },
            { type: "text", value: "LEFT JOIN" },
            { type: "text", value: "RIGHT JOIN" },
            { type: "text", value: "FULL OUTER JOIN" }
          ],
          correctAnswer: { type: "text", value: "INNER JOIN" },
          explanation: "INNER JOIN returns rows that satisfy the join condition."
        },
        {
          id: "DBMS_Hard_2",
          type: "mcq",
          text: "In normalization, which form removes multivalued dependencies?",
          options: [
            { type: "text", value: "1NF" },
            { type: "text", value: "4NF" },
            { type: "text", value: "BCNF" },
            { type: "text", value: "3NF" }
          ],
          correctAnswer: { type: "text", value: "4NF" },
          explanation: "4NF eliminates multivalued dependencies."
        },
        {
          id: "DBMS_Hard_3",
          type: "mcq",
          text: "Which isolation level prevents dirty reads but allows non-repeatable reads?",
          options: [
            { type: "text", value: "READ UNCOMMITTED" },
            { type: "text", value: "READ COMMITTED" },
            { type: "text", value: "REPEATABLE READ" },
            { type: "text", value: "SERIALIZABLE" }
          ],
          correctAnswer: { type: "text", value: "READ COMMITTED" },
          explanation: "READ COMMITTED ensures only committed data is read."
        },
        {
          id: "DBMS_Hard_4",
          type: "mcq",
          text: "Which of the following is a disadvantage of using stored procedures?",
          options: [
            { type: "text", value: "Reduced performance" },
            { type: "text", value: "Increased network traffic" },
            { type: "text", value: "Vendor dependency" },
            { type: "text", value: "Cannot accept parameters" }
          ],
          correctAnswer: { type: "text", value: "Vendor dependency" },
          explanation: "Stored procedures can tie you to a specific DBMS vendor."
        },
        {
          id: "DBMS_Hard_5",
          type: "mcq",
          text: "Which of the following is a property of ACID transactions?",
          options: [
            { type: "text", value: "Atomicity" },
            { type: "text", value: "Consistency" },
            { type: "text", value: "Isolation" },
            { type: "text", value: "Durability" }
          ],
          correctAnswer: { type: "text", value: "All of the above" },
          explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability."
        },
        {
          id: "DBMS_Hard_6",
          type: "mcq",
          text: "A recursive relationship is one where:",
          options: [
            { type: "text", value: "An entity is related to itself" },
            { type: "text", value: "Two entities relate to each other" },
            { type: "text", value: "Multiple tables are joined" },
            { type: "text", value: "Primary key refers to foreign key" }
          ],
          correctAnswer: { type: "text", value: "An entity is related to itself" },
          explanation: "Recursive relationships exist when an entity references itself."
        },
        {
          id: "DBMS_Hard_7",
          type: "mcq",
          text: "Which technique is used for concurrency control in databases?",
          options: [
            { type: "text", value: "Locking" },
            { type: "text", value: "Logging" },
            { type: "text", value: "Indexing" },
            { type: "text", value: "Sharding" }
          ],
          correctAnswer: { type: "text", value: "Locking" },
          explanation: "Locking controls concurrent access to ensure data consistency."
        },
        {
          id: "DBMS_Hard_8",
          type: "mcq",
          text: "Which type of key uniquely identifies a row in one table and is referenced in another?",
          options: [
            { type: "text", value: "Primary Key" },
            { type: "text", value: "Foreign Key" },
            { type: "text", value: "Candidate Key" },
            { type: "text", value: "Alternate Key" }
          ],
          correctAnswer: { type: "text", value: "Foreign Key" },
          explanation: "Foreign keys reference primary keys of other tables to maintain integrity."
        },
        {
          id: "DBMS_Hard_9",
          type: "mcq",
          text: "Which type of database index uses a tree structure?",
          options: [
            { type: "text", value: "B-Tree" },
            { type: "text", value: "Hash" },
            { type: "text", value: "Bitmap" },
            { type: "text", value: "Clustered" }
          ],
          correctAnswer: { type: "text", value: "B-Tree" },
          explanation: "B-Tree indexes store data in a balanced tree for fast retrieval."
        },
        {
          id: "DBMS_Hard_10",
          type: "mcq",
          text: "Which SQL command is used to remove all rows but keep the table structure?",
          options: [
            { type: "text", value: "DELETE" },
            { type: "text", value: "TRUNCATE" },
            { type: "text", value: "DROP" },
            { type: "text", value: "REMOVE" }
          ],
          correctAnswer: { type: "text", value: "TRUNCATE" },
          explanation: "TRUNCATE removes all data while retaining the table structure."
        },
        {
          id: "DBMS_Hard_11",
          type: "mcq",
          text: "Which of the following is used to speed up retrieval of data?",
          options: [
            { type: "text", value: "Index" },
            { type: "text", value: "Trigger" },
            { type: "text", value: "View" },
            { type: "text", value: "Stored Procedure" }
          ],
          correctAnswer: { type: "text", value: "Index" },
          explanation: "Indexes allow faster data lookups in tables."
        },
        {
          id: "DBMS_Hard_12",
          type: "mcq",
          text: "In ER modeling, a weak entity must have:",
          options: [
            { type: "text", value: "A primary key" },
            { type: "text", value: "Partial key and relationship to owner entity" },
            { type: "text", value: "No key" },
            { type: "text", value: "Foreign key only" }
          ],
          correctAnswer: { type: "text", value: "Partial key and relationship to owner entity" },
          explanation: "Weak entities require a partial key and connection to a strong entity."
        },
        {
          id: "DBMS_Hard_13",
          type: "mcq",
          text: "Which SQL clause is used to filter groups after aggregation?",
          options: [
            { type: "text", value: "WHERE" },
            { type: "text", value: "GROUP BY" },
            { type: "text", value: "HAVING" },
            { type: "text", value: "ORDER BY" }
          ],
          correctAnswer: { type: "text", value: "HAVING" },
          explanation: "HAVING filters grouped records after aggregation."
        },
        {
          id: "DBMS_Hard_14",
          type: "mcq",
          text: "Which is true about a clustered index?",
          options: [
            { type: "text", value: "Determines physical order of data" },
            { type: "text", value: "Allows duplicate keys" },
            { type: "text", value: "Cannot be created on primary key" },
            { type: "text", value: "Slower than non-clustered index" }
          ],
          correctAnswer: { type: "text", value: "Determines physical order of data" },
          explanation: "Clustered index orders rows physically based on key values."
        },
        {
          id: "DBMS_Hard_15",
          type: "mcq",
          text: "Which type of database backup allows recovery to any point in time?",
          options: [
            { type: "text", value: "Full backup" },
            { type: "text", value: "Incremental backup" },
            { type: "text", value: "Differential backup" },
            { type: "text", value: "Continuous backup / Log-based backup" }
          ],
          correctAnswer: { type: "text", value: "Continuous backup / Log-based backup" },
          explanation: "Continuous backups capture all changes to allow point-in-time recovery."
        }
      ]
    }
  ]
};

export default DBMSConcepts3;
