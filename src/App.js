import { Cards, Chart, Picker } from './components';
import Topbar from "./components/topbar/Topbar"
// import Sidebar from "./components/sidebar/Sidebar"
import { fetchData, fetchDailyNew } from './api';
import "./app.css";
import React from 'react';
// import covidImg from './image/image.png';
 
class App extends React.Component {
  state = {
    data: {},
    country: '', 
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // const dailyNew = await fetchDailyNew();
    // dailyNew.then(res => {
    //   console.log(res);
    // });
  }

  handleCountryChange = async (country) => { //pass to picker as props
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
    //fetch the data
    //set the state
  }
  render() {
    const { data, country } = this.state;
    console.log(data);
    return (
      <div className="App">
        <Topbar/>
        <div className="container">
          {/* <img src={covidImg}/> */}
          <Cards data={ data } /> 
          <Picker handleCountryChange={this.handleCountryChange}/>
          <Chart data={ data } country={ country }/>
        </div>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Topbar/>
//       <div className="container">
//         {/* <Sidebar/>
//         <div className="others"> */}
//           <Cards />
//           <Picker />
//           <Chart />
//         </div>
//       </div>  
//     // </div>
//   );
// }

export default App;
