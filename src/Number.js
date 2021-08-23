import React, {useEffect, useState} from 'react';


const Number = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(3)


    const [comp, setComp] = useState(localStorage.getItem("computer") || 0)
    const [man, setMan] = useState(localStorage.getItem("person") || 0)
    const [prozent1, setProzent1] = useState(0)
    const [prozent2, setProzent2] = useState(0)
    // const [mode, setMode] = useState('')
    const [isTrue, setIsTrue] = useState(true)


    const addInput = (e) => {
        setGuess(e.target.value)
    }
    const addCheck = () => {
        if (+guess > 0 && +guess <= 10) {
            if (number !== +guess && freeAttempt -1=== 0) {
                setMessage('Вы проиграли!')
                setComp(+comp + 1)
                setProzent1((comp / man) * 100)
            } else if (number === +guess) {
                setMessage('Вы победили!')
                setMan(+man + 1)
                setProzent2((man / comp) * 100)
            }
        }
        setFreeAttempt(freeAttempt - 1)

        localStorage.setItem("computer", comp)
        localStorage.setItem("person", man)

    }
    const addNew = () => {
        setFreeAttempt(3)
        setMessage('')
        setGuess('')
        setNumber(Math.round(Math.random() * 10))
    }
    const reset = () => {
        localStorage.clear()
        setMan(0)
        setComp(0)
    }
    // const addMode = () => {
    //     if (+guess > number) {
    //         setMode('Перебор')
    //     } else if (+guess < number) {
    //         setMode('Недобор')
    //     }
    // }
    useEffect(() =>{
        if (guess!==""){
            setIsTrue(false)
        }
    },[guess])
    return (
        <div>
            <h1>Угадай число с 3-х поппыток</h1>
            <input type="number" placeholder='Введите число от 0 до 10' value={guess} onChange={addInput}/>
            <button onClick={addCheck} disabled={isTrue}>Check</button>
            <button onClick={addNew}>New game</button>
            <button onClick={reset}>Сброс очков</button>
            {
                Boolean(!message) && <div>У вас осталось {freeAttempt} {freeAttempt === 1 ? 'попытка' : 'попытки'}</div>
            }
            <p>{message}</p>
            <p>Компьютер:{comp}</p>
            <p>Игрок:{man}</p>
            <div>Процент побед: <br/>
                <span>Компьютер:{prozent1}%</span> <br/><span>Игрок:{prozent2}%</span>
            </div>
            {/*<div>Подсказка:{mode}</div>*/}

        </div>
    );
};

export default Number;