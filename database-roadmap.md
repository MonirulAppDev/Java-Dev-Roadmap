# Complete SQL and NoSQL Database Roadmap for Backend Engineers 🗄️🚀

A strong Java backend engineer should first master **relational databases and SQL**, then learn NoSQL databases according to specific use cases.

```text
Database Fundamentals
        ↓
SQL Queries
        ↓
Relational Database Design
        ↓
Transactions and Concurrency
        ↓
Indexes and Query Optimization
        ↓
PostgreSQL
        ↓
Database Integration with Java/Spring
        ↓
Redis
        ↓
MongoDB
        ↓
Distributed Databases
        ↓
Search, Graph and Time-Series Databases
```

---

# Part 1 — Database Fundamentals

## 1. Basic Database Concepts

* [ ] What data is
* [ ] Database
* [ ] Database Management System
* [ ] Relational database
* [ ] Non-relational database
* [ ] Database server
* [ ] Database client
* [ ] Schema
* [ ] Table
* [ ] Row
* [ ] Column
* [ ] Record
* [ ] Field
* [ ] Data type
* [ ] Query
* [ ] Transaction
* [ ] Database engine
* [ ] Database instance
* [ ] Metadata

## 2. DBMS versus RDBMS

Understand the differences between:

* DBMS
* RDBMS
* SQL database
* NoSQL database
* In-memory database
* Distributed database
* Embedded database
* Cloud-managed database

Examples:

| Category      | Examples                              |
| ------------- | ------------------------------------- |
| Relational    | PostgreSQL, MySQL, Oracle, SQL Server |
| Document      | MongoDB, Couchbase                    |
| Key-value     | Redis, DynamoDB                       |
| Wide-column   | Cassandra, ScyllaDB                   |
| Graph         | Neo4j, Amazon Neptune                 |
| Search engine | Elasticsearch, OpenSearch             |
| Time-series   | InfluxDB, TimescaleDB                 |

---

# Part 2 — Relational Database Fundamentals

## 3. Relational Model

* [ ] Relation
* [ ] Tuple
* [ ] Attribute
* [ ] Domain
* [ ] Relation schema
* [ ] Database schema
* [ ] Candidate key
* [ ] Primary key
* [ ] Alternate key
* [ ] Composite key
* [ ] Natural key
* [ ] Surrogate key
* [ ] Foreign key
* [ ] Referential integrity

## 4. Relationships

* [ ] One-to-one
* [ ] One-to-many
* [ ] Many-to-one
* [ ] Many-to-many
* [ ] Self-referencing relationship
* [ ] Optional relationship
* [ ] Mandatory relationship

You should know how to convert each relationship into database tables.

---

# Part 3 — SQL Fundamentals

SQL can be divided into several groups.

| Category | Purpose                     |
| -------- | --------------------------- |
| DDL      | Defines database structures |
| DML      | Manipulates data            |
| DQL      | Retrieves data              |
| TCL      | Controls transactions       |
| DCL      | Controls permissions        |

---

## 5. Data Definition Language

Learn:

* [ ] `CREATE DATABASE`
* [ ] `CREATE SCHEMA`
* [ ] `CREATE TABLE`
* [ ] `ALTER TABLE`
* [ ] `DROP TABLE`
* [ ] `TRUNCATE TABLE`
* [ ] `RENAME`
* [ ] `COMMENT`

Example:

```sql
CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. SQL Data Types

### Numeric types

* [ ] `SMALLINT`
* [ ] `INTEGER`
* [ ] `BIGINT`
* [ ] `DECIMAL`
* [ ] `NUMERIC`
* [ ] `REAL`
* [ ] `DOUBLE PRECISION`

### Character types

* [ ] `CHAR`
* [ ] `VARCHAR`
* [ ] `TEXT`

### Date and time types

* [ ] `DATE`
* [ ] `TIME`
* [ ] `TIMESTAMP`
* [ ] Timestamp with timezone
* [ ] Interval

### Other types

* [ ] `BOOLEAN`
* [ ] `UUID`
* [ ] `JSON`
* [ ] `JSONB`
* [ ] Binary data
* [ ] Arrays
* [ ] Enum types

Important rule:

```text
Never use FLOAT or DOUBLE for financial amounts.
Use DECIMAL or NUMERIC.
```

---

## 7. Constraints

* [ ] `PRIMARY KEY`
* [ ] `FOREIGN KEY`
* [ ] `UNIQUE`
* [ ] `NOT NULL`
* [ ] `CHECK`
* [ ] `DEFAULT`
* [ ] Composite constraints
* [ ] Cascading actions

Foreign-key actions:

* `CASCADE`
* `RESTRICT`
* `NO ACTION`
* `SET NULL`
* `SET DEFAULT`

Example:

```sql
CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0),

    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE RESTRICT
);
```

---

# Part 4 — Data Manipulation

## 8. Insert Data

* [ ] Single-row insert
* [ ] Multiple-row insert
* [ ] Insert from query
* [ ] Default values
* [ ] Returning generated values
* [ ] Upsert

```sql
INSERT INTO users (name, email)
VALUES ('Rahim', 'rahim@example.com');
```

---

## 9. Update Data

* [ ] Updating one column
* [ ] Updating multiple columns
* [ ] Conditional updates
* [ ] Updating from another table
* [ ] Safe update practices

```sql
UPDATE users
SET name = 'Md. Rahim'
WHERE id = 1;
```

Never execute an `UPDATE` without checking the `WHERE` clause.

---

## 10. Delete Data

* [ ] Conditional deletion
* [ ] Delete with joins
* [ ] Hard deletion
* [ ] Soft deletion
* [ ] Cascading deletion

```sql
DELETE FROM users
WHERE id = 1;
```

---

# Part 5 — Querying Data

## 11. Basic `SELECT`

* [ ] Selecting columns
* [ ] Selecting all columns
* [ ] Column aliases
* [ ] Table aliases
* [ ] Calculated columns
* [ ] Literal values
* [ ] Removing duplicates with `DISTINCT`

```sql
SELECT id, name, email
FROM users;
```

Avoid using `SELECT *` in production queries unless it is genuinely appropriate.

---

## 12. Filtering

* [ ] `WHERE`
* [ ] Equality conditions
* [ ] Comparison operators
* [ ] `AND`
* [ ] `OR`
* [ ] `NOT`
* [ ] `BETWEEN`
* [ ] `IN`
* [ ] `LIKE`
* [ ] `ILIKE`
* [ ] `IS NULL`
* [ ] `IS NOT NULL`
* [ ] Regular-expression filtering

```sql
SELECT *
FROM products
WHERE price BETWEEN 500 AND 2000
  AND stock_quantity > 0;
