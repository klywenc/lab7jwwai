import React from 'react';
import UserInfo from './UserInfo';

const App = () => {
  return (
    <div>
      <h1>Informacje o użytkowniku</h1>
      <UserInfo name="Jan Kowalski" age={30} />
      <UserInfo name="Anna Nowak" age={25} />
    </div>
  );
};

export default App;