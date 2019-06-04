let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];
library.sort((a, b) => b.libraryID - a.libraryID);
let sortedKeys = library.map(object => Object.keys(object).sort())[0];

let arr = [];
library.forEach(object => {
  let newObj = {};
  sortedKeys.forEach(key => {
    if (key == "author") {
      newObj[key] = object["title"];
    } else if (key == "title") {
      newObj[key] = object["author"];
    } else {
      newObj[key] = object[key];
    }
  });
  arr.push(newObj);
});

console.log(arr);
