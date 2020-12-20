let vezes = 0;

while(new Date().getSeconds() > 30) {
    console.log( new Date().getSeconds())
    if (new Date().getSeconds() === 59) {
        vezes++
    }
}

console.log("TERMINOU", "segundo:", new Date().getSeconds(), `Vezes: ${vezes}`)


do {
    console.log( new Date().getSeconds())
    if (new Date().getSeconds() === 59) {
        vezes++
    }
} while(new Date().getSeconds() > 30)