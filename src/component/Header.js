import { useState, } from "react";
import '../style/header.css';

const Header = ({ data, filterRes, showfav, refreshUI, handleSort }) => {
    let [val, setVal] = useState("");

    const handleChange = (e) => {
        setVal(e.target.value);
        filterRes(e.target.value)
    }

    const handleFav = () => {
        showfav();
    };

    const handleBack = () => {
        refreshUI();
    };

    const handleSort1 = () => {
        handleSort();
    };

    return (
        <div className="header__main">
            {data.length < 6 &&
                <span onClick={handleBack} className="detail__image__icon_left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2 12H5" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.5 18.5L5 12L11.5 5.5" stroke="#1A1A1A" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></span>}
            <input className="header__type" type="text" placeholder="Search Hotel..." onChange={handleChange} value={val} />
            <div className="header__fav_p">
                <span className="header__fav" onClick={handleFav}>Favorites</span>
                <span className="header__fav" onClick={handleSort1}>Sort</span>
            </div>
        </div>
    )
};

export default Header;