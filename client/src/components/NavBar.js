import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, WIKI_ROUTE, MODE_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('token');
        user.setUser({});
        user.setIsAuth(false);
    };
console.log(user)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={WIKI_ROUTE}>ВІКІ</NavLink>
                <NavLink style={{color:'white'}} to={MODE_ROUTE}>РЕЖИМИ</NavLink>
                {user.isAuth ? (
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            {user.user.role === 'ADMIN' ?
                                <Button
                                    variant={"outline-light"}
                                    onClick={() => history.push(ADMIN_ROUTE)}
                                    style={{marginRight:"20px"}}
                                >
                                    Адмін панель
                                </Button> : null}
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="ml-4"
                            >
                                Вийти
                            </Button>
                        </Nav>
                    )
                    : (
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                        </Nav>
                    )

                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
