import { React, useState } from 'react';
import CalcForm from './components/CalcForm';
import './App.css';


function App() {

    // created states for the behaviour of the form

    const [numb, setNumb] = useState('');           // state for input before operator
    const [cutton, setCutton] = useState('');       // state for input after operator
    const [operator, setOperator] = useState('');   // state for input operator
    const [memory, setMemory] = useState('');       // state for memory

    // Calculator keypad inputs 
    const keypadData = ['m+', 'm-', 'x^2', 'ac', 7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', '.', 0, '=', '+'];

    // function for handling button clicks
    function handleInput(value) {
        let newValue, result;

        if (value == '/' || value == 'x' || value == '-' || value == '+') {
            setNumb(cutton);
            setCutton('');
            setOperator(value);

        } else if (value == '=') {

            if (operator == '/') {
                result = Number(numb) / Number(cutton);
            } else if (operator == 'x') {
                result = Number(numb) * Number(cutton);
            } else if (operator == '-') {
                result = Number(numb) - Number(cutton);
            } else {
                result = Number(numb) + Number(cutton);
            }

            setCutton(result);
            setMemory(result);

        } else if (value == 'm+') {

            result = memory + Number(cutton);
            setCutton(result);
            setMemory(result);

        } else if (value == 'm-') {

            result = memory - Number(cutton);
            setCutton(result);
            setMemory(result);

        } else if (value == 'x^2') {

            result = Number(cutton) ** 2;
            setCutton(result);
            setMemory(result);

        } else if (value == 'ac') {
            setCutton('');
        } else {
            newValue = cutton + value;
            setCutton(newValue);
        }
    }

    // function for handling form submission
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <CalcForm handleSubmit={handleSubmit} cutton={cutton} keypadData={keypadData} handleInput={handleInput} />
        </div>
    );
}

export default App;
