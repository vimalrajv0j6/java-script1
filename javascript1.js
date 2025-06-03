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

