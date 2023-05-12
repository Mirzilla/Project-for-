import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserWiki from "./wiki/UserWiki";
import HeroWiki from "./wiki/HeroWiki";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserWiki(),
        hero: new HeroWiki(),
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);