import Button from "./Button.jsx";

function Book ({title, author, desc, addToCart}){

    return (
        <section className="book-card">
            <h2 className="book-card__title">{title}</h2>
            <h3 className="book-card__subtitle">{author}</h3>
            <p className="book-card__info">{desc}</p>
            <Button button="Add to Cart" onClick={addToCart}/> 
        </section>
        
    )
}

export default Book