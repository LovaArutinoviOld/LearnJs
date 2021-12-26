
const input_1 = document.querySelector('.input-1');
const btn_1 = document.querySelector('.btn-1');
const outValue = document.querySelector('.out-value');

btn_1.onclick = () => {
    let inputValue = +input_1.value;
    console.log(inputValue)
    if ( inputValue >= 16 && inputValue < 50){
        outValue.innerHTML = "Welcome";
    } else if ( inputValue >= 50 && inputValue < 100) {
        outValue.innerHTML = "Здарова старичок";
    } else if ( inputValue >= 100) {
        outValue.innerHTML = "Как вы до сих пор живы?";
    } else if( inputValue < 16 && inputValue > 0) {
        outValue.innerHTML = "Доступ запрешён";
    } else {
        outValue.innerHTML = "Введи нормальное значение !";
    }
}
btn_1.onclick = () => {
    let inputValue = +input_1.value;
    console.log(inputValue)
    switch (true){
        
        case inputValue >= 16 && inputValue < 50:
            outValue.innerHTML = "Welcome";
            break;
        case inputValue >= 50 && inputValue < 100:
            outValue.innerHTML = "Здарова старичок";
            break;
        case inputValue >= 100:
            outValue.innerHTML = "Как вы до сих пор живы?";
            break;
        case inputValue < 16 && inputValue > 0:
            outValue.innerHTML = "Доступ запрешён";
            break;
        default:
            outValue.innerHTML = "Введи нормальное значение !";
            break;
    }
}
    
    