// program to generate fibonacci series up to n terms

const fibonacci = (n) => {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}  

console.log(fibonacci(10));