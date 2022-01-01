function getRizalQuote() {
    buttonStateVar = 1;
    buttonState();
    document.getElementById('quote_img').src='img/rizal.jpg';
}
function getSocQuote() {
    buttonStateVar = 2;
    buttonState();
    document.getElementById('quote_img').src='img/socrates.jpg';
}
function getSunQuote() {
    buttonStateVar = 3;
    buttonState();
    document.getElementById('quote_img').src='img/sun.jpg';
}
function getNietQuote() {
    buttonStateVar = 4;
    buttonState();
    document.getElementById('quote_img').src='img/nietzsche.jpg';
}
function getMartinQuote() {
    buttonStateVar = 5;
    buttonState();
    document.getElementById('quote_img').src='img/martin.jpg';
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
            quoteText.innerHTML = rizal[quoteState];
            break;
        case 2:
            quoteText.innerHTML = socrates[quoteState];
            break;
        case 3:
            quoteText.innerHTML = sun_tzu[quoteState];
            break;
        case 4:
            quoteText.innerHTML = nietzsche[quoteState];
            break;
        case 5:
            quoteText.innerHTML = martin[quoteState];
            break;
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

const rizal = ['The youth is the hope of our future.',
'Virtue lies in the middle ground.',
'There can be no tyrants where there are no slaves.',
'Each one writes history according to his convenience.',
'He who would love much has also much to suffer.']

const socrates = ['The only true wisdom is in knowing you know nothing.',
'The unexamined life is not worth living.',
'Wonder is the beginning of wisdom.',
'To find yourself, think for yourself.',
'Let him who would move the world first move himself.']

const sun_tzu = ['In the midst of chaos, there is also opportunity.',
'The greatest victory is that which requires no battle.',
'Quickness is the essence of the war.',
'Who wishes to fight must first count the cost.',
'The wise warrior avoids the battle.']

const nietzsche = ['Without music, life would be a mistake.',
'That which does not kill us makes us stronger.',
'You must have chaos within you to give birth to a dancing star.',
'In heaven, all the interesting people are missing.',
'There are no facts, only interpretations']

const martin = ['We must accept finite disappointment, but never lose infinite hope.',
'Forgiveness is not an occasional act. It is a permanent attitude.',
'Never succumb to the temptation of bitterness.',
'Let no man pull you so low as to hate him.',
'The time is always right to do what is right.']