let a = 2;
a = a * 5;


try {
    document.querySelector('.out').innerHTML = a;
} catch (error) {
    console.log(error)
}
finally {
    f1()
}
console.log(a);

function f1() {
    console.log('hello')
}