const fs = require('fs')
const phat = require('path')


const filePhat = phat.join(__dirname, 'input.txt');

fs.readFile(filePhat, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error riding file', err);

            return;
        }

        //  display the results
        console.log(`Words: ${countWords(data)}`);
        console.log(`Letters: ${countLetters(data)}`);
        console.log(`Sentences: ${countSentences(data)}`);
        console.log(`Letter frequency: ${mostUsedLetter(data)}`);
        console.log(`Word frequency: ${mostUsedWord(data)}`)

    })
    //Function to counts number of words text
function countWords(word) {
    const words = word.split(/\s+/);

    return words.length;
}

// Function to count the number of letters in the text

function countLetters(lettr) {
    const letters = lettr.replace(/[^a-zA-Z]/g, '');
    return letters.length;
}

//Function to counts number of sentences in text

function countSentences(sentence) {
    const sentences = sentence.split(/[.!?]/);

    return sentences.length;
}

// function to count the most used letter in a text

function mostUsedLetter(usedLetter) {
    const letterFrequency = {};
    const letters = usedLetter.replace(/[^a-zA-Z]/g, '').toLowerCase();

    for (const letter of letters) {
        letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
    }

    const mostUsed = Object.keys(letterFrequency).reduce((letter1, letter2) =>
        letterFrequency[letter1] > letterFrequency[letter2] ? letter1 : letter2
    );

    return mostUsed;
}


//function to get the most word in text

function mostUsedWord(usedWord) {

    const wordFrequency = {};
    const words = usedWord.split(/\s+/);

    for (const word of words) {
        const sanitizedWord = word.replace(/[^a-zA-Z]/g, '');
        wordFrequency[sanitizedWord] = (wordFrequency[sanitizedWord] || 0) + 1;
    }

    const mostFrequent = Object.keys(wordFrequency).reduce((a, b) =>
        wordFrequency[a] > wordFrequency[b] ? a : b
    );

    return mostFrequent;
}