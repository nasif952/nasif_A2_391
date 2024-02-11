var quotes = ["Great actions are not always true sons of great and mighty resolutions.", "Happy is the bride that the sun shines on.", "It is possible to have too much of a good thing.", "Lightning never strikes the same place twice."];
var author = ["Samuel Butler (1612-1680)", "Robert Herrick (1591-1674)", "Aesop (c.620-560 BC)", "P. H. Myers (1857)"];

function fetchQuote(q, a) {
    
    
    var x = Math.floor(Math.random() * q.length);



    document.getElementById("text").innerHTML = '" ' + q[x] + ' "';
    document.getElementById("author").innerHTML = "- " + a[x];
}



fetchQuote(quotes, author);

function button1() {
    document.getElementById("quotes").style.backgroundColor = "#40A2E3";
    document.getElementById("quotes").style.borderColor = "#262626";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    
    
}
function button2() {
    document.getElementById("quotes").style.backgroundColor = "#65B741";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    document.getElementById("quotes").style.borderColor = "#262626";
}
function button3() {
    document.getElementById("quotes").style.backgroundColor = "#820300";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
}
function button4() {
    document.getElementById("quotes").style.backgroundColor = "#FFFB73";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
}



function convert(){
    var input = document.getElementById("converter_input").value;
    
    var unit = document.getElementById("converter_unit").value;

   if(unit=="kgtopounds"){
           var ans=input*2.2046;
           document.getElementById("converter-result").innerHTML = ans +  " LB";
        }
        else{
            var ans = input*0.45359;
            document.getElementById("converter-result").innerHTML = ans + " KG";
            }
    }
    



function calculator(){

  var a = document.getElementById("calulcator_input").value;

  var b=a.split(",").map(Number);   //   it creates array 

  var length=b.length;

  var reverse=b.reverse(); 
//   console.log(reverse)
  document.getElementById("reverse").innerHTML=reverse;
  b.sort(function(a, b) {
    return a - b;
});
  document.getElementById("max").innerHTML=b[length-1];//sorting >>then last element is max 
  document.getElementById("min").innerHTML=b[0];//first elemnt is the min 
  var sum=0;
  for (var i =0 ; i <=length - 1; i++) {
    sum+=b[i];
  };
  document.getElementById("sum").innerHTML=sum;
  document.getElementById("avg").innerHTML=sum/length;
}


////////////////////////////////////////////////

function clearAll() {
    document.getElementById("magic_input").value = '';
  }
  
  function capitalize() {
    var resU = document.getElementById("magic_input").value.toUpperCase();
    var resL = document.getElementById("magic_input").value.toLowerCase();
    if (document.getElementById("caps").value == "OFF") {
        document.getElementById("caps").value = "ON";
        document.getElementById("magic_input").value = resU;
    }
  
    else if (document.getElementById("caps").value == "ON") {
        document.getElementById("caps").value = "OFF";
        document.getElementById("magic_input").value = resL;
    }
  
  }
 
  function sortLines() {
    var allLines = document.getElementById("magic_input").value;
    allLinesArr = allLines.split('\n');
    allLinesArr.sort();
    document.getElementById("magic_input").value = allLinesArr.join("\n");
  
  }
  


  function reverseLines() {
    var magicinput = document.getElementById("magic_input").value;
    var magicArray = magicinput.split("\n");
    
    var newmagicinput = "";
    magicArray.reverse();
    for (var i = 0; i < magicArray.length; i++) {
        if(i == magicArray.length-1){
            newmagicinput += magicArray[i];
        }
        else{
            newmagicinput += magicArray[i]+"\n";
        }
    }
    document.getElementById("magic_input").value = newmagicinput;
    console.log("Reversed Lines!")
}
  // allLinesArr.reverse();
  
  function stripBlank() {
    var allLines = document.getElementById("magic_input").value;
    allLinesArr = allLines.split("\n");
    var arr = allLinesArr.filter(Boolean);
    array = arr.map(el => el.trim());
    document.getElementById("magic_input").value = array.join("\r\n");
  
  }
  
  function addLineNumbers() {
  
    var allLines = document.getElementById("magic_input").value;
    allLinesArr = allLines.split('\n');
    for (var j = 0; j < allLinesArr.length; j++) {
        allLinesArr[j] = j + 1 + ". " + allLinesArr[j];
    }
    document.getElementById("magic_input").value = allLinesArr.join("\r\n");
  
  }
  
  function shuffle() {
    var allLines = document.getElementById("magic_input").value;
    allLinesArr = allLines.split('\n');
    for (let i = allLinesArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [allLinesArr[i], allLinesArr[j]] = [allLinesArr[j], allLinesArr[i]];
    }
    document.getElementById("magic_input").value = allLinesArr.join("\r\n");
  }