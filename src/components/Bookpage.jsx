import books from "../../assets/books.json";
import Header from "./Header.jsx";
import Book from './Book.jsx';
import { useState } from 'react';



function Bookpage(){
let [count, setCount] = useState(0);
// console.log(count)

    return (
        <section className="bookpage">
            <section className='bookpage-wrap'>
                <Header count={count}/>
                <h1 className="bookpage-title">Bookstore</h1>
                <section className="bookpage__book-section">
                
                {books.map((book, index) => (
                    <Book 
                    key={index}
                    title={book.title}
                    author={book.author}
                    desc={book.desc}
                    button={book.button}
                    addToCart={() => setCount (prev => prev + 1)}
                    />
                    
                ))}
                
                </section>
            </section>
            
        </section>
    )
}

export default Bookpage



// data skickas till book
//varje object i arrayen skickas till book som props, och Book bestämmer hur det ska visas.

//map = går igenom arrayn och skapar något nytt för varje element.
// Tar varje värde (book, index), gör något med det och returnerar en ny lista
//Tar första boken --> skapar <book/> och gör samma med alla böcker.