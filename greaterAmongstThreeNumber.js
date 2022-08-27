function greaterAmongsThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1, "is greater");
        } else {
            console.log(num3, "is greater");
        }
    } else if (num2 > num3) {
        console.log(num2, "is greater");
    } else {
        console.log(num3, "is greater");
    }
}
// 4 , 6, 7
// 4 , 6, 5
// 5 , 3 , 6
// 5, 2 , 1
greaterAmongsThree(26, 10, 15)