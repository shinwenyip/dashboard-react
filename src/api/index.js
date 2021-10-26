import axios from 'axios';
import Papa from "papaparse";
const url = 'https://covid19.mathdro.id/api';
const cases_msia_url = 'https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv'

export const fetchData = async(country) => {
    let changeableUrl = url;
    if (country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl); // data destructuring js

        return { confirmed, recovered, deaths, lastUpdate };
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
        console.log(data);
        // return data;
        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date })); //left name is used
    }catch(error){
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country) => country.name );
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyNew = async () => {
    try {
        const dailyNew = axios.get(cases_msia_url).then(response => Papa.parse(response.data, {header: true}));
        console.log(dailyNew);
        return dailyNew.map(({ date, cases_new }) => ({date, cases:cases_new}));
    }catch(error){
        console.log(error);
    }
}