import React, { useContext, useState } from "react";
import UiContext from "./../../store/ui-context";
import classes from "./AppBar.module.scss";
import DashboardSVG from "./../../assets/DashboardSVG";

const initialNavList = [
    {
        id: 0,
        text: "Dashboard",
        isActive: true,
        icon: (fillColor) => <DashboardSVG fillColor={fillColor} />,
    },
];

const AppBar = () => {
    const uiCtx = useContext(UiContext);
    const [navList, setNavList] = useState(initialNavList);

    const isActiveHandler = (id) => {
        const arr = [...navList];
        const inxOfActive = arr.find((item) => item.isActive === true).id;
        arr[inxOfActive].isActive = false;
        arr[id].isActive = true;
        setNavList(arr);
    };

    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.appbar__container} ${themeClass}`}>
            <div className={classes.appbar}>
                <div className={classes.appbar__logo}>
                    <h1 className={classes.appbar__logo__title}>
                        Mission<span className={themeClass}>Japan</span>
                    </h1>
                </div>
                <ul className={classes.appbar__menu}>
                    {navList.map(({ id, text, isActive, icon }) => (
                        <li key={id} className={isActive ? classes.isActive : ""}>
                            <a
                                href={`#${text}`}
                                className={classes.link}
                                onClick={() => isActiveHandler(id)}
                            >
                                <div className={classes.link__icon}>
                                    {icon(
                                        isActive
                                            ? "#ff0000"
                                            : uiCtx.theme === "light"
                                            ? "#929292"
                                            : "#fff"
                                    )}
                                </div>
                                <span className={`${classes.link__text} ${themeClass}`}>
                                    {text}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`${classes.appbar__divider} ${themeClass}`} />
            </div>
        </div>
    );
};

export default AppBar;
