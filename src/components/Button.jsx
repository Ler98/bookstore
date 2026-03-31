

function Button ({button, onClick}){

    // let [count, setCount] = useState(0);

    // const addButton = () => {
    //     console.log('du la till');
    //     setCount(count += 1);
    // }
  
    return (
            <section className="book-card">
                <button className="book-card__button" onClick={onClick}>  {button}</button>
            </section>
      
    )
} 

export default Button


// let öka = true
// let klickadButton = öka ? "Du la till" : "Du tog bort"
// console.log(öka)