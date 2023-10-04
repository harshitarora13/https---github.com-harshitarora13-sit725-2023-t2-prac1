//fx to change the text
function changeText(){
    var textsArray = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"]
    var number = getRandomNumberBetween(0,textsArray.length - 1);
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}

//generate random number with min and max
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//To increment a value on click
var button = document.getElementById("clickme"),
count = 0;
button.onclick = function() {
count += 1;
button.innerHTML = "Click me: " + count;
};



