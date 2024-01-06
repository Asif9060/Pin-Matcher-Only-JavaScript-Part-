var generateBtn = document.getElementById("generate").addEventListener("click", function(){
var capture = document.getElementById("displayPin").value = (999 + Math.random() * 9000);
var randint = Math.floor(capture);
var result = document.getElementById("displayPin").value = randint;
});

var submitBtn = document.getElementById("submit").addEventListener("click", function(){
    var result = document.getElementById("displayPin").value;
    var type = document.getElementById("display").value;

    var count = document.getElementById("count").innerText;
    var intCount = parseInt(count);
    var resultCount = intCount - 1;

    if (result == type) {
document.getElementById("unMatched").style.display = "none";
        document.getElementById("Matched").style.display = "block";
        
        
    }
    else if(result != type && resultCount >= 0) {
        document.getElementById("count").innerText = resultCount;
        document.getElementById("Matched").style.display = "none";
        document.getElementById("unMatched").style.display = "block";
        
    }

    if (resultCount < 0) {
        alert("No more tries left");
    }


});
