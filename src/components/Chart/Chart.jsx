import React, {useEffect, useState} from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart() {
    const [dailyData, setDailyData] = useState({});

    useEffect(()=>{
        const fetchAPI = async()=>{
            const dailyData = await fetchDailyData();  
            setDailyData(dailyData);
        }
        fetchAPI();
    });

    const lineChart=(
        dailyData[0] ? <Line
            data={{
                labels: '',
                datasets:[{},{}],
            }}
        />
        : null
    )

    return (
        <div>
            Chart
        </div>
    )
}

export default Chart
