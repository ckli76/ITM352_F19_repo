var age = 19;
var counter = 0 //This will count my age
// Repeat until counter reaches age
while(counter <= age) {
    if(counter > age/2) {
        console.log("I'm old!")
        break;
    }
    console.log('counter: ' + counter);
    counter++;
}