import './App.scss';
import RoutesPage from './routes/routes';
import { TokenContext } from './Context/TokenContext';
import { useState } from 'react';

function App() {
  const [token, setTokenState] = useState(localStorage.getItem('token'));

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    window.localStorage.setItem('token', newToken);
  };

  return (
    <>
      <TokenContext.Provider value={{ token, setToken }}>
        <RoutesPage />
      </TokenContext.Provider>
    </>
  );
}

export default App;
