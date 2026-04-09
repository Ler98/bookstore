import { useState } from 'react';
import Cart  from './components/Cart.jsx';
import Bookpage from './components/Bookpage.jsx'
import LoginForm from './components/LoginForm.jsx'





function App() {
  const [activeUser, setActiveUser] = useState(null); // en tillståndsvariabel som heter activeUser och är värdet. setActiveUser är funktionen som ändrar värdet
  
  const users = [
    {
        username: 'jesper',
        password: 'jesper123',
    }
    
];

                 

  return (
    
    <section>
      {activeUser === null ? (
        <LoginForm onLogin={setActiveUser} /> //onLogin är setActiveUser med ett annat namn här i loginform
      ) : (
        <Bookpage user={activeUser}/>
      )

      }
      
      
    </section>
    
    
  )
}

export default App
