SQL non-SQL

SQL structured query language
关系型数据库

MySQL
Postgres QL
SQLite

no SQL
非关系型数据库
not only SQL

document-oriented => mongodb, dynamodb, firebase
key-value => redis
graph-oriented => neo4j
column-family => cassandra

humongous
mongo

BSON -> Binary JSON

[
{
_id: xxx1,
name: yyy,
},
{
_id: xxx2,
username: yyy
}
]

collection

document

Student Course
S1,S2 C1,C2

1 - 1
S1 -> C1
S2 -> C2
C1 -> S1
C2 -> S2

1 - M
S1 -> C1
S2 -> C1
C1 -> S1,S2
C2 ->

M - N
S1 -> C1,C2
S2 -> C1,C2
C1 -> S1,S2
C2 -> S1,S2

Student collection
[
{
\_id: "S1",
name: "student1",
courses: [
{
\_id: "C1",
code: "Course11"
<!-- student: ["S1","S2"] -->
},
{
\_id: "C2",
code: "Course2"
},
]
},
{
\_id: "S2",
name: "student2",
courses: [
{
\_id: "C1",
code: "Course11"
<!-- student: ["S1","S2"] -->
},
{
\_id: "C2",
code: "Course2"
},
]
}
]

parent referencing
Student
[
{
\_id: "S1",
name: "student1",
courses: [
{
\_id: "C1",
teachers: ["T1","T2"],
code: "Course1"
},
{
\_id: "C2",
code: "Course2"
},
]
},
{
\_id: "S2",
name: "student2",
courses: [
"C1","C2"
]
}
]

Course
[
{
\_id: "C1",
code: "Course1",
teachers: ["T1","T2"],
students: ["S1", "S2"]
},
{
\_id: "C2",
code: "Course2"
},
]
