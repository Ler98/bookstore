import { useState } from 'react';
 
function Counter(onClick) {
    
    let [count, setCount] = useState(0);


    const decrease = () => {
        if (count > 0) {
        console.log('minska')
        setCount(c => c - 1);
    }}

    const increase = () => {
        console.log('öka');
        setCount(c => c + 1);
    }

    

    return (
        <section className="counter">
            <button className="countButton" onClick={increase}>Öka</button>
            <p className="counter__number">{count}</p>
            <button className="countButton" onClick={decrease}>Minska</button>
        </section>
        //props skickas från book (onClick)
    )
    
}



export default Counter