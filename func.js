const checkboxes = document.getElementsByClassName("checkbox");
function swap(toSwap){  //makes sure only one of the checkboxes are checked at a time
    if(checkboxes[toSwap].checked){
        checkboxes[toSwap].checked = false;
    }
}

function countLetters (text){
    let letters = new Array;
    let lenght = text.length;
    for(i = 0; i < 26; i++){ //creates an Array with 26 items representing the number of each letter of the alphabet
        letters.push(0);
    }

    if(checkboxes[0].checked){  //if only capatalized is checked
        for(j = 0; j < lenght; j++){
            letters[text.charCodeAt(j) - 65]++;
        }
    }
    else if(checkboxes[1].checked){  //if only non-capatalized is checked
        for(j = 0; j < lenght; j++){
            letters[text.charCodeAt(j) - 97]++;
        }
    }
    else{
        for(j = 0; j < lenght; j++){    //if neither checkboxes are checked
            let character = text.charCodeAt(j);
            if(character > 64 && character < 123){  //check if it's actually a letter
                letters[(character % 32) - 1]++;
            }
        }
    }
    // console.log(letters);
    return letters;
}

function update(){
    let input = document.getElementById("input").value;
    let count = countLetters(input);
    data[0] = {
        x:xArray,
        y:count,
        type:"bar"};
    Plotly.redraw("diagram", data, layout);
}

const xArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var yArray = new Array(26);
var data = [{
x:xArray,
y:yArray,
type:"bar",
}];

const layout = {title:"Letters", yaxis: {rangemode: 'nonnegative', autorange: true, showline: true}};

Plotly.newPlot("diagram", data, layout);
