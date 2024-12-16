import React from 'react';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ThemedComponent from './components/ThemedComponent';
import FocusInput from './components/FocusInput';

const App = () => {
  return (
    <div>
      <h1>Witaj w aplikacji React!</h1>
      <UserInfo name="Jan Kowalski" age={30} />
      <UserInfo name="Anna Nowak" age={25} />
      
      <Counter />
      <Timer />

      <ThemedComponent />
      <FocusInput />
    </div>
  );
};

export default App;