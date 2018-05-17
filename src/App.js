
import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './user/Login';
import Profile from './user/Profile';
import Settings from './user/Settings.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import ToggleDisplay from 'react-toggle-display';

import {
	Route,
	BrowserRouter
} from 'react-router-dom';

import Places from './places/Places';
import City   from './city/City';
import Modal   from './modal/Modal';



class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">

                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
				<Route path="/settings" component={Settings} />

                <Footer />

            </div>
          </BrowserRouter>
        );
    }
}

class Home extends Component {
    apirequest(){
      fetch("http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907")
          .then(response => response.json())

          .then(json => {
                  console.log(json);
              }
          );
    };

    state = {
        /*deze fields moeten dynamisch worden toegewezen later door een 'setstate()' met door de api binnen gehaalde info*/
        cityName: 'Groningen',
        categories: ['Must see places','Entertainment','Restaurants'],
        id: "hier moet unieke waarde komen",
        show: false,
        showModal: false
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    modalHandler = () => {
        this.setState({showModal: true})
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
                      click = {this.modalHandler}
                  />
              })}
          </div>
      );
    {this.apirequest()}

    let viewModal = null;
      if(this.state.showModal){
          viewModal = <Modal/>
      }
    return (
		<main>
			<City cityName={this.state.cityName}/>

            <div id={'filter'} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faFilter} />
            </div>


            <ToggleDisplay show={this.state.show}>
            <div id={'filterMenu'}>
                <p className={'filterMenuItems'}>Categorie</p>
                <p className={'filterMenuItems'}>Categorie</p>
            </div>
            </ToggleDisplay>

            {viewModal}
			{textcategories}
		</main>
    );
  }
}

export default App;
