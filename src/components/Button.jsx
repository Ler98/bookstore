

function Button ({button, onClick}){


  
    return (
            <section className="book-card">
                <button className="book-card__button" onClick={onClick}>  {button}</button>
                
            </section>
            //props skickas från book
      
    )
} 

export default Button
