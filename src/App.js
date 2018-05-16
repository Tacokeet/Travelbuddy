
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


    apirequest(){
        fetch("http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907")
            .then(response => response.json())

            .then(json => {
                    console.log(json);
                }
            )
        ;

    };


    filterHandler = () => {
        console.log("TEST");
    }
    render() {

       /* loop door alle catergories in state en maak places (div's) aan*/
      let textcategories = null
      textcategories = (
          <div>
              {this.state.categories.map((categorie,index) => {
                  return <Places
                      categories ={categorie}
                      key={this.state.id + index}
                  />
              })}
          </div>
      );

        return (
            <div className="App">
                {this.apirequest()}
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
