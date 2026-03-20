import style from './Exo03.module.css'
import { useState } from "react"

export default function Exo03(){

    const [count, setCount] = useState(0);
    const handleIncr = ()=>{
        setCount(currentCount => currentCount +1)
    }
    const handleReset =()=>{
        setCount(0);
    }

    return (
        <>
        <p>Compter: {count}</p>
        <div className={style['div']}>
            <button onClick={handleIncr}>+1</button>
            {' '}
            {count !==0 && (

            <button onClick={handleReset}>Reset</button>
            )}
        </div>
        </>
    )
}