```

---

## 13. Sorting and Limiting

* [ ] `ORDER BY`
* [ ] Ascending order
* [ ] Descending order
* [ ] Sorting by multiple columns
* [ ] `LIMIT`
* [ ] `OFFSET`
* [ ] Top-N queries
* [ ] Stable sorting

```sql
SELECT *
FROM products
ORDER BY price DESC, id ASC
LIMIT 10;
```

---

## 14. Aggregate Functions

* [ ] `COUNT`
* [ ] `SUM`
* [ ] `AVG`
* [ ] `MIN`
* [ ] `MAX`
* [ ] Aggregate expressions
* [ ] Handling `NULL`

```sql
SELECT category_id, COUNT(*) AS product_count
FROM products
GROUP BY category_id;
```

---

## 15. Grouping Data

* [ ] `GROUP BY`
* [ ] Grouping by multiple columns
* [ ] `HAVING`
* [ ] Grouping sets
* [ ] Rollup
* [ ] Cube

Difference:

```text
WHERE filters rows before grouping.
HAVING filters groups after aggregation.
```

---

# Part 6 — SQL Joins

## 16. Join Types

Master all of these:

* [ ] Inner join
* [ ] Left join
* [ ] Right join
* [ ] Full outer join
* [ ] Cross join
* [ ] Self join
* [ ] Lateral join
* [ ] Semi-join concept
* [ ] Anti-join concept

### Inner join

```sql
SELECT o.id, u.name, o.total_amount
FROM orders o
JOIN users u ON u.id = o.user_id;
```

### Left join

```sql
SELECT u.name, o.id
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;
```

### Find users without orders

```sql
SELECT u.*
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;
```

Also learn the `NOT EXISTS` form:

```sql
SELECT u.*
FROM users u
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.user_id = u.id
);
```

---

# Part 7 — Subqueries and CTEs

## 17. Subqueries

* [ ] Scalar subqueries
* [ ] Row subqueries
* [ ] Table subqueries
* [ ] Correlated subqueries
* [ ] Subqueries in `SELECT`
* [ ] Subqueries in `FROM`
* [ ] Subqueries in `WHERE`
* [ ] `EXISTS`
* [ ] `NOT EXISTS`
* [ ] `ANY`
* [ ] `ALL`

## 18. Common Table Expressions

* [ ] Basic CTE
* [ ] Multiple CTEs
* [ ] Recursive CTE
* [ ] Hierarchical data
* [ ] Recursive traversal

```sql
WITH active_users AS (
    SELECT id, name
    FROM users
    WHERE active = TRUE
)
SELECT *
FROM active_users;
```

Recursive CTEs are useful for:

* Organization hierarchy
* Product categories
* Folder structures
* Referral networks
* Tree traversal

---

# Part 8 — Advanced SQL

## 19. Window Functions

Window functions are essential for advanced backend reporting.

Learn:

* [ ] `OVER`
* [ ] `PARTITION BY`
* [ ] `ORDER BY`
* [ ] Window frames
* [ ] `ROW_NUMBER`
* [ ] `RANK`
* [ ] `DENSE_RANK`
* [ ] `LAG`
* [ ] `LEAD`
* [ ] Running total
* [ ] Moving average
* [ ] First value
* [ ] Last value
* [ ] Percent rank

Example:

```sql
SELECT
    employee_id,
    department_id,
    salary,
    RANK() OVER (
        PARTITION BY department_id
        ORDER BY salary DESC
    ) AS salary_rank
