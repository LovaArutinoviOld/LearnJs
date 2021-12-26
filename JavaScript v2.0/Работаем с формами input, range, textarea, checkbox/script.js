document.querySelector('#btn1').onclick = () => {
    console.log(document.querySelector('#input1').value)
}
document.querySelector('#btn2').onclick = () => {
    document.querySelector('#btn2').style.backgroundColor =
        document.querySelector('#input2').value
}
document.querySelector('#btn3').onclick = () => {
    console.log(document.querySelector('#input3').value)
}
document.querySelector('#input4').oninput = () => {
    document.querySelector('#span4').innerHTML =
        document.querySelector('#input4').value
}
document.querySelector('#button5').onclick = () => {
    let checkbox5 = document.querySelector('#input5')
    console.log(checkbox5.checked)
    if (checkbox5.checked) {
        console.log("checked")
    } else {
        console.log(" don't checked")
    }
}
document.querySelector('#label5').onmouseover = () => {
    document.querySelector('#label5').style.cursor = 'pointer';
}
document.querySelector('#button6').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#textarea6');
    // console.log(text.value)
    // text.value = '';
    // text.placeholder = 'some text...'
    let form = document.querySelector('#form');
    console.log(form.elements.textarea66)
    console.log(form.elements.input66)
}