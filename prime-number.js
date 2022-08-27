function isPrimeNumber(num){
    // 1 and 0 is not isPrimeNumber
    if(num<=1){
      console.log(num, "is not prime number");
      return;
    }
    // 2 and greater can be tested
    
    var isPrime = true;
    
    for(let i = 2; i<num; i++){
      if(num%i==0){
        isPrime = false;
        break;
      }
    }
    
    if(isPrime){
      console.log(num, "is Prime");
    } else {
      console.log(num, "is not prime");
    }
  }
  isPrimeNumber(7)
  // for array of number use following lines
  // let myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  // myNumbers.map((ele)=>{
  //   isPrimeNumber(ele);
  // })