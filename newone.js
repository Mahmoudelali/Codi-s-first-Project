let a = 0;
let b = 0;
let c = 0;

for (let i = 0; i < 999; i++) {
    a++;
    if (a > 9) {
        a = 0;
        b++;
        if (b > 9) {
            c++;
            a = 0;
            b = 0;
        }
    }
    console.log(c, b, a);
}
