import logo from './logo.svg';
import './App.css';
import Foo from './components/Foo';
import { useState } from 'react';
import AppContext from './context/appContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const appContextObj = {
    loggedIn: isLoggedIn,
    setLoggedIn: setIsLoggedIn,
    // temp: 'this is just a string',
    // tempArray: ['apple', 'pears']
  };

  return (
    // we give data to the box (value)
    <AppContext.Provider value={appContextObj}>
      {/* All components in the provider sandwich can access the value */}
      <Foo />
    </AppContext.Provider>
  );
}

export default App;
