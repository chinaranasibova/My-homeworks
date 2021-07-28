const isEven = (...numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i])

        }
    }
}

isEven(1, 4, 7, 9, 10);


const isOdd = (...numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1) {
            console.log(numbers[i])

        }
    }
}

isOdd(1, 4, 7, 9, 10);


function isOddf(){
    
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 == 1) {
            console.log(arguments[i])

        }
    }    

}
isOddf(2,6,8,9,7)

let a = prompt("Eded daxil et")
function prime(number){
    let count=0;
    for (let i = 1; i <= number; i++) {
        if(number%i==0){
            count++;
        }
    }
    if(count===2){
        return true;
    }else{
        return false;
    }
}

console.log(prime(a));



