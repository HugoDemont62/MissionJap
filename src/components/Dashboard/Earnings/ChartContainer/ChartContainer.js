import React, { useCallback, useContext, useEffect,  useState } from "react";
import UiContext from "../../../../store/ui-context";
import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const createOptions = (uiCtx) => ({
    maintainAspectRatio: false,
    interaction: {
        mode: "index",
        intersect: false,
        axis: "x",
    },
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: false,
    },
    scales: {
        y: {
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
            ticks: {
                color: uiCtx.theme === "light" ? "#929292" : "#fff",
            },
        },
        x: {
            grid: {
                color: uiCtx.theme === "light" ? "#dddfe5" : "#26323f",
                drawBorder: false,
                borderDash: [6],
                border: false,
            },
            ticks: {
                font: {
                    family: "'Mulish', sans-serif",
                    size: "16px",
                },
                color: uiCtx.theme === "light" ? "#929292" : "#fff",
            },
        },
    },
});

const createData = () => {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
        (month) => {
            const hugo = Math.round(Math.random() * 800) + 500;
            const may = ~~(Math.random() * 1000) + 50;

            return {
                month,
                sales: Math.round(hugo / 5),
                hugo,
                may,
            };
        }
    );
};

const fetchDataFromAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(createData());
        }, 750);
    });
};

const ChartContainer = () => {
    const uiCtx = useContext(UiContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        const results = await fetchDataFromAPI();

        setData(results);
        setLoading(false);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const chartData = {
        labels: data.map(({ month }) => month),
        datasets: [
            {
                label: "Hugo",
                backgroundColor: "rgba(116,242,74,0.1)",
                borderColor: "rgb(22,213,1)",
                fill: true,
                data: data.map(({ hugo }) => hugo),
                lineTension: 0.2,
            },
            {
                label: "May",
                backgroundColor: "rgba(0,59,253,0.1)",
                borderColor: "rgba(0,62,255,0.7)",
                fill: true,
                data: data.map(({ may }) => may),
                lineTension: 0.3,
            },
        ],
    };

    if (loading) return "Loading... tralalala";

    return <Chart type="line" data={chartData} options={createOptions(uiCtx)} />;
};

export default ChartContainer;
