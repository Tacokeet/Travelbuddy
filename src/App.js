
import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './user/Login';
import Profile from './user/Profile';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import ToggleDisplay from 'react-toggle-display';

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
        region_name: ' ',
        text: ' ',
        city: ' ',
        continent_name: ' ',
        name: ' ',
        categories: ['Must see places','Entertainment','Restaurants'],
        id: "hier moet unieke waarde komen",
        show: false
    }
    componentDidMount(){
        axios.get('http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907')
            .then(response => {
                this.setState({continent_name: response.data.continent_name})
                this.setState({region_name: response.data.region_name})
                this.setState({city: response.data.city})
                this.setState({name: response.data.location.languages[0].name})
                console.log(response.data)
            });
        axios.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=Groningen')
            .then(wiki => {
            this.setState({text: wiki.data})
            console.log(wiki.data[2][1])
        });
    }



    handleClick = () => {
        this.setState({
            show: !this.state.show
        });
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
		<main>

			<City region_name={this.state.region_name}/>

            <div id={'filter'} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faFilter} />
            </div>


            <ToggleDisplay show={this.state.show}>
            <div id={'filterMenu'}>
                <p className={'filterMenuItems'}>Categorie</p>
                <p className={'filterMenuItems'}>Categorie</p>
            </div>
            </ToggleDisplay>


			{textcategories}
		</main>
    );
  }
}

export default App;
