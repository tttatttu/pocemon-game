import React from "react";
import s from "./style.module.css";
import cn from "classnames";
import Logo from "../../assets/logo1.png";
import {ReactComponent as LoginSvg} from "../../assets/login.svg";
import {ReactComponent as UserSvg} from "../../assets/user.svg";
import {useSelector} from "react-redux";
import {selectLocalID, selectUserLoading} from "../../store/user";
import {Link} from "react-router-dom";

const NavBar = ({onClickHamburg, isOpen, bgActive = false, onClickLogin}) => {
    const isLoadingUser = useSelector(selectUserLoading);
    const localID = useSelector(selectLocalID);

    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <div className={s.brand}>
                    <img className={s.logo} src={Logo} alt="logo"/>
                </div>
                <div className={s.loginAndMenu}>
                    {(!isLoadingUser && !localID) && (
                        <div className={s.loginWrap} onClick={onClickLogin}>
                        <LoginSvg/>
                    </div>
                    )}
                    {(!isLoadingUser && localID) && (
                        <Link className={s.loginWrap} to="/about">
                        <UserSvg/>
                    </Link>
                    )}
                    <div
                        className={cn(s.menuButton, {[s.active]: isOpen})}
                        onClick={onClickHamburg}
                    >
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
