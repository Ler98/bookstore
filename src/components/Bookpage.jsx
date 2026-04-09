import books from "../../assets/books.json";
import Header from "./Header.jsx";
import Book from './Book.jsx';
import { useState } from 'react';
import Counter from "./Counter.jsx"



function Bookpage(){
let [value, setvalue] = useState(0);
// value skapas i useState. skickas som props till Header

    return (
        <section className="bookpage">
            <section className='bookpage-wrap'>
                <Header value={value}/>
                <h1 className="bookpage-title">Bookstore</h1>
                <section className="bookpage__book-section">
                
                {books.map((book, index) => (
                    <Book //detta skickas som props till book.jsx
                    key={index}
                    title={book.title}
                    author={book.author}
                    desc={book.desc}
                    button={book.button}
                    addToCart={() => setvalue (v => v + 1)} //baserat på tidigare värde, då används denna arrow function.
                    countButton={() => setvalue (v => v + 1)}
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