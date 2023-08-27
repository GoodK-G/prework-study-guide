





//the topics variable contains the string above that includes everything that I have been learning so far.
// All strings are surrounded by quotation marks. and each line ends with a semicolin to signal to end the line there.
//console.log(topics);

//var topic = "JavaScript";

// === is a strict equality operator, this checks to see if two values are equal and returns a Boolean result (True or False)

//adding an array using a for loop
// strings need to be contained within quotation marks when in a loop.
//Arrays are useful tools for storing multiple items with different data types in a single variable, but not all arrays must have multiple data types. 
//The array that we will add to our project only contains strings.

/*var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }
*/

/*var topics = ['HTML', 'CSS', 'Git','JavaScript'];
for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

function helloWorld() {
    console.log("Hello, world, I am a function!")
}*/
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);

    }
}

function selectTopic(){
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");   
    } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    }else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();