FROM employees;
```

---

## 20. Conditional Logic

* [ ] `CASE`
* [ ] `COALESCE`
* [ ] `NULLIF`
* [ ] Conditional aggregation
* [ ] Conditional ordering

```sql
SELECT
    name,
    CASE
        WHEN stock_quantity = 0 THEN 'Out of stock'
        WHEN stock_quantity < 10 THEN 'Low stock'
        ELSE 'Available'
    END AS stock_status
FROM products;
```

---

## 21. Set Operations

* [ ] `UNION`
* [ ] `UNION ALL`
* [ ] `INTERSECT`
* [ ] `EXCEPT`
* [ ] Column compatibility
* [ ] Duplicate handling

---

## 22. Working with `NULL`

Understand carefully:

* `NULL` is not zero
* `NULL` is not an empty string
* `NULL = NULL` is not true
* Use `IS NULL`
* Aggregate functions often ignore `NULL`
* `NOT IN` can behave unexpectedly with `NULL`

Learn SQL three-valued logic:

* True
* False
* Unknown

---

# Part 9 — Database Design

## 23. Entity-Relationship Modeling

* [ ] Entity
* [ ] Attribute
* [ ] Relationship
* [ ] Cardinality
* [ ] Participation
* [ ] Weak entity
* [ ] Associative entity
* [ ] ER diagrams
* [ ] Logical data models
* [ ] Physical data models

Tools you may use:

* Draw.io
* dbdiagram.io
* MySQL Workbench
* DBeaver
* pgModeler

---

## 24. Normalization

### First Normal Form

* Atomic values
* No repeating groups

### Second Normal Form

* Must be in 1NF
* No partial dependency on a composite key

### Third Normal Form

* Must be in 2NF
* No transitive dependency

Also learn:

* [ ] Boyce-Codd Normal Form
* [ ] Fourth Normal Form
* [ ] Functional dependencies
* [ ] Partial dependencies
* [ ] Transitive dependencies

## 25. Denormalization

Learn when denormalization is useful:

* Read-heavy reporting
* Analytics
* Search
* Precomputed summaries
* Reducing expensive joins

Understand the costs:

* Duplicate data
* More complicated updates
* Consistency risks
* Larger storage requirements

---

## 26. Schema Design Principles

* [ ] Use meaningful table names
* [ ] Use consistent naming
* [ ] Choose correct data types
* [ ] Add necessary constraints
* [ ] Avoid storing comma-separated values
* [ ] Do not store calculated data unnecessarily
* [ ] Avoid unnecessary nullable columns
* [ ] Avoid excessive use of generic JSON columns
* [ ] Model money correctly
* [ ] Model dates and time zones correctly
* [ ] Design for expected queries

---

# Part 10 — Indexing

## 27. Index Fundamentals

* [ ] What an index is
* [ ] Index lookup
* [ ] Table scan
* [ ] Index scan
* [ ] Index-only scan
* [ ] Clustered index concept
* [ ] Non-clustered index concept
* [ ] Selectivity
* [ ] Cardinality
* [ ] Index maintenance cost

## 28. Index Types

* [ ] B-tree index
* [ ] Hash index
* [ ] Composite index
* [ ] Unique index
* [ ] Partial index
* [ ] Functional index
* [ ] Covering index
* [ ] Full-text index
* [ ] Spatial index

PostgreSQL-specific concepts:

* [ ] GIN index
* [ ] GiST index
* [ ] BRIN index
* [ ] Expression index

---

## 29. Composite Indexes

Understand column order.

For an index:

```sql
CREATE INDEX idx_orders_user_status_created
ON orders (user_id, status, created_at);
```

It may efficiently support queries using:

* `user_id`
* `user_id, status`
* `user_id, status, created_at`

But it may not efficiently support a query using only `created_at`.

Learn:

* Leftmost-prefix concept
* Equality columns before range columns
* Sorting through indexes
* Covering queries
* Index selectivity

---

## 30. When Not to Add an Index

Avoid unnecessary indexes when:

* The table is very small
* The column has very low selectivity
* The column is frequently updated
* The index duplicates another index
* The query is rarely executed
* Write performance is more important

Every additional index can slow down:

* Insert
* Update
* Delete
* Vacuuming
* Replication
* Backup size

---

# Part 11 — Query Optimization

## 31. Query Execution Plans

Learn:

* [ ] `EXPLAIN`
* [ ] `EXPLAIN ANALYZE`
* [ ] Sequential scan
* [ ] Index scan
* [ ] Bitmap index scan
* [ ] Nested-loop join
* [ ] Hash join
* [ ] Merge join
* [ ] Sort operation
* [ ] Estimated rows
* [ ] Actual rows
* [ ] Query cost
* [ ] Planning time
* [ ] Execution time

## 32. Query-Optimization Techniques

* [ ] Select only required columns
* [ ] Add appropriate indexes
* [ ] Avoid functions on indexed columns when possible
* [ ] Avoid leading wildcard searches
* [ ] Avoid unnecessary joins
* [ ] Avoid N+1 queries
* [ ] Use batch operations
* [ ] Use pagination
* [ ] Check execution plans
* [ ] Avoid very large `IN` lists
* [ ] Avoid unnecessary `DISTINCT`
* [ ] Use `EXISTS` appropriately
* [ ] Partition large tables
* [ ] Archive old data
* [ ] Precompute expensive reports when necessary

---

# Part 12 — Transactions and ACID

## 33. ACID Properties

### Atomicity

All transaction operations succeed or all fail.

### Consistency

The database moves from one valid state to another.

### Isolation

Concurrent transactions should not improperly interfere.

### Durability

Committed changes survive failures.

---

## 34. Transaction Control

* [ ] `BEGIN`
* [ ] `COMMIT`
* [ ] `ROLLBACK`
* [ ] `SAVEPOINT`
* [ ] Rollback to savepoint
* [ ] Autocommit
* [ ] Nested-transaction concepts

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;
```

