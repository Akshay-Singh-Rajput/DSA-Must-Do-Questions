/* 
Take the binary string.
Starting from the left, double your previous total and add the current digit.
Double your current total and add the next leftmost digit.
Repeat the previous step until you have gone through the entire string.
*/
function toDecimal(v) {
    let binary = '';
    if (typeof v == 'string') {
        binary = v.split();
    } else {
        binary = v.toString().split();
    }
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal = (decimal * 2) + binary[ i ];
    }
    return decimal;
}
let v = 101010 //42
toDecimal(v)
/*
Here's what the procedure looks like with 101010:;

101010;
101010 => 0 + 1 == 1;
1 * 2 + 0 == 2;
2 * 2 + 1 == 5;
5 * 2 + 0 == 10;
10 * 2 + 1 == 21;
21 * 2 + 0 == 42;

*/