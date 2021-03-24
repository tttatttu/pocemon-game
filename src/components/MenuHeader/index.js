import React, {useState} from "react";
import {NotificationManager} from 'react-notifications';

import LoginForm from "../LoginForm";
import Menu from "../Menu";
import Modal from "../Modal";
import NavBar from "../NavBar";
import {useDispatch} from "react-redux";
import {getUserAsync, getUserUpdateAsync} from "../../store/user";

const loginSignupUser = async ({email, password, type}) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
        })
    }

    switch (type) {
        case 'signup':
            // return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws', requestOptions).then(res => res.json());
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws', requestOptions).then(res => res.json());
        case 'login':
            // return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws', requestOptions).then(res => res.json());
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws', requestOptions).then(res => res.json());
        default:
            return "I can not login user"
    }

}

const MenuHeader = ({bgActive}) => {
    const [isOpen, setOpen] = useState(null);
    const [isOpenModal, setOpenNodal] = useState(false);
    const dispatch = useDispatch();

    const handleClickHamburg = () => {
        setOpen((prevState) => !prevState);
    };

    const handleClickLogin = () => {
        setOpenNodal((prevState) => !prevState);
    };

    const handleSubmitLoginForm = async (props) => {
        const response = await loginSignupUser(props)

        if (response.hasOwnProperty('error')) {
            NotificationManager.error(response.error.message, 'Wrong!');
        } else {
            if (props.type === 'signup') {
                const pokemonsStart = await fetch('https://reactmarathon-api.herokuapp.com/api/pokemons/starter').then(res => res.json())
                console.log('pokemonsStart', pokemonsStart);

                for (const item of pokemonsStart.data) {
                    await fetch(`https://pocemon-game-default-rtdb.firebaseio.com/${response.localId}/pokemons.json?auth=${response.idToken}`, {
                        method: 'POST',
                        body: JSON.stringify(item)
                    })
                }
            }
            localStorage.setItem('idToken', response.idToken);
            NotificationManager.success('Success message');
            dispatch(getUserUpdateAsync())
            handleClickLogin()
        }
    };

    return (
        <>
            <Menu onClickMenu={handleClickHamburg} isOpen={isOpen}/>
            <NavBar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickHamburg={handleClickHamburg}
                onClickLogin={handleClickLogin}
            />

            <Modal
                isOpen={isOpenModal}
                title="Log in..."
                onCloseModal={handleClickLogin}
            >
                <LoginForm isResetField={!isOpenModal} onSubmit={handleSubmitLoginForm}/>
            </Modal>
        </>
    );
};

export default MenuHeader;
