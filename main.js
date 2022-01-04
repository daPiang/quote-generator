function getRizalQuote() {
    if(buttonStateVar!=1){
        quoteText.innerHTML = '';
    }

    buttonStateVar = 1;
    quoteState=0;
    buttonState();
    document.getElementById('person').src='img/img/rizal.png';
    document.getElementById('bg').src='img/img/bg_rizal.jpg';
    quoteText.style.color = 'yellow';
    quoteName.innerHTML = 'Jose Rizal';
    quoteName.style.fontSize = '1.7rem';
}
function getSocQuote() {
    if(buttonStateVar!=2){
        quoteText.innerHTML = '';
    }
    
    buttonStateVar = 2;
    quoteState=0;
    buttonState();
    document.getElementById('person').src='img/img/socrates.png';
    document.getElementById('bg').src='img/img/bg_scorates.jpg';
    quoteText.style.color = 'black';
    quoteName.innerHTML = 'Socrates';
    quoteName.style.fontSize = '1.8rem';
}
function getSunQuote() {
    if(buttonStateVar!=3){
        quoteText.innerHTML = '';
    }

    buttonStateVar = 3;
    quoteState=0;
    buttonState();
    document.getElementById('person').src='img/img/sun_tzu.png';
    document.getElementById('bg').src='img/img/bg_sun_tzu.jpg';
    quoteText.style.color = 'white';
    quoteName.innerHTML = 'Sun Tzu';
    quoteName.style.fontSize = '1.8rem';
}
function getNietQuote() {
    if(buttonStateVar!=4){
        quoteText.innerHTML = '';
    }

    buttonStateVar = 4;
    quoteState=0;
    buttonState();
    document.getElementById('person').src='img/img/nietzsche.png';
    document.getElementById('bg').src='img/img/bg_nietzsche.jpg';
    quoteText.style.color = 'yellow';
    quoteName.innerHTML = 'Nietzsche';
    quoteName.style.fontSize = '1.7rem';
}
function getMartinQuote() {
    if(buttonStateVar!=5){
        quoteText.innerHTML = '';
    }

    buttonStateVar = 5;
    quoteState=0;
    buttonState();
    document.getElementById('person').src='img/img/martin.png';
    document.getElementById('bg').src='img/img/bg_martin.jpg';
    quoteText.style.color = 'white';
    quoteName.innerHTML = 'Martin Luther<br>King Jr.';
    quoteName.style.fontSize = '1.1rem';
    quoteState -= 1;
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

let button_getQuote = document.getElementById('quote_btn');
let quoteText = document.getElementById('quote');
let quoteName = document.getElementById('name');

let buttonStateVar = 0;
let quoteState = -1;
buttonState();

const rizal = ['He who does not know how to look back at where he came from will never get to his destination.',
'One only dies once, and if one does not die well, a good opportunity<br>is lost and will not present<br>itself again.',
'There can be no tyrants where there are no slaves.',
'Each one writes history according to his convenience.',
'He who would love much has also much to suffer.']

const socrates = ['The only true wisdom is in knowing you know nothing.',
'Be slow to fall into friendship, but when you are in, continue<br>firm and constant.',
'Sometimes you put walls up not to keep people out, but to see<br>who cares enough to<br>break them down.',
'The secret of happiness, you see, is not found in seeking more, but in developing the capacity<br>to enjoy less.',
'Let him who would move the world first move himself.']

const sun_tzu = ['In the midst of chaos, there is also opportunity.',
'The greatest victory is that which requires no battle.',
'Supreme excellence consists of breaking the enemy\'s resistance without fighting.',
'Who wishes to fight must first count the cost.',
'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt']

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