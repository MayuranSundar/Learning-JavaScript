// Practice 1
function fourtyTwo(){
    console.log(42);
}
fourtyTwo();

// Practice 2
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLaps(){
    console.log(lap1+lap2+lap3);
}
totalLaps()

// Practice 3 
let lapCounted = 0;

function newLap(){
    lapCounted ++;
}

newLap();
newLap();
newLap();
console.log(lapCounted);

// Practice 4
let user = "John Doe"
let message = "you have three new notifications";
let msgToUser = user + ", " + message + "!";
console.log(msgToUser);

// Practice 5
let name = "Alpha";
let greet = "Hi, my name is ";
let fullGreet = greet + name;
console.log(fullGreet);

// Practice 6
let fName = "John";
let lName = "Doe";
let fullName = fName + " " + lName;
console.log(fullName);

// Practice 7
let points = 3;
function add3Points(){
    points += 3;
}
function remove1Point(){
    points --;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(points);

// Practice 8 - Arrays
let nums = [7,5]
nums.push(3)
console.log(nums)
nums.pop()
console.log(nums)

// Practice 9 Loops
for(let i = 0; i<nums.length; i++){
    console.log(nums[i]);
}

// Practice 9 Objects
let course = {
    name: "JS for Noobs",
    lessons: 16,
    creator: "John Doe",
    length: 60,
    level: 2,
    isFree : true,
    tags : ["html", "css", "js"]

}

console.log(course.name, course.tags, course.creator)

// Practice 10 JSON Stringify
let li = `[1,2,3]`
li = JSON.parse(li)
console.log(li, typeof li)
li.push(4)
li = JSON.stringify(li)
console.log(li, typeof li)

// Practice 11 Array, functions and loops
let arr = ["one", "two", "three"]

function arrayPrinter(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index])  
    }
}
arrayPrinter(arr)