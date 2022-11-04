




let myArray6 = new Array(4); 
console.log(myArray1.length); 

let myArray4 = Array(4); 
console.log(myArray2.length); 

let myArray5 = [];
myArray3.length = 4
console.log(myArray3.length); 

let myMap1 = new Map();
myMap1.set("one", 1);
myMap1.set("two", 2);
myMap1.set("three", "three");
console.log(myMap1);

console.log(myMap.get("two")); 
console.log(myMap.has("two")); 
console.log(myMap.has("five")) 
myMap.delete("two")
console.log(myMap);  

myMap.delete("five")
console.log(myMap); 

let myArray7 = new Array(10)

let Array3 = [10]

let myArray1 = [x1, x2, ... xN];
let myArray2 = new Array(x1, x2, ... xN);
let myArray3 = Array(x1, x2, ... xN);

let Array = ["one", 1, "two", 2];

let secondArray = ["one", 1, "two", 2];

let mythirdArray = ["one", 1, "two", 2];
console.log(myArray);

myArray.length = 5;
console.log(myArray);

myArray.length = 1;
console.log(myArray);

["one", 1, "two", 2]
["one", 1, "two", 2, undefined]
["one"]







let myArray = new Array(4)

myArray[0] = "one"
myArray[1] = "two"
myArray[2] = "three"
myArray[3] = "four"

console.log(myArray)




['one', 'two', 'three', 'four']

myArray1[4] = "five"
myArray1[5] = "six"

console.log(myArray) 
console.log('Traditional for loop:')
for (let i = 0; i < myArray1.length ; i++) {
	console.log(myArray1[i]);
}

console.log('Functional forEach loop:')
myArray1.forEach( function (element){ console.log(element);});
let myArray = [1,2,3];
myArray.push(4);
console.log(myArray);
let myArray = [1,2,3,4];
myArray.pop();
console.log(myArray); 
let myArray = [4,5,6];
let finalArray1 = myArray1.concat(myArray);
console.log(finalArray1);
    
// Concating 3 arrayslet 
myArray3 = [7,8,9];
let finalArray2 = myArray1.concat(myArray2, myArray3);
console.log(finalArray2);
let myArray = ["Earth", "Wind", "Fire"];
let arrayString = myArray.join(",");
console.log(arrayString);

console.log(arrayString + "- September"); 
let myArray = [1,2,3];
let reversed = myArray.reverse();
console.log(reversed); // [3,2,1]
let myArray = [1,2,3,4,5,6];
myArray = myArray.slice(3, 5);
console.log(myArray); // [4,5]
let tArray = new Int8Array(8);
tArray[0] = 10;
console.log(tArray);
Int8Array [ 10, 0, 0, 0, 0, 0, 0, 0 ]





myMap.clear();
console.log(myMap); 

let myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
console.log(myMap.size); 
// Output: 2
for (let [k, v] of myMap){	
  console.log(k + " written in number is " + v)
}

//sets

let mySet1 = new Set();
mySet1.add(1);
mySet1.add("one");
mySet1.add("one");
mySet1.add("two");
mySet1.add(1);
console.log(mySet1);

