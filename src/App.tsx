import './App.scss';
import RoutesPage from './routes/routes';
import { TokenContext } from './Context/TokenContext';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

function App() {

  const [token, setTokenState] = useState(localStorage.getItem('token'));

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    window.localStorage.setItem('token', newToken);
  }
  
  return (
    <>
    <RecoilRoot>
    <TokenContext.Provider value={{ token, setToken }}>
      <RoutesPage />
    </TokenContext.Provider>
    </RecoilRoot>
    </>
  );
}


export default App;