---

## 35. Transaction Isolation Levels

* [ ] Read Uncommitted
* [ ] Read Committed
* [ ] Repeatable Read
* [ ] Serializable

Understand anomalies:

* Dirty read
* Non-repeatable read
* Phantom read
* Lost update
* Write skew

---

## 36. Locking

* [ ] Shared lock
* [ ] Exclusive lock
* [ ] Row-level lock
* [ ] Table-level lock
* [ ] Advisory lock
* [ ] Optimistic locking
* [ ] Pessimistic locking
* [ ] Lock timeout
* [ ] Deadlock

Example:

```sql
SELECT *
FROM accounts
WHERE id = 1
FOR UPDATE;
```

---

## 37. MVCC

Learn Multi-Version Concurrency Control:

* Readers and writers
* Transaction snapshots
* Row versions
* Visibility rules
* Vacuuming
* Long-running transactions
* Transaction ID wraparound concepts

MVCC is especially important when learning PostgreSQL.

---

# Part 13 — Database Objects

## 38. Views

* [ ] Simple views
* [ ] Complex views
* [ ] Updatable views
* [ ] Security views
* [ ] Views as abstraction layers

## 39. Materialized Views

* [ ] Stored query results
* [ ] Refreshing materialized views
* [ ] Concurrent refresh concepts
* [ ] Indexes on materialized views
* [ ] Reporting use cases

## 40. Stored Procedures and Functions

* [ ] Stored function
* [ ] Stored procedure
* [ ] Input parameters
* [ ] Output parameters
* [ ] Local variables
* [ ] Conditional logic
* [ ] Loops
* [ ] Exception handling
* [ ] Transaction behavior
* [ ] When business logic belongs in the database

Use them selectively. Do not place all application business logic inside stored procedures.

## 41. Triggers

* [ ] Before trigger
* [ ] After trigger
* [ ] Row-level trigger
* [ ] Statement-level trigger
* [ ] Audit triggers
* [ ] Validation triggers
* [ ] Trigger recursion
* [ ] Hidden side effects

Triggers can be powerful, but excessive trigger usage makes systems difficult to debug.

---

# Part 14 — PostgreSQL Roadmap

For Java backend development, **PostgreSQL is an excellent primary database**.

## 42. PostgreSQL Essentials

* [ ] Installation
* [ ] `psql`
* [ ] Databases
* [ ] Schemas
* [ ] Roles
* [ ] Permissions
* [ ] Identity columns
* [ ] Sequences
* [ ] UUID
* [ ] Arrays
* [ ] JSONB
* [ ] Enums
* [ ] Full-text search
* [ ] Generated columns
* [ ] Extensions

## 43. PostgreSQL Advanced Features

* [ ] `RETURNING`
* [ ] `ON CONFLICT`
* [ ] Partial indexes
* [ ] Expression indexes
* [ ] JSONB operators
* [ ] Array operators
* [ ] Range types
* [ ] Lateral joins
* [ ] Recursive CTEs
* [ ] Window functions
* [ ] Full-text search
* [ ] Table partitioning
* [ ] Logical replication
* [ ] Row-level security

## 44. PostgreSQL Administration Basics

* [ ] Configuration files
* [ ] Connection limits
* [ ] Role management
* [ ] Database privileges
* [ ] Vacuum
* [ ] Autovacuum
* [ ] Analyze
* [ ] Write-ahead logging
* [ ] Checkpoints
* [ ] Backup and restore
* [ ] Replication concepts
* [ ] Monitoring slow queries

---

# Part 15 — MySQL Roadmap

MySQL is also widely used, especially in web applications.

Learn:

* [ ] MySQL installation
* [ ] Database and user management
* [ ] Storage engines
* [ ] InnoDB
* [ ] Auto-increment
* [ ] Character sets
* [ ] Collation
* [ ] Transactions
* [ ] Indexes
* [ ] Explain plans
* [ ] Replication
* [ ] Binary logs
* [ ] Backup and restore
* [ ] MySQL-specific query behavior

Learn PostgreSQL deeply first. Learn MySQL differences afterward.

---

# Part 16 — Database Security

## 45. Authentication and Authorization

* [ ] Database users
* [ ] Roles
* [ ] Permissions
* [ ] Ownership
* [ ] Grant
* [ ] Revoke
* [ ] Principle of least privilege
* [ ] Separate application and administrator users

## 46. SQL Injection Prevention

Always use parameterized queries.

Unsafe:

```java
String sql = "SELECT * FROM users WHERE email = '" + email + "'";
```

Safe:

