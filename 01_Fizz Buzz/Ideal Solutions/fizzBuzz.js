// Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz” instead of the number, for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"

const FizzBuzz = (N) => {
    for (let i = 1; i <=N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");

        }
        else if (i % 3 === 0) {
            console.log("Fizz");

        }
        else if (i % 5 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);
        }
    }
};

FizzBuzz(3);