import React from 'react';

// Komponent funkcjonalny, który przyjmuje dane o użytkowniku poprzez props
const UserInfo = ({ name, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Wiek: {age} lat</p>
        </div>
    );
};

export default UserInfo;