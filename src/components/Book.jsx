import Button from "./Button.jsx";
import Counter from "./Counter.jsx";

function Book ({title, author, desc, addToCart, countButton}){

    return (
        <section className="book-card">
            <h2 className="book-card__title">{title}</h2>
            <h3 className="book-card__subtitle">{author}</h3>
            <p className="book-card__info">{desc}</p>
            <Button button="Add to Cart" onClick={addToCart}/> 
            <Counter button="Hello" onClick={countButton}/> 
        </section>
        //props från bookpage.jsx
        //props skickas även till button och counter
    )
}

export default Book