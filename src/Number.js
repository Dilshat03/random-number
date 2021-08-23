import React, {useState, useEffect} from 'react';


const Number = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(3)


    const [comp, setComp] = useState(localStorage.getItem("computer") || 0)
    const [man, setMan] = useState(localStorage.getItem("person") || 0)
    const [prozent1, setProzent1] = useState(0)
    const [prozent2, setProzent2] = useState(0)
    const [mode, setMode] = useState('')


    const addInput = (e) => {
        setGuess(e.target.value)
    }
    const addCheck = () => {
        setFreeAttempt(freeAttempt - 1)
    }
    useEffect(() => {
        localStorage.setItem("computer", comp)
        localStorage.setItem("person", man)
    }, [message])

    useEffect(() => {
        if (+guess > 0 && +guess <= 10) {
            if (number !== +guess && freeAttempt === 0) {
                setMessage('Вы проиграли!')
                setComp(+comp + 1)
                setProzent1((comp / man) * 100)
            } else if (number === +guess) {
                setMessage('Вы победили!')
                setMan(+man + 1)
                setProzent2((man / comp) * 100)
            }
        }
    }, [freeAttempt])
    // setFreeAttempt(0)


    const addNew = () => {
        setFreeAttempt(3)
        setMessage('')
        setGuess('')
        setNumber(Math.round(Math.random() * 10))
    }
    const reset = () => {
        localStorage.clear()
        localStorage.setItem('computer',0)
    }
    const addMode = () => {
        if (+guess > number) {
            setMode('Перебор')
        } else if (+guess < number) {
            setMode('Недобор')
        }
    }
    return (
        <div>
            <h1>Угадай число с 3-х поппыток</h1>
            <input type="number" placeholder='Введите число от 0 до 10' value={guess} onChange={addInput}/>
            <button onClick={addCheck} disabled={!freeAttempt}>Check</button>
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
            <div>Подсказка:{mode}</div>
            <div className="form-check form-switch">
                <input onClick={addMode} className="form-check-input" type="checkbox" id="inset"/>
                <label defaultChecked={addMode} onClick={addMode} className="form-check-label">Inset</label>
            </div>

        </div>
    );
};

export default Number;