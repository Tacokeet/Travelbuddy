
import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Places from './places/Places';
import City   from './city/City';


class App extends Component {
    apirequest(){
        fetch("http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907")
            .then(response => response.json())

            .then(json => {
                    console.log(json);
                }
            )
        ;

    };

    state = {
        /*deze fields moeten dynamisch worden toegewezen later door een 'setstate()' met door de api binnengehaalde info*/
        cityName: 'Groningen',
        categories: ['Must see places','Entertainment','Restaurants']
    }
    render() {

        /* loop door alle catergories in state en maak places (div's) aan*/
        let textcategories = null
        textcategories = (
            <div>
                {this.state.categories.map((categorie) => {
                    return <Places
                        categories ={categorie}
                    />
                })}
            </div>
        );

        return (
            <div className="App">
                {this.apirequest()}
                <Header />

                <City cityName={this.state.cityName}/>

                {textcategories}

                <Footer />

            </div>
        );
    }
}

export default App;
