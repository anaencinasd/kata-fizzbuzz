const FizzBuzz = require("../fizzBuzz")

describe ("Comprobar que cuando el número tiene múltiplos comunes a 3 y 5 el resultado es FizzBuzz", ()=>{
    test ("caso 1: devuelve Fizz cuando el número es divisible por 3", () =>{
        const fizz_buzz = new FizzBuzz();
        let number = 21;
        let expected_result = "Fizz"

        const result = fizz_buzz.retornar_fizz_buzz(number);

        expect (result).toBe(expected_result)
    })

    test ("caso 2: devuelve Buzz cuando el número es divisible por 5", () =>{
        const fizz_buzz = new FizzBuzz(); 
        let number = 20;
        let expected_result = "Buzz";

        const result = fizz_buzz.retornar_fizz_buzz(number);
        expect (result).toBe(expected_result)
    })

    test ("caso 3: devuelve FizzBuzz cuando el número es divisible por 5 y por 3", () =>{
        const fizz_buzz = new FizzBuzz(); 
        let number = 15;
        let expected_result = "FizzBuzz";

        const result = fizz_buzz.retornar_fizz_buzz(number);
        expect (result).toBe(expected_result)
    })
})