```java
String sql = "SELECT * FROM users WHERE email = ?";
```

Learn:

* Prepared statements
* Parameter binding
* Input validation
* ORM query parameters
* Dynamic query safety
* Stored-procedure injection risks

## 47. Data Protection

* [ ] Encryption in transit
* [ ] TLS
* [ ] Encryption at rest
* [ ] Password hashing
* [ ] Field-level encryption
* [ ] Key management
* [ ] Data masking
* [ ] Tokenization
* [ ] Audit logs
* [ ] Sensitive-data classification
* [ ] Data-retention policies

---

# Part 17 — Database Migrations

## 48. Migration Fundamentals

* [ ] Version-controlled schema
* [ ] Repeatable migrations
* [ ] Roll-forward strategy
* [ ] Migration checksum
* [ ] Baseline
* [ ] Seed data
* [ ] Data migration
* [ ] Schema migration
* [ ] Backward-compatible changes

For Spring Boot, learn one:

* Flyway
* Liquibase

## 49. Zero-Downtime Migrations

Learn the expand-and-contract pattern:

1. Add a new nullable column.
2. Deploy code that writes both old and new formats.
3. Backfill existing data.
4. Switch reads to the new column.
5. Stop using the old column.
6. Remove the old column later.

Avoid making destructive schema changes during a single deployment.

---

# Part 18 — Backup, Recovery and Reliability

## 50. Backup Types

* [ ] Full backup
* [ ] Incremental backup
* [ ] Differential backup
* [ ] Logical backup
* [ ] Physical backup
* [ ] Snapshot
* [ ] Point-in-time recovery

## 51. Reliability Concepts

* [ ] Recovery Point Objective
* [ ] Recovery Time Objective
* [ ] Write-ahead log
* [ ] Replication
* [ ] Failover
* [ ] High availability
* [ ] Disaster recovery
* [ ] Backup verification
* [ ] Restore testing

A backup is not trustworthy until you have successfully tested restoration.

---

# Part 19 — Java and Spring Database Integration

## 52. JDBC

* [ ] Driver
* [ ] Connection
* [ ] Statement
* [ ] Prepared statement
* [ ] Result set
* [ ] Batch operations
* [ ] Transactions
* [ ] Savepoints
* [ ] Connection pooling
* [ ] Resource closing
* [ ] Try-with-resources

## 53. Spring JDBC

* [ ] `JdbcTemplate`
* [ ] Named parameters
* [ ] Row mapper
* [ ] Batch updates
* [ ] Transaction management
* [ ] Exception translation

## 54. JPA and Hibernate

* [ ] Entity mapping
* [ ] Relationships
* [ ] Persistence context
* [ ] Lazy loading
* [ ] Dirty checking
* [ ] JPQL
* [ ] Native queries
* [ ] Transactions
* [ ] Entity graphs
* [ ] Optimistic locking
* [ ] Pessimistic locking
* [ ] N+1 queries
* [ ] Batch fetching

## 55. Spring Data JPA

* [ ] Repository interfaces
* [ ] Derived query methods
* [ ] Custom JPQL
* [ ] Native queries
* [ ] Specifications
* [ ] Pagination
* [ ] Sorting
* [ ] Projections
* [ ] Auditing

Important rule:

```text
Learning JPA does not replace learning SQL.
```

You must understand the SQL generated by Hibernate.

---

# Part 20 — NoSQL Fundamentals

## 56. What NoSQL Means

NoSQL does not mean “SQL is obsolete.”

It usually refers to databases optimized for:

* Flexible schemas
* Horizontal scaling
* High write throughput
* Large distributed datasets
* Specific data models
* Low-latency access patterns

## 57. NoSQL Categories

| Type        | Data model               | Common use                     |
| ----------- | ------------------------ | ------------------------------ |
| Key-value   | Key → value              | Caching, sessions              |
| Document    | JSON-like documents      | Flexible application data      |
| Wide-column | Partitioned rows         | High-volume distributed writes |
| Graph       | Nodes and relationships  | Relationship-heavy queries     |
| Search      | Inverted index           | Full-text search               |
| Time-series | Timestamped measurements | Metrics and IoT                |

---

# Part 21 — Distributed Database Concepts

## 58. CAP Theorem

In the presence of a network partition, a distributed system must prioritize either:

* Consistency
* Availability

The three properties are:

* Consistency
* Availability
* Partition tolerance

Partition tolerance is generally unavoidable in distributed systems.

## 59. Consistency Models

* [ ] Strong consistency
* [ ] Eventual consistency
* [ ] Read-your-writes consistency
* [ ] Monotonic reads
* [ ] Session consistency
* [ ] Causal consistency
* [ ] Tunable consistency

## 60. BASE

* Basically Available
* Soft state
* Eventual consistency

BASE is often contrasted with strict ACID behavior, though modern systems may support combinations of both.

---

## 61. Replication

* [ ] Leader-follower replication
* [ ] Multi-leader replication
* [ ] Leaderless replication
* [ ] Synchronous replication
* [ ] Asynchronous replication
* [ ] Replication lag
* [ ] Conflict resolution
* [ ] Read replicas
* [ ] Failover

