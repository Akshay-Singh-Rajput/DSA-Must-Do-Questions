// program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}



convertToBinary(9);

/* The while loop is used until the number entered by the user becomes 0.

The binary value is calculated by:
bin = bin + rem * i;

STEPS :
step = 1; x = Input Number
Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}
Step 1: 9/2, Remainder = 1, Quotient = 4
Step 2: 4/2, Remainder = 0, Quotient = 2
Step 3: 2/2, Remainder = 0, Quotient = 1
Step 4: 1/2, Remainder = 1, Quotient = 0

Binary: 1001
*/