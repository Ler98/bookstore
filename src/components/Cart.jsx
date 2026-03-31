
function Cart({count}) {
    console.log(count)

    return (
        <section className="cart">
            <h1 className="cart__title">cart</h1>
            <p className="cart__number">{count}</p>
        </section>
        
    )
    
}



export default Cart