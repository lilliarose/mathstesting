function getQuestions(questionCount, stage, toughTest = false) {
 // get questions, question text, and answers of the stage requested
 // questionCount: the number of questions from the stage required
 // stage: the stage number questions are required from
 // toughTest: an optional flag used when requesting 1 question that prevents easy questions from being retuned.
 //            e.g it wont give 1 x questions, or a /1 question, or any other questions deemed too simple.

    let num1 = []; // used with num2 to work out the correct answers
    let num2 = []; // used with num1 to work out the correct answers
    let num1a = []; // for intermediate calculations
    let num1b = []; // for intermediate calculations
    let num2a = []; // for intermediate calculations
    let num2b = []; // for intermediate calculations
    let ans = []; // the correct answers
    let num1_quest = []; // the actual item to appear in the displayed question in the 'num1_quest' location. Often it is just a copy of num1, but for example a double question num1 would be '2' whilst num1_quest would be 'Double'
    let symbol = []; // the actual item to appear in the displayed question in the 'symbol' location.
    let num2_quest = []; //the actual item to appear in the displayed question in the 'num2_quest' location.
    let isRandomised = 0; // If the times table stage selcted is random order (eg. bronze stage 5 is '5s mixed', so in random order)
    let questionType  //               
    let isTimesTableStage = 0;
    let dpTwo = [];
    let dpThree = [];

    // The question types of each stage
    let timesTableMultiplyStages = [101, 102, 104, 105, 108, 109, 111, 112, 114, 115, 118, 119, 121, 122, 124, 125, 128, 129, 201, 202, 204, 205, 210, 213, 215, 217, 219, 221, 223, 225, 227];
    let timesTableDivideStages = [103, 106, 110, 113, 116, 120, 123, 126, 130, 203, 206, 211, 214, 216, 218, 220, 222, 224, 226, 228];
    let timesTableMultiplyAndDivideStages = [107, 117, 127, 131, 203, 207, 212, 319, 320, 321, 322, 323, 324, 325];
    let multiplyStages = [229, 317, 326, 327, 328, 329, 330, 401, 402, 403, 404, 405, 406, 407, 408, 409, 413, 415, 422, 423];
    let divideStages = [230, 318, 419, 420, 421, 424];
    let multiplyAndDivideStages = [];
    let halfsStages = [303, 304, 310, 313, 315, 411, 412, 414, 416, 418];
    let doublesStages = [302, 305, 306, 309, 311, 312, 314, 410, 417];
    let squaredStages = [208, 316, 427];
    let squareRootStages = [209];
    let cubedStages = [428];
    let cubeRootStages = [429];
    let fractionsStages = [307, 308];
    let factorsStages = [301];
    let modulusStages = [426];
    let percentStages = [430];
    let factorialStages = [425];
    let timesTableChoice = []; // The times table being tested, if more than one (e.g. 3s,6s,9s, then set to [3, 6, 9])

    let inOrderStages = [101, 104, 108, 111, 114, 118, 121, 124, 128, 201, 204];

    if (inOrderStages.includes(stage)) {
        isRandomised = 0;
    } else {
        isRandomised = 1;
    }

    // First get the question type, as common operations happen for a given question type.
    if (timesTableMultiplyStages.includes(stage)) {
        questionType = 'timesTableMultiply';
        isTimesTableStage = 1;
    } else if (timesTableDivideStages.includes(stage)) {
        questionType = 'timesTableDivide';
        isTimesTableStage = 1;
    } else if (timesTableMultiplyAndDivideStages.includes(stage)) {
        questionType = 'timesTableMultiplyAndDivide';
        isTimesTableStage = 1;
    } else if (multiplyStages.includes(stage)) {
        questionType = 'multiply';
    } else if (divideStages.includes(stage)) {
        questionType = 'divide';
    } else if (multiplyAndDivideStages.includes(stage)) {
        questionType = 'multiplyAndDivide';
    } else if (halfsStages.includes(stage)) {
        questionType = 'halfs';
    } else if (doublesStages.includes(stage)) {
        questionType = 'doubles';
    } else if (squaredStages.includes(stage)) {
        questionType = 'squared';
    } else if (squareRootStages.includes(stage)) {
        questionType = 'squareRoot';
    } else if (cubedStages.includes(stage)) {
        questionType = 'cubed';
    } else if (cubeRootStages.includes(stage)) {
        questionType = 'cubeRoot';
    } else if (fractionsStages.includes(stage)) {
        questionType = 'fractions';
    } else if (factorsStages.includes(stage)) {
        questionType = 'factors';
    } else if (modulusStages.includes(stage)) {
        questionType = 'modulus';
    } else if (percentStages.includes(stage)) {
        questionType = 'percent';
    } else if (factorialStages.includes(stage)) {
        questionType = 'factorial';
    }


    if (isTimesTableStage) {
        //The selected stage is a times table question. Get the times table being tested.
        if ((stage == 101) || (stage ==102) || (stage == 103)) {
            timesTableChoice = [10];
        } else if ((stage == 104) || (stage == 105) || (stage == 106)) {
            timesTableChoice = [5];
        } else if  (stage == 107) {
            timesTableChoice = [5, 10];
        } else if  ((stage == 108) || (stage == 109) || (stage == 110)) {
            timesTableChoice = [2];
        } else if  ((stage == 111) || (stage == 112) || (stage == 113)) {
            timesTableChoice = [4];
        } else if  ((stage == 114) || (stage == 115) || (stage == 116)) {
            timesTableChoice = [8];
        } else if  (stage == 117) {
            timesTableChoice = [2, 4 ,8]
        } else if  ((stage == 118) || (stage == 119) || (stage == 120)) {
            timesTableChoice = [3];
        } else if  ((stage == 121) || (stage == 122) || (stage == 123)) {
            timesTableChoice = [6];
        } else if  ((stage == 124) || (stage == 125) || (stage == 126)) {
            timesTableChoice = [9];
        } else if  (stage == 127) {
            timesTableChoice = [3, 6, 9];
        } else if  ((stage == 128) || (stage == 129) || (stage == 130)) {
            timesTableChoice = [7];
        } else if  (stage == 131) {
            timesTableChoice = [2, 3, 4, 5, 6, 7, 8, 9, 10]
        } else if  ((stage == 201) || (stage == 202) || (stage == 203)) {
            timesTableChoice = [11];
        } else if  ((stage == 204) || (stage == 205) || (stage == 206)) {
            timesTableChoice = [12];
        } else if  (stage == 207) {
            timesTableChoice = [11, 12];
        } else if  ((stage == 210) || (stage == 211) || (stage == 212)) {
            timesTableChoice = [2,3,4,5,6,7,8,9,10,11,12];
        } else if  ((stage == 213) || (stage == 214)) {
            timesTableChoice = [50];
        } else if  ((stage == 215) || (stage == 216)) {
            timesTableChoice = [20];
        } else if  ((stage == 217) || (stage == 218)) {
            timesTableChoice = [40];
        } else if  ((stage == 219) || (stage == 220)) {
            timesTableChoice = [80];
        } else if  ((stage == 221) || (stage == 222)) {
            timesTableChoice = [30];
        } else if  ((stage == 223) || (stage == 224)) {
            timesTableChoice = [60];
        } else if  ((stage == 225) || (stage == 226)) {
            timesTableChoice = [90];
        } else if  ((stage == 227) || (stage == 228)) {
            timesTableChoice = [70];
        } else if  (stage == 319) {
            timesTableChoice = [15];
        } else if  (stage == 320) {
            timesTableChoice = [16];
        } else if  (stage == 321) {
            timesTableChoice = [18];
        } else if  (stage == 322) {
            timesTableChoice = [14];
        } else if  (stage == 323) {
            timesTableChoice = [13];
        } else if  (stage == 324) {
            timesTableChoice = [19];
        } else if  (stage == 325) {
            timesTableChoice = [17];
        }
    }

    // For each stage work out the 1x10 array variables: num1, num2, symbol, ans, num1_quest, num2_quest              
    // Questions appear as: 'num1_quest'   'symbol'   'num2_quest'

    switch (questionType) {
        case 'timesTableMultiply':
            num1 = generateNumberArray(1, 10, 1); // Get an ordered list from 1 to 10 using generateNumberArray(start, end, step);
            if ((toughTest) && (questionCount == 1)) {
                num1 = generateNumberArray(3, 9, 1)
            }
            num2 = randomChoices(timesTableChoice, 10); //Get a random list of 10 numbers from the times tables type selected
            if (isRandomised) {
                num1 = randomShuffle(num1);
            }
            for (let i = 0; i < questionCount; i++) { // Runs questionCount times to generate questionCount questions 
                symbol.push('\u00D7'); // '\u00D7' is the unicode 'multiply' symbol
                ans.push(num1[i] * num2[i]);
                num1_quest[i] = num1[i];
                num2_quest[i] = num2[i];
            }
            break;

        case 'timesTableDivide':
            num1a = generateNumberArray(1, 10, 1); // Get an ordered list from 1 to 10 using generateNumberArray(start, end, step);
            if ((toughTest) && (questionCount == 1)) {
                num1a = generateNumberArray(3, 9, 1)
            }
            num2 = randomChoices(timesTableChoice, questionCount); //Get a random list of questionCount numbers from the times tables type selected
            num1 = [];
            if (isRandomised) {
                num1a = randomShuffle(num1a);
            }
            for (let i = 0; i < questionCount; i++) { // Runs questionCount times to generate questionCount questions 
                symbol.push('\u00F7'); // '\u00F7' is the unicode 'divide' symbol
                num1.push(num1a[i])
                ans.push(num1[i] * num2[i]);
                // currenlty coded as a multiply question, so need to switch the num1 and ans over
                let num1Temp = num1a[i];
                num1[i] = ans[i];
                ans[i] = num1Temp;
            }

            num1_quest = num1;
            num2_quest = num2;
            break;


        case 'timesTableMultiplyAndDivide':
            let isDivide = randomChoices([0, 1], questionCount); // get an array of 0s and 1s defining if the question will be a divide or a multiply question
            num1a = generateNumberArray(1, 10, 1); // Get an ordered list from 1 to 10 using generateNumberArray(start, end, step);
            if ((toughTest) && (questionCount == 1)) {
                num1a = generateNumberArray(3, 9, 1)
            }
            num2 = randomChoices(timesTableChoice, questionCount); //Get a random list of questionCount numbers from the times tables type selected
            num1 = [];

            if (isRandomised) {
                num1a = randomShuffle(num1a);
            }   
            for (let i = 0; i < questionCount; i++) { // Runs questionCount times to generate questionCount questions 
                num1.push(num1a[i])
                ans.push(num1a[i] * num2[i]);
                if (isDivide[i]) {
                    let tempAns = ans[i];
                    ans[i] = num1[i];
                    num1[i] = tempAns;
                    symbol.push('\u00F7'); // '\u00F7' is the unicode 'divide' symbol
                } else {
                    symbol.push('\u00D7'); // '\u00D7' is the unicode 'multiply' symbol
                }
            }        
            num1_quest = num1;
            num2_quest = num2;
            break;

        case 'squared':
            switch (stage) {
                case 208:
                    num1a = generateNumberArray(1, 10, 1); // Get an ordered list from 1 to 10
                    num1a = randomShuffle(num1a);
                    for (let i = 0; i < questionCount; i++) {
                        num1.push(num1a[i]);
                    }
                break;

                case 316: // Multiples of 10 squared.
                num1a = randomShuffle([1,2,3,4,5,6,7,8,9,10]);
                for (let i = 0; i < questionCount; i++) {
                    num1[i] = num1a[i]*10;
                }
                break;

                case 427: // 3-digit number squared
                    // Pick 2 numbers in the 100s, then one each in the following hundreds to 900.
                    num1a = getRandomNumbers(200, 299, 0, 2); // the 200's
                    num1b.push(num1a[0]);
                    num1b.push(num1a[1]);
                    num1a = getRandomNumbers(300, 399, 0, 1); // the 300's
                    num1b.push(num1a[0]);
                    num1a = getRandomNumbers(400, 499, 0, 1); // the 400's
                    num1b.push(num1a[0]);
                    num1a = getRandomNumbers(500, 599, 0, 2); // the 500's
                    num1b.push(num1a[0]);
                    num1b.push(num1a[1]);
                    num1a = getRandomNumbers(600, 699, 0, 1); // the 600's
                    num1b.push(num1a[0]);
                    num1a = getRandomNumbers(700, 799, 0, 1); // the 700's
                    num1b.push(num1a[0]);
                    num1a = getRandomNumbers(800, 899, 0, 1); // the 800's
                    num1b.push(num1a[0]);
                    num1a = getRandomNumbers(900, 999, 0, 1); // the 900's
                    num1b.push(num1a[0]);
                    num1b = randomShuffle(num1b);
                    for (let i = 0; i < questionCount; i++) {
                    num1[i] = num1b[i];
                }
                break;
            }

            // Do common squared stuff here
            for (let i = 0; i < questionCount; i++) {
                    num2[i] = num1[i];
                    ans[i] = num1[i]*num2[i];
                    num1_quest[i] = num1[i];
                    num2_quest[i] = '';
                    symbol[i] = '\u00B2';
                }
        break;


        case 'squareRoot':
            // only one 'square root' stage (209)
            num1a = generateNumberArray(1, 10, 1); // Get an ordered list from 1 to 10
            num1a = randomShuffle(num1a);
            for (let i = 0; i < questionCount; i++) {
                num1.push(num1a[i]);
                num2[i] = num1a[i];
                ans[i] = num1a[i]*num2[i];
                symbol[i] = '  \u221A  ';
                num1_quest[i] = '';
            }
            num2_quest = ans;
            ans = num1;
            break;

        case 'cubed':
            switch (stage) {
                case 428: // 2 digit numbers cubed
                    // Pick 2 numbers in the 10s, then one each in the following 10s to 90.
                    for (let i = 0; i < 10; i++) {
                        let r = i+1
                        if (i == 9) {
                            r = 1
                        }
                        num1a = getRandomNumbers(10*r, 10*(r+1), 0, 1);
                        num1b.push(num1a[0]);
                    }
                    
                    for (let i = 0; i < questionCount; i++) {
                        num1[i] = num1b[i]
                    }
                break;
            }

            // Do common cubed stuff here
            for (let i = 0; i < questionCount; i++) {
                    num2[i] = num1[i];
                    ans[i] = num1[i]*num2[i]*num2[i];
                    num1_quest[i] = num1[i];
                    num2_quest[i] = '';
                    symbol[i] = '\u00B3';
                }
        break;

        case 'cubeRoot':
            switch (stage) {
                case 429: // cube roots
                    // Answers should be an integer between 2 and 20.
                    // Pick 5 numbers in the 2-10 range, then five in the 10-20 range.
                    num1a = randomSample([2,3,4,5,6,7,8,9,10], 5);
                    num1b = randomSample([11,12,13,14,15,16,17,18,19,20], 5);
                    num1 = num1a.concat(num1b);
                    num1 = randomShuffle(num1);
                    num1a = num1;
                    for (let i = 0; i < questionCount; i++) {
                        num1[i] = num1a[i]
                    }
                break;
            }

            // Do common cube root stuff here
            for (let i = 0; i < questionCount; i++) {
                    ans[i] = num1[i];
                    num1_quest[i] = '';
                    num2_quest[i] = num1[i]*num1[i]*num1[i];
                    symbol[i] = '\u221B';
                }
        break;

        case 'multiply':
        case 'divide':
            switch (stage) {
                case 229:  // 2 & 3 digit * by 10 and 100
                case 230: //2 & 3 digit / by 10 and 100 
                
                    // Get 5 2 digit numbers:
                    num1a = getRandomNumbers(11, 99, 0, 5); // 2 digit random number (from 11 to 99)
                
                    // Get 5 3 digit numbers:
                    num1b = getRandomNumbers(101, 999, 0, 5); // 3 digit random number (from 101 to 999)
                    num1 = num1a.concat(num1b); // join the lists
                    num1 = randomShuffle(num1); // and randomise
                    num2 = randomChoices([10, 100], 10); // a random mixture of 10s and 100s
                break;

                case 317: // 2 digit x 4'
                    num1 = getRandomNumbers(11, 99, 0, 10); // get 10 2 digit numbers
                    num2 = randomChoices([4],10); // quick way of getting an array of 4s  
                break;
                
                case 318: // 2 digit / 4'
                    num1 = getRandomNumbers(11, 99, 0, 10); // get 10 2 digit numbers
                    num2 = randomChoices([4],10); // quick way of getting an array of 4s
                break;
                
                case 326: //2 digit multiply by 4, 6, 8
                    num1 = generateNumberArray(10,99,1); // The list of possible num1 options
                    num1 = deleteNthElements(num1, 10); // remove all numbers ending in 0 so no easy questions
                    num1 = randomSample(num1, 10); // select 10 from the options, not repeated.
                    num2 = randomChoices([4, 6, 8], 10); // choose 10 from 4, 6, 8
                break;
                
                case 327: //2 digit multiply by 3, 7, 9
                    num1 = generateNumberArray(10,99,1); // The list of possible num1 options
                    num1 = deleteNthElements(num1, 10); // remove all numbers ending in 0 so no easy questions
                    num1 = randomSample(num1, 10); // select 10 from the options, not repeated.
                    num2 = randomChoices([3, 7, 9],10); // choose 10 from 3, 7, 9
                break;
                
                case 328: // 2 digit number < 50 x unit
                    num2 = generateNumberArray(10,49,1); // The list of possible num1 options
                    num2 = deleteNthElements(num2, 10); // remove all numbers ending in 0 so no easy questions
                    num2 = randomSample(num2, 10); // select 10 from the options, not repeated
                    num1 = randomChoices([2, 3, 4, 5 ,6, 7, 8, 9],10); // 
                break;
                
                case 329: // Decimal < 5 (1 DP) * units  
                    num2 = generateNumberArray(10,49,1); // The list of possible num1 options
                    num2 = deleteNthElements(num2, 10); // remove all numbers ending in 0 so no easy questions
                    num2 = randomSample(num2, 10); // select 10 from the options, not repeated
                    for (let i = 0; i < 10; i++) {
                        num2[i] = num2[i]/10 // get the decimal point
                    } 
                    num1 = randomChoices([2, 3, 4, 5 ,6, 7, 8, 9],10); //
                break;
                
                case 330: // Decimal < 10 (1 DP) * units 
                    num2 = generateNumberArray(50,99,1); // The list of possible num1 options, examples have all numbers in the range 5.1 to 9.9
                    num2 = deleteNthElements(num2, 10); // remove all numbers ending in 0 so no easy questions
                    num2 = randomSample(num2, 10); // select 10 from the options, not repeated
                    for (let i = 0; i < 10; i++) {
                        num2[i] = num2[i]/10 // get the decimal point
                    } 
                    num1 = randomChoices([2, 3, 4, 5 ,6, 7, 8, 9],10); //
                break;

                case 401: // TU x 25
                    num2 = randomChoices([25], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;
                
                case 402: // TU x 50
                    num2 = randomChoices([50], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 403: // TU x 20
                    num2 = randomChoices([20], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;
                
                case 404: // TU x 40
                    num2 = randomChoices([40], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 405: // TU x 80
                    num2 = randomChoices([80], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;
                
                case 406: // TU x 30
                    num2 = randomChoices([30], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 407: // TU x 60
                    num2 = randomChoices([60], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 408: // TU x 90
                    num2 = randomChoices([90], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 409: // TU x 70
                    num2 = randomChoices([70], 10);
                    num1 = generateNumberArray(10,100,1);
                    num1 = deleteNthElements(num1, 10);
                    num1 = randomSample(num1, 10);
                break;

                case 419: // three digit number divided by 4 
                    num1 = generateNumberArray(100,1000,1); // The list of possible num1 options (three digits)
                    num1 = deleteNthElements(num1, 10); // remove all numbers ending in 0 so no easy questions
                    num1 = randomSample(num1, 10); // select 10 from the options, not repeated.
                    num2 = randomChoices([4], 10) // simple way to get an array of 4's
                break;

                case 420: // 4 digit number to 1 dp divided by 4
                    num1a = generateNumberArray(100,1000,1); // The list of possible whole number options (three digits)
                    num1a = randomSample(num1a, 10); // and get a selection of 10 of them, not repeated
                    num1b = randomChoices([1,2,3,4,5,6,7,8,9], 10) // the 1 dp number, can be repeated.
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1a[i] + num1b[i]/10; // make the 1dp number 
                        num2[i] = 4; // divisor is always 4.
                    }    
                break;

                case 421: // 4 digit number divided by units                    
                    // Allow 1/2, 1/4, 1/5, 1/8ths to give decimal point answers as these fractions are non-recurring.
                    // All other divisors (3, 6, 7, 9) need to give whole numbers, as these fractions are recurring numbers.
                    // Lets have six divisors that could give decimal point answers,
                    // and four divisors that we force to give whole number answers.
                    // First the whole number answers:
                    num1a = getRandomNumbers(Math.ceil(1001/3), Math.floor(9999/3), 0, 1) * 3; // first get a number divisible by 3 thats four digits
                    num1.push(num1a);
                    num1a = getRandomNumbers(Math.ceil(1001/6), Math.floor(9999/6), 0, 1) * 6; // then a number divisible by 6 thats four digits
                    num1.push(num1a);
                    num1a = getRandomNumbers(Math.ceil(1001/7), Math.floor(9999/7), 0, 1) * 7; // then a number divisible by 7 thats four digits
                    num1.push(num1a);
                    num1a = getRandomNumbers(Math.ceil(1001/9), Math.floor(9999/9), 0, 1) * 9; // then a number divisible by 9 thats four digits
                    num1.push(num1a);
                    num1a = getRandomNumbers(1000, 9999, 0, 6); // and 6 others that can give decimal answers
                    num1b = num1.concat(num1a); // join the arrays, now the whole numbers in order
                    num2a = [3, 6, 7, 9, 2, 4, 5, 8]; // divisors for the first four numbers, plus one of each remaining divisors (2,4,5,8)
                    num2b = randomSample([2, 4, 5, 8], 2); // divisors for the remaing two numbers is a rondom choice
                    let num2_ordered = num2a.concat(num2b); // divisors in order
                    // now mix the up, but keep a common order
                    let order = randomShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // this is the random order
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1b[order[i]];
                        num2[i] = num2_ordered[order[i]];
                    }
                break;
                
                case 424: // 4 and 5 digit number to 1 d.p. divided by 3
                    if (questionCount == 10) { // only show this on the 'stages' page when 10 questions are asked. For hte 'test' page we show this when the question is displayed.
                        alert('Platinum Stage 24 \nOnly give answers to 2 d.p where nessesary.');
                    }
                    // get five 4-digit numbers, and five 5-digit numbers, without ending in a 0.
                    for (let i = 0; i < 5; i++) {
                        num1a = getRandomNumbers(101, 999, 0, 1); // the four digit whole number
                        num1b = randomSample([1,2,3,4,5,6,7,8,9], 1); // the decimal number
                        num1.push((num1a + num1b)/10);
                        num2.push(3);
                        num1a = getRandomNumbers(1001, 9999, 0, 1); // the five digit whole number
                        num1b = randomSample([1,2,3,4,5,6,7,8,9], 1); // the decimal number
                        num1.push((num1a + num1b)/10);
                        num2.push(3);
                    }
                break;


                case 413: // 5/6 digit number to 2 d.p. x U 
                    // get 5 5-digit numbers, and 5 6-digit numbers, with no .x0 endings.
                    dpTwo = generateNumberArray(0,100,1); // First get the 2-dp options
                    dpTwo = deleteNthElements(dpTwo, 10);
                    dpTwo = randomSample(dpTwo, 10); // select 10 from the options
                    num1a = getRandomNumbers(101, 999, 0, 5); // Then get the whole portion of the five digit numbers
                    num1b = getRandomNumbers(1001, 9999, 0, 5); // and  the whole portion of the six digit numbers
                    num1 = num1a.concat(num1b); // join the 5 and 6 digit whole number lists
                    num1 = randomShuffle(num1); // and randomise
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] + (dpTwo[i]/100);
                        num2a = randomChoices([2,3,4,5,6,7,8,9],1);
                        num2[i] = num2a[0];
                    }         
                break;

                case 415: // 6 digit number to 3 d.p. x U 
                    dpThree = generateNumberArray(0,1000,1); // First get the 3-dp options
                    dpThree = deleteNthElements(dpThree, 10);
                    dpThree = randomSample(dpThree, 10); // select 10 from the options
                    num1 = getRandomNumbers(101, 999, 0, 10); // Then get the whole portion of the five digit numbers
                    num1 = randomShuffle(num1); // and randomise
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] + (dpThree[i]/1000);
                        num2a = randomChoices([2,3,4,5,6,7,8,9],1);
                        num2[i] = num2a[0];
                    }
                break;

                case 422: // HTU x TU
                    num1 = generateNumberArray(100,1000,1); // The list of possible num1 options (HTU)
                    num1 = deleteNthElements(num1, 10); // remove all numbers ending in 0 so no easy questions
                    num1 = randomSample(num1, 10); // select 10 from the options
                    num2 = generateNumberArray(10,100,1); // The list of possible num1 options (TU)
                    num2 = deleteNthElements(num2, 10); // remove all numbers ending in 0 so no easy questions
                    num2 = randomSample(num2, 10); // select 10 from the options
                break;

                case 423: // 5 digit numbers to 2 dp x 3 
                // get 5 5-digit numbers, and 5 6-digit numbers, with no .x0 endings.
                    dpTwo = generateNumberArray(0,100,1); // First get the 2-dp options
                    dpTwo = deleteNthElements(dpTwo, 10);
                    dpTwo = randomSample(dpTwo, 10); // select 10 from the options
                    num1 = getRandomNumbers(101, 999, 0, 10); // Then get the whole portion of the five digit numbers
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] + (dpTwo[i]/100);
                        num2[i] = 3;
                    }
                break;                           

            }
            
            // do common multiply and divide stuff here:
            num1a = num1;
            num2a = num2; 
            num1 = []; // reinitalise num1 and num2 to begin filling with values
            num2 = [];

            for (let i = 0; i < questionCount; i++) {  
                num1[i] = num1a[i]; // build up num1 and num2 as we loop (so we can have less than 10 questions)
                num2[i] = num2a[i];       
                if (questionType == 'multiply') {
                    ans[i] = num1[i] * num2[i];
                    symbol[i] = '  \u00D7  ';
                } else if (questionType == 'divide') {
                    ans[i] = num1[i] / num2[i];
                    symbol[i] = '  \u00F7  ';
                }                          
            }
                for (let i = 0; i < questionCount; i++) {
                    ans[i] = Math.round(ans[i] * 1000) / 1000 // Round all answers to 3dp as this is the most precission in any of the stages.
                }

            num1_quest = num1;
            num2_quest = num2;
            break;

        case 'doubles':
            switch (stage) {
                case 302: // Double integers up to 100
                    num1 = getRandomNumbers(11, 99, 0, 10)
                break;                       

                case 305: // Double integers up to 200
                    num1a = getRandomNumbers(11, 99, 0, 4); // 4 numbers below 100 
                    num1b = getRandomNumbers(101, 199, 0, 6); // 6 numbers above 100
                    num1 = num1a.concat(num1b); // join the lists
                    num1 = randomShuffle(num1); // and randomise
                break;
                
                case 306: // Double integers up to 500
                // Sample tests choose two between 100 and 200, eight between 200 and 500. Replicate this behaviour
                    num1a = getRandomNumbers(101, 199, 0, 2); // 2 numbers  100 - 200
                    num1b = getRandomNumbers(201, 499, 0, 8); // 8 numbers 200 - 500
                    num1 = num1a.concat(num1b); // join the lists
                    num1 = randomShuffle(num1); // and randomise
                break;
                
                case 309: // Double decimals less than 1 with 2dp
                    num1 = generateNumberArray(0,100,1); // First get the 2-dp options
                    num1 = deleteNthElements(num1, 10); // remove any .x0 numbers
                    num1 = randomSample(num1, 10); // select 10 from the options
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i]/100; // and convert to 2 dp
                        num1[i] = Math.round(num1[i] * 100) / 100 //round to 2 dp to prevent small errors
                    }
                break;
                
                case 311: // Double decimals with 2dp
                    // Maximum in sample tests is 22.84, so choose to limit to 25
                    num1b = getRandomNumbers(1, 24, 0, 10); // get the whole part of the number                                num1a = generateNumberArray(0,100,1); // First get the 2-dp options
                    num1a = generateNumberArray(0,100,1); // get the 2-dp options
                    num1a = deleteNthElements(num1a, 10); // remove any .x0 numbers
                    num1a = randomSample(num1a, 10); // select 10 from the options
                    for (let i = 0; i < 10; i++) {
                        num1a[i] = num1a[i]/100; // and convert to 2 dp
                        num1[i] = num1a[i] + num1b[i]; // and make the full number
                        num1[i] = Math.round(num1[i] * 100) / 100 //round to 2 dp to prevent small errors
                    }
                    
                break;
                
                case 312: // Double multiples of 10 up to 1000               
                    num1 = getRandomNumbers(11, 99, 0, 10); // Start at 111 so it's not too easy
                        for(var i=0; i<num1.length; i++) {
                            num1[i] *= 10;
                        }              
                break;
                
                case 314: // Double multiples of 10 up to 10,000
                    // Sample test has one number in range 200-900, and nine over 1,000. Replicate this behaviour.
                    num1a = getRandomNumbers(21, 99, 0, 1); // 1 numbers  210 - 990
                    num1b = getRandomNumbers(101, 999, 0, 9); // 8 numbers 1010 - 9,990
                    num1 = num1a.concat(num1b); // join the lists
                    num1 = randomShuffle(num1); // and randomise
                    for(var i=0; i<num1.length; i++) {
                            num1[i] *= 10;
                        }
                break;

                case 410: // doubling 5 digit to 2 dp < 200.
                    num1a = getRandomNumbers(101, 199, 0, 10); // the whole numbers
                    num1b = getRandomNumbers(11, 99, 0, 10); // the 2 dp numbers
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1a[i] + (num1b[i]/100); 
                        num1[i] = num1[i].toFixed(2);
                    }  
                break;
                
                case 417: // doubling 5 digit to 2 dp > 200
                    // Choose one number in each 100s, and two in the 200s and 500s                       
                    num1a = getRandomNumbers(200, 299, 0, 2); // the 200's
                    num1.push(num1a[0]);
                    num1.push(num1a[1]);
                    num1a = getRandomNumbers(300, 399, 0, 1); // the 300's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(400, 499, 0, 1); // the 400's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(500, 599, 0, 2); // the 500's
                    num1.push(num1a[0]);
                    num1.push(num1a[1]);
                    num1a = getRandomNumbers(600, 699, 0, 1); // the 600's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(700, 799, 0, 1); // the 700's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(800, 899, 0, 1); // the 800's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(900, 999, 0, 1); // the 900's
                    num1.push(num1a[0]);

                    num1 = randomShuffle(num1);
                    num1b = getRandomNumbers(11, 99, 0, 10); // the 2 dp numbers
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] + (num1b[i]/100); 
                        num1[i] = num1[i].toFixed(2);
                    }   
                break;
            }

            //Do common 'double' tasks here
            num1a = num1;
            num1 = []; //reinitialise num1 and num2 to begin filling with values.
            num2 = [];
            for (let i = 0; i < questionCount; i++) {
                num1[i] = num1a[i]
                num2[i] = 2;
                ans[i] = num1[i]*num2[i];
                symbol[i] = '';
                num1_quest[i] = 'Double';
            }
            
            num2_quest = num1;
        break;

        case 'halfs':
            switch (stage) {

                case 303: // Half evens numbers up to 100
                    num1 = generateNumberArray(10,99,2) // all the evens
                    num1 = randomSample(num1,10); // pick 10
                break;

                case 304: // Half odd numbers up to 50
                    num1 = generateNumberArray(11,50,2) // all the odds
                    num1 = randomSample(num1,10); // pick 10
                break;

                case 310: // Half decimals less than 10 containing tenths
                    num1a = randomShuffle([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]); // pick 10 units. Allow at most two of same number
                    num1b = randomShuffle([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]); // pick 10 tenths. Allow at most two of same number
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1a[i] + (num1b[i] / 10);
                    }
                break;

                case 313: // Half mutiples of 10 less than 1,000
                    num1 = getRandomNumbers(11, 99, 0, 10);
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] * 10;
                    }
                break;
                
                case 315: // Half mutiples of 10 less than 10,000
                // Sample test has one number in range 200-900, and nine over 1,000. Replicate this behaviour.
                    num1a = getRandomNumbers(11, 99, 0, 1);
                    num1b = getRandomNumbers(101, 999, 0, 9);
                    num1 = num1a.concat(num1b); // join the lists
                    num1 = randomShuffle(num1); // and randomise
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] * 10;
                    }
                break;  

                case 411: // halfing 3 digit odds < 200
                    num1 = generateNumberArray(101,199,2) // all the odds
                    num1 = randomSample(num1,10); // pick 10
                break;

                case 412: // halfing 3 digit odds > 200
                    num1 = generateNumberArray(201,999,2) // all the odds
                    num1 = randomSample(num1,10); // pick 10
                break;

                case 414: // halfing 5 digit with 2dp < 200
                    num1a = getRandomNumbers(101, 199, 0, 10); // the whole numbers
                    num1b = getRandomNumbers(11, 99, 0, 10); // the 2 dp numbers
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1a[i] + (num1b[i]/100); 
                        num1[i] = num1[i].toFixed(2);
                    }   
                break;

                case 416: // halving 5 digit numbers to 1dp
                    num1a = getRandomNumbers(1001, 9999, 0, 10); // the whole numbers
                    num1b = randomSample([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],10); // pick 10 tenths. Allow at most two of same number
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1a[i] + (num1b[i]/10); 
                    }   
                break;

                case 418: // halfing 5 digit with 2dp > 200  
                    // Choose one number in each 100s, and two in the 200s and 500s                       
                    num1a = getRandomNumbers(200, 299, 0, 2); // the 200's
                    num1.push(num1a[0]);
                    num1.push(num1a[1]);
                    num1a = getRandomNumbers(300, 399, 0, 1); // the 300's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(400, 499, 0, 1); // the 400's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(500, 599, 0, 2); // the 500's
                    num1.push(num1a[0]);
                    num1.push(num1a[1]);
                    num1a = getRandomNumbers(600, 699, 0, 1); // the 600's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(700, 799, 0, 1); // the 700's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(800, 899, 0, 1); // the 800's
                    num1.push(num1a[0]);
                    num1a = getRandomNumbers(900, 999, 0, 1); // the 900's
                    num1.push(num1a[0]);

                    num1 = randomShuffle(num1);
                    num1b = getRandomNumbers(11, 99, 0, 10); // the 2 dp numbers
                    for (let i = 0; i < 10; i++) {
                        num1[i] = num1[i] + (num1b[i]/100); 
                        num1[i] = num1[i].toFixed(2);
                    }   
                break;
            }

            // do common 'halfs' tasks here
            num1a = num1;
            num1 = []; //reinitialise num1 and num2 to begin filling with values.
            num2 = [];
            for (let i = 0; i < questionCount; i++) {
                num1[i] = num1a[i];
                ans[i] = num1[i] / 2;
                symbol[i] = '';
                num1_quest[i] = '\u00BD   of  ';
            } 
            num2_quest = num1;
        break;

        case 'fractions':
            let denominator = [];
            let numerator = [];

            switch (stage) {
                case 307: // unit fractions of amounts
                    denominator = [2,3,3,4,4,5,6,7,8,9]; // Choose two thirds and two quarter questions to match examples.
                    denominator = randomShuffle(denominator);
                    numerator = randomChoices([1], 10)
                    ans = getRandomNumbers(11, 111, 0, 10) // pick 10 elements at random from 11 to 111, can be repeated
                    for (let i = 0; i <  questionCount; i++) {
                        num2[i] = ans[i]*denominator[i]/numerator[i]; 
                    }

                break;

                case 308: // fractions of amounts
                    denominator = [2,3,3,4,4,5,6,7,8,9]; // Choose two thirds and two quarter questions to match examples.
                    denominator = randomShuffle(denominator);
                    for (let i = 0; i < 10; i++) {
                        let numeratorMax = Math.min(denominator[i], 8); // Choose numerator up to 8, but limit based on denominator value
                        numerator[i] = getRandomNumbers(1, numeratorMax, 0, 1);
                        num1[i] =numerator[i]/denominator[i];
                        // num2 should be divisible by the denominator, they should know up to x12, so choose random number from 2 to 12
                        num2[i] = denominator[i] * getRandomNumbers(2, 12, 0, 1);
                        ans[i] = num1[i] * num2[i];
                    }
                break;
            }

            // Do common 'fractions' tasks here
            // https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
            // \u2044 is unicode fraction slash
            // \u002F is unicode solidus ('\') 
            let ans_temp = ans;
            ans = [] // reset this so we can fill it up with questionCount number of answers
            for (let i = 0; i < questionCount; i++) {
                unicodeSup = getUnicodeFromDigit('sup', numerator[i]);
                unicodeSub = getUnicodeFromDigit('sub', denominator[i]);
                num1_quest[i] = unicodeSup + '\u2044' + unicodeSub;
                symbol[i] = '  of  ';
                num2_quest[i] = num2[i];
                ans[i] = ans_temp[i]
            }

            // If unicode super and subscripts do not render well, use the following
            // code instead. 

            // for (let i = 0; i < 10; i++) {
               // num1_quest[i] = numerator[i] + '\u002F' + denominator[i];
               // symbol[i] = '  of  ';
               // num2_quest[i] = num2[i];
               // answers = num1[i]*num2[i];
            // }
        break;

        case 'modulus': 
            // Choose three numerators betwwen 50 and 100, five in the 100's, and 2 in the 200s (below 240)
            num1 = num1.concat(getRandomNumbers(51, 99, 0, 3));
            num1 = num1.concat(getRandomNumbers(101, 199, 0, 5));
            num1 = num1.concat(getRandomNumbers(201, 240, 0, 2));
            num1 = num1 = randomShuffle(num1);

            // Choose divisors from 7 to 18, not 10, to reflect tests
            num2 = randomSample([7,8,9,11,12,13,14,15,16,17,18], 10)

            for (let i = 0; i < questionCount; i++) {
                num1_quest[i] = num1[i];
                num2_quest[i] = num2[i];
                symbol[i] = 'mod';
                ans[i] = num1[i] % num2[i]; 
            }
        break;

        case 'factorial': 
            num1 = randomShuffle([1,2,3,4,5,6,7,8,9,10]);
            let answers = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
            let ansIndex;
            for (let i = 0; i < questionCount; i++) {
                num1_quest[i] = '';
                num2_quest[i] = ' !';
                symbol[i] = num1[i];
                ansIndex = num1[i] - 1;
                ans[i] = answers[ansIndex]; 
            }   
        break;

        case 'percent': 
            // Examples show percentages of numbers < 100 to 2 d.p
            // Examples show only 5 questions are given, so do this here also.
            num1 = getRandomNumbers(1, 100, 0, 5); // Choose 5 percentages
            num2 = getRandomNumbers(5, 100, 2, 5); // Choose 5 numbers to 2 d.p
            // As only 5 questions are shown we need to fill up the
            // questions etc. with 'blanks' first, then replace those
            // questions that have been calcualted i.e the first 5.
            for (let i = 0; i < questionCount; i++) {
                if (i > 4) {
                    num1_quest[i] = '----'; 
                    symbol[i] = '-----' ;
                    num2_quest[i] = '----' ;
                    ans[i] = 0;
                } else {
                    num1_quest[i] = num1[i];
                    symbol[i] = '%  of  ';
                    num2_quest[i] = num2[i];
                    ans[i] = (num1[i] * num2[i]) / 100;                       
                    ans[i] = Math.round(ans[i] * 10000) / 10000; // Round to 4 dp. I need this otherwise .99999999 and .000000000005 answers can occur.
                }
            }
        break;

        case 'factors':
            if (questionCount == 10) { // only show this on the 'stages' page when 10 questions are asked. For hte 'test' page we show this when the question is displayed.
                alert('Gold Stage 1 \n\nEnter 4 factors for each question.\nSeparate each one with a decimal point ');
            }
            
            let factors;
            num1b = 0;

            while (num1.length < questionCount) { // keep going unitl we have out questionCount numbers to find factors of
                num1a = getRandomNumbers(15, 99, 0, 1) // Get a random number
                num1a = num1a[0];
                if (!(num1.includes(num1a))) { // must be unique
                    factors = findFactors(num1a) // find its factors
                    if (factors.length > 3) { // If enough factors append it to num1, and add its factors to the ans variable
                        num1.push(num1a);
                        ans.push([]);
                        ans[num1.length-1] = factors;      
                    }
                }
            }

            for (let i = 0; i < questionCount; i++) {
                num1_quest[i] = '';
                symbol[i] = 'Factors of  ';
                num2_quest[i] = num1[i];
            }
        break;
    }

    //console.log(ans); // Use to check real answers
    return([num1_quest, symbol, num2_quest, ans]); 
    
}