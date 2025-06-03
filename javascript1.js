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