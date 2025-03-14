function appendValue(value) {
    let display = document.getElementById('display');
    
    if (value === 'DEL') {
        display.value = display.value.slice(0, -1);
    } else if (value === 'Ans') {
        display.value += localStorage.getItem('lastResult') || '';
    } else if (value === 'EXP') {
        display.value += 'e';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        localStorage.setItem('lastResult', result);
    } catch (error) {
        alert('Invalid Input');
    }
}