## 62. Partitioning and Sharding

* [ ] Horizontal partitioning
* [ ] Vertical partitioning
* [ ] Range partitioning
* [ ] Hash partitioning
* [ ] List partitioning
* [ ] Consistent hashing
* [ ] Shard key
* [ ] Hot partitions
* [ ] Resharding
* [ ] Cross-shard queries
* [ ] Distributed joins

The shard key is one of the most important design decisions in a distributed database.

---

# Part 22 — Redis

Redis should usually be your first NoSQL database.

## 63. Redis Fundamentals

* [ ] In-memory data storage
* [ ] Key-value model
* [ ] Key expiration
* [ ] Persistence
* [ ] Eviction
* [ ] Single-threaded execution concepts
* [ ] Redis cluster
* [ ] Replication

## 64. Redis Data Structures

* [ ] String
* [ ] Hash
* [ ] List
* [ ] Set
* [ ] Sorted set
* [ ] Bitmap
* [ ] HyperLogLog
* [ ] Geospatial data
* [ ] Stream

## 65. Redis Use Cases

* Caching
* Session storage
* Rate limiting
* Distributed locks
* Leaderboards
* Counters
* Real-time statistics
* Job queues
* Pub/sub
* Temporary tokens
* OTP storage

## 66. Redis Caching Patterns

* [ ] Cache-aside
* [ ] Read-through
* [ ] Write-through
* [ ] Write-behind
* [ ] Time-to-live
* [ ] Cache invalidation
* [ ] Cache warming

## 67. Redis Problems

* [ ] Cache stampede
* [ ] Cache avalanche
* [ ] Cache penetration
* [ ] Hot keys
* [ ] Large keys
* [ ] Stale data
* [ ] Serialization overhead
* [ ] Distributed-lock mistakes

## 68. Redis with Spring Boot

* [ ] Spring Data Redis
* [ ] `RedisTemplate`
* [ ] String Redis template
* [ ] Redis repositories
* [ ] Spring Cache
* [ ] `@Cacheable`
* [ ] `@CachePut`
* [ ] `@CacheEvict`
* [ ] Session storage
* [ ] Rate-limiter implementation

---

# Part 23 — MongoDB

MongoDB is a document database.

## 69. MongoDB Fundamentals

* [ ] Database
* [ ] Collection
* [ ] Document
* [ ] BSON
* [ ] Object ID
* [ ] Embedded documents
* [ ] Arrays
* [ ] Flexible schemas
* [ ] Schema validation

## 70. MongoDB CRUD

* [ ] Insert document
* [ ] Find document
* [ ] Update document
* [ ] Delete document
* [ ] Projection
* [ ] Sorting
* [ ] Pagination
* [ ] Bulk operations
* [ ] Upsert

## 71. MongoDB Querying

* [ ] Comparison operators
* [ ] Logical operators
* [ ] Array queries
* [ ] Element queries
* [ ] Regular expressions
* [ ] Nested fields
* [ ] Aggregation pipelines

## 72. MongoDB Aggregation

* [ ] `$match`
* [ ] `$project`
* [ ] `$group`
* [ ] `$sort`
* [ ] `$limit`
* [ ] `$skip`
* [ ] `$unwind`
* [ ] `$lookup`
* [ ] `$facet`
* [ ] `$set`
* [ ] `$count`

## 73. MongoDB Data Modeling

Learn:

* Embedding
* Referencing
* One-to-one
* One-to-many
* Many-to-many
* Document growth
* Duplication
* Denormalization
* Read patterns
* Write patterns

Core rule:

```text
Design MongoDB collections around application access patterns,
not around relational normalization rules.
```

## 74. MongoDB Indexing

* [ ] Single-field index
* [ ] Compound index
* [ ] Multikey index
* [ ] Text index
* [ ] Geospatial index
* [ ] TTL index
* [ ] Partial index
* [ ] Sparse index

## 75. MongoDB Distributed Features

* [ ] Replica sets
* [ ] Primary and secondary nodes
* [ ] Read preference
* [ ] Write concern
* [ ] Read concern
* [ ] Sharding
* [ ] Shard keys
* [ ] Transactions
* [ ] Change streams

## 76. MongoDB with Spring Boot

* [ ] Spring Data MongoDB
* [ ] `MongoRepository`
* [ ] `MongoTemplate`
* [ ] Document mapping
* [ ] Query annotations
* [ ] Aggregation
* [ ] Index creation
* [ ] Transactions
* [ ] Auditing

---

# Part 24 — Cassandra and Wide-Column Databases

Learn Cassandra after SQL, Redis and MongoDB.

## 77. Cassandra Fundamentals

* [ ] Distributed wide-column database
* [ ] Cluster
* [ ] Node
* [ ] Data center
* [ ] Keyspace
* [ ] Table
* [ ] Partition key
* [ ] Clustering column
* [ ] Replication factor
* [ ] Consistency level

## 78. Cassandra Data Modeling

Cassandra is query-first.

Learn:

* [ ] Design tables for specific queries
* [ ] Avoid joins
* [ ] Denormalize data
* [ ] Partition-key selection
* [ ] Clustering order
* [ ] Wide partitions
* [ ] Hot partitions
* [ ] Tombstones
* [ ] Time-to-live
* [ ] Materialized views
* [ ] Secondary indexes

