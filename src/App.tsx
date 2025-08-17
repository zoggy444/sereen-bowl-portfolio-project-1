import { useState } from 'react'

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <h1>Welcome to our place !</h1>
      <h2>Log in</h2>
      <form>
        <input name='name' type='text' required
            placeholder='Enter your name...'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onSubmit={() => setUserName('')}>
        </input>
        <button type='submit' onClick={(e) => {
            e.preventDefault();
            if (userName) alert(`Hello ${userName}`)
            setUserName('');
          }}>
          Get to your space
        </button>
      </form>      
    </>
  )
}

export default App
