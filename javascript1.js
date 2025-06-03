//add two number
var a = 5;
var b = 10;
function add(){
    console.log(a+b);
}
add();

//print favourite
var factor = "dhanush";
var fplayer = "dhoni";
var fmovie = "puthuppettai"

function favourite() {
    console.log("Favourite Actor :" +factor);
    console.log("Favourite Player :"+fplayer);
    console.log("Favourite Movie :"+fmovie);
}
favourite();

//add parameter using function
function add(a,b){
    console.log(a+b);
}
add(10,20);


//two find area

function area(length,breadth){
    console.log(length*breadth);
}
area(10,10);


//return type

function add(a,b){
    return(a+b);
}

var a=add(10,20);
console.log(a);

//return type2

function sub(a,b){
    return(a-b);
}
var b = sub(10,5);
console.log(b);


//condition statement

if(true){
    console.log("its true");
}

else{
    console.log("its faules");
}

//condition statement practice 1

var hw = true ;
if(hw){
    console.log("great job!");
}
else{
    console.log("finish your homework before playing");
}


//logical AND

var a = 10;
var b = 20;

if(a && b == 10){
    console.log(true);
}
else{
    console.log(false);
}

//logical OR

var a = 10;
var b = 20;

if(a || b == 10){
    console.log(true);
}
else{
    console.log(false);
}


//logical NOT

if(!true){
    console.log(true);
}
else{
    console.log(false);
}

//condition statemenmt trafic light example

var color = "red";
if(color== "red"){
    console.log("stop");
}
else if(color == "yellow"){
    console.log("get ready");
}
else{
    console.log("go");
}

//condition statement season of the year

var season = "winter";
if(season=="spring"){
   console.log("enjoying the blooming flowers");
}
else if(season=="summer"){
   console.log("have fun in the sun");
}
else if(season=="autumn"){
   console.log("admire the colorful leaves");
}
else{
   console.log("bundle up and stay warm");
}

//if else practice

var score =50;
if(score<=50){
    console.log("you need to improve")
}
else if(score>50 && score<=70){
    console.log("good job");
}
else{
    console.log("great");
}


//to find odd or even

var a = 10;
if(a%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}

//to find vowel or constant 

var letter = "v";
if(letter=="a" && letter=="e" && letter=="i" && letter=="o" && letter=="u"){
    console.log("it is vowel letter");
}
else{
    console.log("it is not a vowel letter");
}