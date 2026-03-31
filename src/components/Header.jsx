import Cart from "./Cart.jsx"; 

function Header({count}){


    return (
        <header>
            <Cart count={count}/>
        </header>
                
                )
}
export default Header