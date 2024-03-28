//fibanacii series 1st two are 1 and then (n-1) + (n-2)

const fib = (n) => {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}
for (i = 0; i <= 9; i++) {
    console.log(fib(i))
}