## 79. Cassandra Consistency

* [ ] `ONE`
* [ ] `QUORUM`
* [ ] `ALL`
* [ ] Local consistency levels
* [ ] Read repair
* [ ] Hinted handoff
* [ ] Compaction
* [ ] Anti-entropy repair

Use Cassandra for:

* Massive write volume
* Event data
* IoT data
* Large geographically distributed systems
* High availability

Do not use Cassandra for ordinary transactional CRUD applications.

---

# Part 25 — Elasticsearch and OpenSearch

These are search engines, not primary transactional databases.

## 80. Search Fundamentals

* [ ] Inverted index
* [ ] Document
* [ ] Index
* [ ] Field
* [ ] Mapping
* [ ] Analyzer
* [ ] Tokenizer
* [ ] Token filter
* [ ] Relevance scoring

## 81. Search Queries

* [ ] Match query
* [ ] Term query
* [ ] Boolean query
* [ ] Range query
* [ ] Prefix query
* [ ] Wildcard query
* [ ] Phrase query
* [ ] Fuzzy query
* [ ] Aggregations
* [ ] Highlighting
* [ ] Autocomplete

## 82. Search Design

* [ ] Exact fields versus analyzed fields
* [ ] Keyword fields
* [ ] Text fields
* [ ] Synonyms
* [ ] Stemming
* [ ] Typo tolerance
* [ ] Pagination
* [ ] Deep pagination
* [ ] Search after
* [ ] Relevance tuning

## 83. Search Synchronization

Common architecture:

```text
PostgreSQL
    ↓
Outbox or CDC
    ↓
Kafka
    ↓
Elasticsearch/OpenSearch
```

The relational database remains the source of truth. The search engine stores a searchable projection.

---

# Part 26 — Graph Databases

## 84. Graph Fundamentals

* [ ] Node
* [ ] Relationship
* [ ] Property
* [ ] Label
* [ ] Path
* [ ] Traversal
* [ ] Directed relationships
* [ ] Weighted relationships

## 85. Neo4j and Cypher

* [ ] Creating nodes
* [ ] Creating relationships
* [ ] Matching patterns
* [ ] Filtering
* [ ] Variable-length paths
* [ ] Aggregation
* [ ] Shortest paths
* [ ] Graph indexes
* [ ] Constraints

Use graph databases for:

* Social networks
* Recommendation engines
* Fraud detection
* Knowledge graphs
* Network topology
* Identity relationships
* Supply-chain relationships

---

# Part 27 — Time-Series Databases

## 86. Time-Series Concepts

* [ ] Timestamp
* [ ] Metric
* [ ] Measurement
* [ ] Tag
* [ ] Field
* [ ] Retention policy
* [ ] Downsampling
* [ ] Aggregation
* [ ] Time-window queries
* [ ] Compression

Databases:

* InfluxDB
* TimescaleDB
* Prometheus
* ClickHouse for analytical events

Use cases:

* Monitoring
* IoT sensor data
* Financial market data
* Application metrics
* Device telemetry

---

# Part 28 — Analytical Databases

## 87. OLTP versus OLAP

| OLTP                     | OLAP                          |
| ------------------------ | ----------------------------- |
| Operational transactions | Analytical reporting          |
| Frequent small writes    | Large analytical queries      |
| Normalized schema        | Often denormalized            |
| Low latency              | High throughput               |
| PostgreSQL/MySQL         | ClickHouse/Snowflake/BigQuery |

## 88. Data-Warehouse Concepts

* [ ] Fact table
* [ ] Dimension table
* [ ] Star schema
* [ ] Snowflake schema
* [ ] Data mart
* [ ] ETL
* [ ] ELT
* [ ] Slowly changing dimensions
* [ ] Columnar storage
* [ ] Partition pruning

---

# Part 29 — Choosing the Correct Database

## 89. Decision Guide

| Requirement                    | Suitable database                             |
| ------------------------------ | --------------------------------------------- |
| General business application   | PostgreSQL                                    |
| Financial transactions         | PostgreSQL or another relational database     |
| User sessions                  | Redis                                         |
| Application caching            | Redis                                         |
| Flexible JSON documents        | MongoDB                                       |
| Full-text product search       | Elasticsearch/OpenSearch                      |
| Massive distributed writes     | Cassandra/ScyllaDB                            |
| Complex relationship traversal | Neo4j                                         |
| Monitoring metrics             | Prometheus/InfluxDB                           |
| Analytical event queries       | ClickHouse                                    |
| Vector similarity search       | PostgreSQL with pgvector or a vector database |

## 90. Questions to Ask

Before choosing a database, ask:

1. What are the main read queries?
2. What are the main write operations?
3. Are transactions required?
4. How important is strong consistency?
5. How much data will exist?
6. How quickly will data grow?
7. Will the system require joins?
8. Does the schema change frequently?
9. Is horizontal scaling required?
10. What availability level is required?
11. What latency is acceptable?
12. What operational expertise does the team have?

---

# Part 30 — Polyglot Persistence

Large applications may use multiple databases.

