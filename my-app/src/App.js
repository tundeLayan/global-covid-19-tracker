import React, { Component } from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component{

  state = {
    data: {},
    country:'',
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data: fetchedData, country: country});
  }

 async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData })
  }
  render(){
    const {data, country} = this.state;
    // console.log(data);
    return(
      <div className={styles.container}>
        <h3 className={styles.image}>COVID-19 TRACKER</h3>
        <Cards data={data} country={country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart country={country} data={data}/>
      </div>
      
    )
  }
}

export default App;
