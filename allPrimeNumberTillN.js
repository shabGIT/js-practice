function isNumPrime(num) {
    if (num <= 1) {
        //console.log(num,"is not prime Number")
        return
    }
    isPrime = true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }


    if (isPrime) {
        //console.log(num,"is Prime Number")
        console.log(num)
    }
    // else {
    //     console.log(num,"is not Prime Number")
    // }

}

// isNumPrime(6)
for (let j = 2; j <= 100; j++) {
    isNumPrime(j)
}