Example e-commerce platform:

```text
PostgreSQL
- Users
- Orders
- Payments
- Inventory

Redis
- Cache
- Sessions
- Rate limiting
- Cart expiration

Elasticsearch
- Product search
- Filtering
- Autocomplete

Kafka
- Domain events

Object storage
- Product images
- Invoices
```

Using multiple databases adds complexity. Start with PostgreSQL and add another system only when a clear requirement exists.

---

# Part 31 — Common Database Mistakes

Avoid these mistakes:

* Using NoSQL because it appears more modern
* Using MongoDB for strongly relational financial data
* Using Redis as the permanent source of truth
* Using Elasticsearch as the primary database
* Adding indexes without measuring
* Having no indexes on foreign keys
* Using `SELECT *` everywhere
* Ignoring transaction boundaries
* Making transactions too long
* Storing money in floating-point columns
* Storing passwords in plain text
* Creating one giant JSON column for everything
* Ignoring backup restoration
* Performing offset pagination over extremely large tables
* Fetching millions of rows into the application
* Allowing Hibernate to generate production schemas automatically
* Ignoring the SQL generated by an ORM
* Creating microservices with a shared database
* Using distributed databases without operational expertise

---

# Recommended Learning Path

## Stage 1 — Beginner

Learn:

* Database concepts
* Tables and relationships
* Basic SQL
* CRUD
* Filtering
* Sorting
* Aggregation
* Joins

Build:

* Student-management database

---

## Stage 2 — Intermediate SQL

Learn:

* Subqueries
* CTEs
* Window functions
* Constraints
* Views
* Normalization
* Indexes
* Transactions

Build:

* Library-management database
* E-commerce database

---

## Stage 3 — PostgreSQL

Learn:

* PostgreSQL data types
* JSONB
* UUID
* Sequences
* Explain plans
* Advanced indexing
* Roles
* Backup and restoration

Build:

* Banking or inventory backend

---

## Stage 4 — Spring Integration

Learn:

* JDBC
* Spring JDBC
* JPA
* Hibernate
* Spring Data JPA
* Transactions
* Flyway
* Testcontainers

Build:

* Production-grade Spring Boot REST API

---

## Stage 5 — Redis

Learn:

* Cache
* Sessions
* Rate limiting
* Expiration
* Sorted sets
* Distributed-lock limitations

Add Redis to your existing Spring Boot project.

---

## Stage 6 — MongoDB

Learn:

* Document modeling
* Aggregation
* Indexes
* Replication
* Sharding

Build:

* Content-management system
* Product catalog
* Activity-feed service

---

## Stage 7 — Specialized Databases

Choose based on purpose:

* Elasticsearch for search
* Cassandra for large distributed writes
* Neo4j for graphs
* InfluxDB for time-series
* ClickHouse for analytics

---

# Recommended Database Projects

## Project 1 — Student Database

Include:

* Students
* Courses
* Enrollments
* Teachers
* Results
* Joins
* Aggregations
* Constraints

## Project 2 — Library Management System

Include:

* Books
* Authors
* Members
* Borrowing
* Returns
* Fines
* Transactions
* Indexes

## Project 3 — E-Commerce Database

Include:

* Users
* Products
* Categories
* Inventory
* Cart
* Orders
* Order items
* Payments
* Coupons
* Reviews

## Project 4 — Banking System

Include:

* Customers
* Accounts
* Transactions
* Transfers
* Audit logs
* Isolation levels
* Row locking
* Idempotency

## Project 5 — Hybrid Database System

Use:

* PostgreSQL for core data
* Redis for cache and sessions
* Elasticsearch for search
* Kafka for events

## Project 6 — AI Document System

Use:

* PostgreSQL for users and metadata
* Object storage for files
* PGvector for embeddings
* Redis for temporary chat state
* Elasticsearch for keyword search

---

# What a Java Backend Developer Must Master

## Essential SQL Topics

1. CRUD
2. Joins
3. Aggregations
4. Subqueries
5. CTEs
6. Window functions
7. Constraints
8. Relationships
9. Normalization
10. Indexes
11. Transactions
12. Isolation levels
13. Locking
14. Query execution plans
15. Pagination
16. Database migrations
17. Backup concepts
18. SQL injection prevention

## Essential NoSQL Topics

1. NoSQL data models
2. CAP theorem
3. Eventual consistency
4. Replication
5. Partitioning
6. Redis
7. Caching strategies
8. MongoDB data modeling
9. Search engines
10. Selecting a database by use case

---

# Final Learning Priority

```text
1. PostgreSQL
2. SQL and relational modeling
3. Transactions and indexing
4. JDBC and Spring Data JPA
5. Flyway and Testcontainers
6. Redis
7. MongoDB
8. Elasticsearch/OpenSearch
9. Distributed database concepts
10. Cassandra, Neo4j or time-series databases when required
```

The most important principle is:

> **Use a relational database by default. Choose NoSQL only when its data model or scaling characteristics solve a real requirement.**

A skilled backend engineer does not merely know SQL syntax. They understand **data integrity, transactions, query performance, indexing, consistency, failure recovery and how database choices affect the entire architecture**. 🧠🗄️
