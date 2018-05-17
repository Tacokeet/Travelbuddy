
import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './main/user/Login';
import Profile from './main/user/Profile';

import { 
	Route,
	BrowserRouter
} from 'react-router-dom';

import Places from './places/Places';
import City   from './city/City';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
                
                <Header />
                  
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />

                <Footer />

            </div>
          </BrowserRouter>
        );
    }
}

class Home extends Component {
    state = {
        /*deze fields moeten dynamisch worden toegewezen later door een 'setstate()' met door de api binnen gehaalde info*/
        cityName: 'Groningen',
        posts: [],
        categories: ['Must see places','Entertainment','Restaurants'],
        id: "hier moet unieke waarde komen"
    }
    componentDidMount(){
        axios.get('http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907')
            .then(response => {
                this.setState({posts: response.data})
                //console.log(response.data);
            });
    }

    apirequest(){
      fetch("http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907")
          .then(response => response.json())

          .then(json => {
                  console.log(json);
              }
          );
    };



    filterHandler = () => {
        console.log("TEST");
    }
  render() {
        const posts = this.state.posts.map(post => {
            return
        });
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
		<main>
			<City cityName={this.state.cityName}/>
			<button id='filter' onClick={this.filterHandler}>filter</button>
			{textcategories}
		</main>
    );
  }
}

export default App;
