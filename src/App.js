
import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Places from './places/Places';
import City   from './city/City';


class App extends Component {
    state = {
        /*deze fields moeten dynamisch worden toegewezen later door een 'setstate()' met door de api binnen gehaalde info*/
        cityName: 'Groningen',
        categories: ['Must see places','Entertainment','Restaurants'],
        id: "hier moet unieke waarde komen"
    }

    filterHandler = () => {
        console.log("TEST");
    }

  render() {

       /* loop door alle catergories in state en maak places (div's) aan*/
      let textcategories = null
      textcategories = (
          <div>
              {this.state.categories.map((categorie) => {
                  return <Places
                      categories ={categorie}
                      key={this.state.id}
                  />
              })}
          </div>
      );

    return (
      <div className="App">
	  
		<Header />
		
		<City cityName={this.state.cityName}/>

        <button id={'filter'} onClick={this.filterHandler}>filter</button>

        {textcategories}

		<Footer />
		
      </div>
    );
  }
}

export default App;
