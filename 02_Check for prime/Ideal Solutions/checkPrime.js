// program to check if a Number is prime or not

const checkPrime = (N) => {
    let isPrime = true;

    if (N === 1) {
        console.log("1 is neither prime nor composite Number.");
    }

    else if (N > 1) {

        for (let i = 2; i < N; i++) {
            if (N % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${N} is a prime Number`);
        } else {
            console.log(`${N} is a not prime Number`);
        }
    }

    else {
        console.log("The Number is not a prime Number.");
    }
};

checkPrime(13)