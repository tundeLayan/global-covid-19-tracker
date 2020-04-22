import React, { Component } from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import cx from 'classnames';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component{
  state = {
    data: {},
    country:'',
    isLight: true,
  }
 

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data: fetchedData, country: country});
  }

  handleToggle = ()=>{
    this.setState({ isLight: !this.state.isLight});
  }

 async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData })
  }
  render(){
    const {data, country, isLight} = this.state;
    
    // console.log(data);
    return(
      
        <div className={isLight ? cx(styles.container, styles.light) : cx(styles.container, styles.dark)}>
        <span className={styles.header}>
        <h3 className={styles.image}>COVID-19 TRACKER</h3>
        <div className={styles.toggleIcon} onClick={this.handleToggle}>
        {!isLight ?<Brightness7Icon /> : <Brightness4Icon/>}
        <span class={styles.tooltiptext}>Toggle light/dark theme</span>
        </div>
        </span>

        <Cards  data={data} country={country} theme={isLight} />
        <CountryPicker handleCountryChange={this.handleCountryChange} theme={isLight}/>
        <Chart country={country} data={data}/>
      </div>
      
      
    )
  }
}

export default App;
