import React, { useContext } from "react";
import UiContext from "./../../../../store/ui-context";

import classes from "./SalesTable.module.scss";

const productSalesData = [
    {
        id: 1,
        Name: "Hugo D",
        idCollaborateur: 1,
        date: "30/01/2023",
        amount: "415.01",
        status: true,
    },
    {
        id: 2,
        Name: "May C",
        idCollaborateur: 2,
        date: "30/01/2023",
        amount: "326.51",
        status: false,
    },
];

const SalesTable = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <table className={`${classes.table} ${themeClass}`}>
            <thead>
                <tr className={`${classes.table__head} ${themeClass}`}>
                    <th>Nom</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {productSalesData.map(({ id, Name, date, amount, status }) => (
                    <tr key={id}>
                        <td>
                            <span>{Name}</span>
                        </td>
                        <td>{date}</td>
                        <td>{amount}</td>
                        <td style={status ? { color: "#33c863" } : { color: "#eb5757" }}>
                            {status ? "En plus" : "En moins"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalesTable;
