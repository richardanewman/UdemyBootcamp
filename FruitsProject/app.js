//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid"
});

//fruit.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit ({
  name: "Orange",
  rating: 4,
  review: "Too sour for me"
});

const banana = new Fruit ({
  name: "Banana",
  rating: 3,
  review: "Weird texture"
});

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit."
});

const dragonFruit = new Fruit ({
  name: "Dragon Fruit",
  rating: 9,
  review: "Not too shabby!"
});

// Fruit.insertMany([kiwi, orange, banana, pineapple, dragonFruit], function(err){
//   if (err){
//     console.log(err);
//   }else {
//     console.log("success");
//   }
// });


// Fruit.deleteOne({name: "Dragon Fruit"}, function(err){
//   if (err){
//     console.log(err);
//   }else {
//     console.log("success");
//   }
// });



 // const person = new Person ({
 //   name: "Amy",
 //   age: 12,
 //  favoriteFruit: pineapple
 // });

//person.save();

Person.updateOne({name: "John"}, {favoriteFruit: kiwi}, function(err){
  if (err){
    console.log(err);
  }else {
    console.log("Successfully updated John's record.");
  }
});




// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved fruits to fruitsDB!");
//   }
// });

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    fruits.forEach(function(fruit){
      console.log(fruit.name);

      mongoose.connection.close();
    });
  }
});
