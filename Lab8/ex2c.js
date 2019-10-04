var age = 19;
var counter = 0 //This will count my age
// Repeat until counter reaches age
while(counter < age) {
    counter++;
    if(counter > age/2 && counter < (3/4)*age) {
        console.log("Don’t ask how old I am!");
        process.exit(0)
    }
    console.log('counter: ' + counter);

}