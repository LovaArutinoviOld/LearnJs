const input1 = document.querySelector('.i-1');
const input2 = document.querySelector('.i-2');

const checkbox1 = document.querySelector('.c-1');
let a = 0,
    b = 0,
    c = 0;

input1.onkeypress = function (event){
    console.log('Press')

    console.log('----------')

    console.log('charCode: ' + event.charCode)
    console.log('code: ' + event.code)
    console.log('key:  ' + event.key)
    console.log('keyCode: ' + event.keyCode)
    console.log(event)
    a++
    console.log(a,b,c)
}

input1.onkeydown = function (event){
    console.log('down')

    console.log('----------')

    console.log('charCode: ' + event.charCode)
    console.log('code: ' + event.code)
    console.log('key:  ' + event.key)
    console.log('keyCode: ' + event.keyCode)
    console.log(event)
    if(event.key == 'CapsLock'){
        checkbox1.checked = true;
    }else{
        checkbox1.checked = false;
    }
    b++
    console.log(a,b,c)
}


input1.onkeyup = function (event){
    console.log('down')

    console.log('----------')

    console.log('charCode: ' + event.charCode)
    console.log('code: ' + event.code)
    console.log('key:  ' + event.key)
    console.log('keyCode: ' + event.keyCode)
    console.log(event)
    if(event.key == 'CapsLock'){
        checkbox1.checked = true;
    }else{
        checkbox1.checked = false;
    }
    c++
    console.log(a,b,c)
}

input2.onkeypress = function (event){
    console.log('Press')

    console.log('----------')

    console.log('charCode: ' + event.charCode)
    console.log('code: ' + event.code)
    console.log('key:  ' + event.key)
    console.log('keyCode: ' + event.keyCode)
    const a = {
        q : 'w',
        w : 'e',
    }
    input2.value += a[event.key]
    return false
}