

function Book ({title, author, desc, button}){

    return (
        <section className="book-card">
            <h2 className="book-card__title">{title}</h2>
            <h3 className="book-card__subtitle">{author}</h3>
            <p className="book-card__info">{desc}</p>
            <button className="book-card__button">{button}</button>
            
        </section>
    )
}

export default Book