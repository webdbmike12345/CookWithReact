import React, { useState } from 'react';
import Counter from './Counter';
import Countfunc from './Countfunc';

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState('red');


  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <Counter initialCount={4} />
      <Countfunc initialCount={4} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Tehme</button>
    </ThemeContext.Provider>

  )
}

export default App;
