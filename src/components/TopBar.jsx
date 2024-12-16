import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="center topbar">
            <ul className="topbar__list">
                <li className="topbar__list-item">
                    <Link to={'#'}>Ваши грузы</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Добавить грузы</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Найти грузы</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Ваши машины</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Добавить машины</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Найти машины</Link>
                </li>
                <li className="topbar__list-item">
                    <Link to={'#'}>Заказы</Link>
                </li>
            </ul>
            <div className="topbar__buttonBox">
                <button className="topbar__buttonBox-btn" type="button">Войти</button>
                <button className="topbar__buttonBox-btn" type="button">Зарегистрироваться</button>
            </div>
        </div>
    )
};

export default TopBar;