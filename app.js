console.log("Hello Branice");

setTimeout(function () {
    console.log("3sec have passed");
    
}, 3000);

var time = 0;

setInterval(function() {
    time += 2;//Tis adds time by 1 after given interval 
    console.log(time + 'seconds have passed');
    
}, 2000);//This the interval time 


//Normal function
function sayHi() {
    console.log('Hi');
    
}
sayHi();

//FUnction expression

var sayBye = function() {
    console.log("Bye");
    
};
sayBye();