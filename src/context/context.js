import React from 'react';

const MyContext = React.createContext({
    contextData: {
        favArr: [],
    }
});

export default MyContext;