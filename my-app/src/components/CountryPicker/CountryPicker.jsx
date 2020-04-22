import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {countries} from '../../api';

export default function CountryPicker({handleCountryChange, isLight}) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async () => {
            setFetchedCountries(await countries())
        }

        fetchCountries();
    }, [setFetchedCountries]);

    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect 
            
             defaultValue="" 
             onChange={(e)=>handleCountryChange(e.target.value)}>
                <option style={{color: isLight? "#000":"#fff"}} value="">Global</option>
                {fetchedCountries.map((country, i)=>(<option key={i} value={country}>{country}</option>))}
            </NativeSelect>
        </FormControl>
    )
}
