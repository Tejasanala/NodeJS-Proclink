pk,sk ----> helps for indexing both together
by default in sql what is order --> primary key
but in dynamo db we have 2 keys pk (primary key)and sk(some other key can be used for sorting purpose)
pk+sk----> primary key
sk-->any column(key)
entitity is schema ( optional but good practice to keep )
attributes are keys - cloumn names

two types to retrive the data

- query--->good--- if indexed then use query if not use scan
- scan --->bad(table scanning)---
  so this is reason we have multiple indexes

  gsi- globals secondary index (non clustered index 1)
  when i do index i need to do pk and sk

  # movies creating table in dynamo db

  - create test.js file-->npm i aws-sdk electrondb

  1. install as a dependency in your project
     > npm install electrodb --save
