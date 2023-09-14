
// Chapter: ARRAYS

// Question No. 1
var studentNames =[]; 


// Question No. 2
var studentNames = new Array();


// Question No. 3
var arr_string =["karachi","Lahore","abc"];


// Question No. 4
var arr_number =[1, 2, 3, 123, 4, 25,];


// Question No. 5
var arr_boolean =[true, false];


// Question No. 6
var arr_mixed =["karachi", 123, true, "Lahore", 789, false];


// Question No. 7

var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1> Qualifications: </h1>");
document.write("1) ",arr[0], "<br>");
document.write("2) ",arr[1], "<br>");
document.write("3) ",arr[2], "<br>");
document.write("4) ",arr[3], "<br>");
document.write("5) ",arr[4], "<br>");
document.write("6) ",arr[5], "<br>");
document.write("7) ",arr[6], "<br>");
document.write("8) ",arr[7], "<br><br>");


// Question No. 8

var student_Names = ["Hassan", "Waseem", "Ubaid"];
var studentScore = [480, 410, 300];

var percentage = studentScore[0] / 500 *100;
var percentage1 = studentScore[1] / 500 *100;
var percentage2 = studentScore[2] / 500 *100;

document.write("Score of "+ student_Names[0]+ " is "+studentScore[0]+ ". Percentage: "+percentage+ "%<br>");
document.write("Score of "+ student_Names[1]+ " is "+studentScore[1]+ ". Percentage: "+percentage1+ "%<br>");
document.write("Score of "+ student_Names[2]+ " is "+studentScore[2]+ ". Percentage: "+percentage2+ "%<br>");



// Question No. 9

var color =["Green", "Blue", "Red", "Yellow",];
console.log("Default: ", color);


//a
var addBeginning = prompt("Enter a color to add to the beginning:");
color.unshift(addBeginning);
console.log(color);


//b
var addEnd = prompt("Enter a color to add to the end:");
color.push(addEnd);
console.log(color);



//c
var addOneBegin = prompt("Enter a first color to add to the beginning:");
var addTwoBegin = prompt("Enter a second color to add to the beginning:");
color.unshift(addOneBegin,addTwoBegin);
console.log(color);


//d
color.shift();
console.log(color);


//e
color.pop();
console.log(color);


//f
var positionColor = +prompt("Enter a Index Number");
var colorName = prompt("Enter a Color Name ");

color.splice(positionColor, 0, colorName);
console.log(color);



//g
var positionColor2 = +prompt("Enter a Index Number");
var numColorsDelete = prompt("Enter how many colors to delete ");

color.splice(positionColor2, numColorsDelete);
console.log(color);



// Question No. 10

var ScoreOfStudent = [320, 230, 480, 120, 500] ;

ScoreOfStudent.sort();
console.log(ScoreOfStudent);



// Question No. 11

var city = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Lahore", "Multan"];
console.log(city);
var slice = city.slice(1,4);
console.log(slice);



// Question No. 12

var arrSentence = ['This ' ,' is ',  ,' my ' ,' cat'];
document.write("<h1>Array</h1>");
document.write(arrSentence);

var arrString = arrSentence.join('');
document.write("<h1>String</h1>");
document.write(arrString);



// Question No. 13

var equipment = [];
equipment.push("Keyboard");
equipment.push("Mouse");
equipment.push("Printer");
equipment.push("Monitor");

document.write("<br><br><br> Devices: <br>" + equipment);


var firstEquip = equipment.shift();
var secondEquip = equipment.shift();
var thirdEquip = equipment.shift();
var fourthEquip = equipment.shift();

document.write("<br><br><br>Out:<br>" + firstEquip + "<br>Out:<br>" + secondEquip +
"<br>Out:<br>" + thirdEquip + "<br>Out:<br>" + fourthEquip);



             
// Question No. 14

var equipment = [];
equipment.push("Keyboard");
equipment.push("Mouse");
equipment.push("Printer");
equipment.push("Monitor");

document.write("<br><br><br> Devices: <br>" + equipment);


var firstEquip = equipment.pop();
var secondEquip = equipment.pop();
var thirdEquip = equipment.pop();
var fourthEquip = equipment.pop();

document.write("<br><br><br>Out:<br>" + firstEquip + "<br>Out:<br>" + secondEquip +
             "<br>Out:<br>" + thirdEquip + "<br>Out:<br>" + fourthEquip);




// Question No. 15

var manufacturer = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

document.write("<br><br><br> <select>"+
"<option>"+ manufacturer[0] +"</option>"+
"<option>"+ manufacturer[1] +"</option>"+
"<option>"+ manufacturer[2] +"</option>"+
"<option>"+ manufacturer[3] +"</option>"+
"<option>"+ manufacturer[4] +"</option>"+
"<option>"+ manufacturer[5] +"</option>"+
"</select>")





// Chapter: ARRAYS Completed
