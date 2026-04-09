// import './logIn.css'
import { useState } from 'react';


function LoginForm({users, onLogin, button}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
const handleLogin =() => {
    const foundUser = users.find(
        (u) => u.username === username && u.password === password
    )
    if (foundUser) {
        onLogin(foundUser);
    }
}

// onLogin(users);

return (
    <section className='loginpage'>
        <section className='login__wrap'>
            <section className='login__card'>
                <h1>Login</h1>
                <form className='login__form'>
                    <input
                        // value={{password}}
                        type="password"
                        className='login__input'

                    />
                    <input
                        type="text"
                        className="login__input"
                        value={{users}}
                        onChange={(e) => setActiveUser(e.target.value)}/>
                        {button}
                    {/* <button onClick> Logga in</button> */}
                </form>
                

            </section>

        </section>

    </section>
)

}

export default LoginForm;