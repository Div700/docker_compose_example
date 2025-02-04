db = db.getSiblingDB('mydatabase');

db.datas.insertMany([
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 28, city: "Chicago" },
  { name: "David", age: 35, city: "San Francisco" },
  { name: "Emma", age: 22, city: "Miami" }
]);
