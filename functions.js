function findFactors(n) {
    let factorList = [] ;
    let max = Math.ceil(n** 0.5 );
    
    for (let i = 1; i < max ; i++) {
        if (n % i == 0) {
            if (i != n/i) {
                factorList.push(i);
                factorList.push(n / i);
            } else {
                factorList.push(i);
            }
        }
    }
    return(factorList);
}      

function questionExists(num1ToTest, symbolToTest, num2ToTest, num1, symbol, num2) {
// Searches for common num1, symbol and num2 locations and returns the number of
// matches found.
// num1ToTest, symbolToTest and num2ToTest define the question to look for. 
// num1, symbol and num2 are lists defining the questions already in existance (those to search through).
// Returns the number of matches found.  If no matches, returns 0.

    let matchCount = 0;
    for (let i = 0; i < num1.length; i++) {
        if ((num1ToTest == num1[i]) && (num2ToTest == num2[i]) && (symbolToTest == symbol[i])) {
            matchCount++
        }
    }
    return(matchCount)
}

// Function for generating random numbers from (and including) 'low' to
// (and excluding) 'high', to the number of decimal places ('dp') requested.
// Returned number can include 'low' but excludes 'high'
// Specify the numbe of random numbers required by the 'count' argument.
function getRandomNumbers(low, high, dp, count) {
    let range = high - low;
    range = range * Math.pow(10, dp);
    low = low * Math.pow(10,dp);
    let numToTest = [];
    let num = [];
    let i = 0;

    //while loop to get count nums
    while (count > i) {  
        let numToTest = Math.floor((Math.random() * range) + low); // the random number with decimal place removed (eg. an interger)
        numToTest = numToTest /  Math.pow(10,dp);
        if (num.includes(numToTest)) {
            // i = i; // do nothing, let it loop again 
        } else {
            num.push(numToTest); //Add the number ot the list to return
            i=i+1
        }
    }
    return(num);
}

//function for generating an array of numbers with a 'start' 'end' and 'step'
function generateNumberArray(start, end, step) {
    let array = [];

    for (let i = start; i <= end; i=i+step) {
        array.push(i);
    }
    return array
}

// funtion to delete evey Nth element from an array.
function deleteNthElements(array, n) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % n)
        newArray.push(array[i]);
    }

    return newArray
}

//function to perform a random shuffle of an array. See https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function randomShuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
}

// funtion to pick a random sample of k items from an array, item is not repeated
function randomSample(array, k) {
    let newArray = [];
    let currentIndex = array.length, randomIndex;
   
    // While there remain elements to be picked.
    while (currentIndex != array.length - k) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element so it wont get picked again.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    // Get the randomly picked elements stored at the end of the array
    newArray = array.slice(array.length - k)

    return newArray

}

// funtion to pick a random sample of k items from an array, item can be repeated
function randomChoices(array, k) {
    let newArray = [];

    for (let i = 0; i < k; i++){
        randomIndex = Math.floor(Math.random() * array.length)
        newArray.push(array[randomIndex])
    }

    return newArray
}

function getUnicodeFromDigit(script, num) {
    // These are the 1 to 9 unicode sub- and super-script codes
    let unicodeTextSup = ['\u00B9', '\u00B2', '\u00B3', '\u2074', '\u2075', '\u2076', '\u2077', '\u2078', '\u2079']
    let unicodeTextSub = ['\u2081', '\u2082', '\u2083', '\u2084', '\u2085', '\u2086', '\u2087', '\u2088', '\u2089']
    let index = num-1
    if (script == 'sup') {
        unicode = unicodeTextSup[index]
    } else if (script == 'sub') {
        unicode = unicodeTextSub[index]
    }
    return(unicode)
}

function markFactorsQuestion(userFactors, factList) {
// factList: The list to check the user answers agaist
// userFactors: the decimal point separated factors answers given by user
    userFactors = userFactors.split('.'); // split at the . to get individual factor answers
    let factRes = []; //    

    for (let n = 0; n < userFactors.length; n++) { 
        let userFactor = parseInt(userFactors[n]);
        if (factList.includes(userFactor)) { //  its got to be in the answers list
            if (!(factRes.includes(userFactor))) // and not already used
                factRes.push(userFactor) // add it to the results
        }  else {
            factRes = [] // one wrong answer is a fail, zero resuts
            break;
        }
    }
    let res = (factRes.length >= 4); // 4 or more correct factors have been given
    return(res)
}