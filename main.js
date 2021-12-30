function getNikadoQuote() {
    buttonStateVar = 1;
    buttonState();
}
function getDwayneQuote() {
    buttonStateVar = 2;
    buttonState();
}
function getDouYinQuote() {
    buttonStateVar = 3;
    buttonState();
}
function getHenryQuote() {
    buttonStateVar = 4;
    buttonState();
}
function getJovitQuote() {
    buttonStateVar = 5;
    buttonState();
}
function getQuote() {
    quoteState += 1;
    
    if(quoteState==5) {
        quoteState=0;
    }

    switch(buttonStateVar) {
        default:
            break;
        case 1:
            quoteText.innerHTML = nikadoQuotes[quoteState];
    }
}
function buttonState() {
    switch(buttonStateVar) {
        case 0:
            button_getQuote.disabled = true;
            break;
        default:
            button_getQuote.disabled = false;
            break;
    }
}

let button_getQuote = document.getElementById('quoteButton');
let quoteText = document.getElementById('quote');

let buttonStateVar = 0;
let quoteState = -1;
buttonState();

let nikadoQuotes = ['Its just water weight.',
'UWAAAAAAGH',
'NGYAAAAAGH',
'WAAAAHHHHH',
'*Drops Food*']

let dwayneQuotes = ['Its just water weight.',
'UWAAAAAAGH',
'NGYAAAAAGH',
'WAAAAHHHHH',
'*Drops Food*']

let douyinQuotes = ['Its just water weight.',
'UWAAAAAAGH',
'NGYAAAAAGH',
'WAAAAHHHHH',
'*Drops Food*']

let henryQuotes = ['Its just water weight.',
'UWAAAAAAGH',
'NGYAAAAAGH',
'WAAAAHHHHH',
'*Drops Food*']

let jovitQuotes = ['Its just water weight.',
'UWAAAAAAGH',
'NGYAAAAAGH',
'WAAAAHHHHH',
'*Drops Food*']