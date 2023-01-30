import React, { useContext } from "react";
import UiContext from "../../../store/ui-context";

import classes from "./Earnings.module.scss";

import ArrowDownSVG from "../../../assets/ArrowDownSVG";
import ChartContainer from "./ChartContainer/ChartContainer";

const Earnings = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.earnings} ${themeClass}`}>
            <div className={classes.earnings__headline}>
                <h2 className={`${classes.earnings__headline__title} ${themeClass}`}>Courbes</h2>
            </div>
            <div className={classes.earnings__chart}>
                <ChartContainer />
            </div>
        </div>
    );
};

export default Earnings;
