import Cart from "./Cart.jsx"; 

function Header({value}){


    return (
        <header>
            <Cart count={value}/>
        </header>
                
                )
}
export default Header