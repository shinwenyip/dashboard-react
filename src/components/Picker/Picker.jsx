import React, {useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './Picker.module.css';

const Picker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountriesAPI = async () => {
            const initialCountries = await fetchCountries();
            setFetchedCountries(initialCountries);
        }
        fetchCountriesAPI();
    }, [setFetchedCountries]); //only change when setfetchedcountries  change

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
                <option value="">Global</option>
                {/* loop over each country and index i */}
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
// the state of the picked country not kept in the picker component but in the app component
export default Picker;