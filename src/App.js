import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import covidImage from './images/covid.png'

export default class App extends Component {

    state={
        data:{},
        country:''
    }

    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country);
        console.log(fetchedData); 
        this.setState({data: fetchedData, country: country})
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData});
    }
     
    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <div>
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                </div>
                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
