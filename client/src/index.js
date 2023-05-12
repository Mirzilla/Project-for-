import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserWiki from "./wiki/UserWiki";
import HeroWiki from "./wiki/HeroWiki";
import ModeWiki from "./wiki/ModeWiki";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserWiki(),
        hero: new HeroWiki(),
        mode: new ModeWiki(),
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);