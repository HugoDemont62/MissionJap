import React, {useContext} from "react";
import UiContext from "../../../store/ui-context";

import classes from "./CustomersList.module.scss";

import BrooklynJPG from "./../../../assets/BrooklynJPG.jpg";


const customersData = [
    {
        id: 1,
        customerName: "Hugo Demont",
        email: "hugodemont62@hotmail.fr",
        img: BrooklynJPG,
    },
    {
        id: 1,
        customerName: "May Crepel",
        email: "Mail à justifier",
        img: BrooklynJPG,
    },

];

const CustomersList = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.customerslist} ${themeClass}`}>
            <div className={classes.customerslist__header}>
                <h2 className={`${classes.customerslist__header__title} ${themeClass}`}>
                    Les contributeurs
                </h2>
            </div>
            <div className={classes.list}>
                {customersData.map(({id, customerName, email, img}) => (
                    <div className={classes.list__item} key={id}>
                        <div className={classes.list__item__img}>
                            <img
                                src={img}
                                alt={`${customerName} head shot`}
                                className={classes.img}
                            />
                        </div>
                        <div className={classes.list__item__info}>
                            <span className={`${classes.name} ${themeClass}`}>{customerName}</span>
                            <span className={`${classes.email} ${themeClass}`}>{email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersList;
