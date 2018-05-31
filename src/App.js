
import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './Responsive.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './user/Login';
import Profile from './user/Profile';
import AddEvent from './user/AddEvent';
import Places from './places/Places';
import City   from './city/City';
import Modal   from './modal/Modal';
import Map   from './map/Map';
import Search   from './search/Search.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import ToggleDisplay from 'react-toggle-display';

import logo1 from './images/1.jpg';
import logo2 from './images/2.jpg';
import logo3 from './images/3.jpg';
import logo4 from './images/4.jpg';

import {
	Route,
	BrowserRouter
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">

                <Header />
			
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/profile" component={Profile} />
				<Route path="/addEvent" component={AddEvent} />
				<Route path="/search" component={Search} />

                <Footer />

            </div>
          </BrowserRouter>
        );
    }
}

class Home extends Component {
    state = {
        region_name: ' ',
        counter: 0,
        text: ' ',
        city: '',
        continent_name: ' ',
        latitude: ' ',
        longitude: ' ',
        wikitext: ' ',
        calling_code: ' ',
        gpsCity: '',
        country_name: ' ',
        lat: null,
        lon: null,
        name: ' ',
        categories: ['restaurant','supermarket','restaurant'],
        id: "hier moet unieke waarde komen",
        show: false,
        photos: [logo1,logo2,logo3,logo4],
        query: "",
        range: "5000",
    };


    componentDidMount(){

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        })



        
        var proxy  = 'https://cors-anywhere.herokuapp.com/';
        axios.get('http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907')
            .then(response => {
                this.setState({ continent_name: response.data.continent_name,
                                country_name: response.data.country_name,
                                region_name: response.data.region_name,
                                city: response.data.city,
                                name: response.data.location.languages[0].name,
                                country_flag: response.data.location.country_flag,
                                calling_code: response.data.location.calling_code,
                                longitude: response.data.longitude,
                                latitude: response.data.latitude});

                if (this.state.lat != null){
                    this.setState({
                        latitude: this.state.lat,
                        longitude: this.state.lon
                    })
                }
                console.log('LAT',this.state.latitude)
                console.log('LON',this.state.longitude)
                // let places = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
                //     + this.state.latitude + ',' + this.state.longitude;
                // this.setState({query: places})
                var locationURL  =  'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyCRNHsASJT7nxChb3zBLeH2hGJdZGMIZGQ'
                axios.get(locationURL)
                    .then(location => {
                        this.setState({gpsCity: location.data.results[0].address_components[2].long_name});
                        console.log(location.data)
                        if (this.state.gpsCity){
                            this.setState({
                                city: this.state.gpsCity
                            })
                            var url = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + this.state.city;
                            axios.get(proxy + url)
                                .then(wiki => {
                                    this.setState({text: wiki.data});
                                    this.setState({wikitext: wiki.data[2][0]})
                                    console.log(wiki.data)
                                    console.log(wiki.data[2][0])
                                });

                        }
                    });


            });

    }


    handleClick = () => {
        this.setState({
            show: !this.state.show
        });
    };

    modalHandler = () => {
        this.setState({showModal: true})
    };

    hideModal = () => {
        this.setState({showModal: false})
    };

    radiusHandler = (e) => {
        this.setState({
            range: e.target.value
        })
    };



  render() {
       /* loop door alle catergories in state en maak places (div's) aan*/
      let textcategories = null;

      textcategories = (
          <div>
              {this.state.categories.map((categorie,index) => {
                  let rand = Math.floor(Math.random() * 3);
                  if (this.state.query) {
                      return <Places
                          categories ={categorie}
                          key={this.state.id + index}
                          click = {this.modalHandler}
                          photo = {this.state.photos}
                          index = {index}
                          query = {this.state.query}
                          range = {this.state.range}
                      />
                  }
              })}
          </div>
      );



    let viewModal = null;
      if(this.state.showModal){
          viewModal = <Modal
              click={this.hideModal}
              photo = {this.state.photos}
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}

          />

      }

      let viewMap = null;
          viewMap = <Map
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}
          />



    return (
		<main>


			<City city={this.state.city} wikitext={this.state.wikitext} name={this.state.name}
                  continent_name={this.state.continent_name} country_flag={this.state.country_flag}
                  calling_code={this.state.calling_code} region_name={this.state.region_name}
                  country_name={this.state.country_name}/>

            <div id={'filter'} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faFilter} />
            </div>

            <div onClick={this.modalHandler}>
                <p>Some Test</p>
            </div>


            <ToggleDisplay show={this.state.show}>
            <div id={'filterMenu'}>
                <p className={'filterMenuItems'}>Range</p>
                <p className={'filterMenuItems'}><input type="radio" name="range"  value="5000" onChange={this.radiusHandler} />5 km</p>
                <p className={'filterMenuItems'}><input type="radio" name="range"  value="10000" onChange={this.radiusHandler} />10 km</p>
                <p className={'filterMenuItems'}><input type="radio" name="range"  value="15000" onChange={this.radiusHandler} />15 km</p>
                <p className={'filterMenuItems'}><input type="radio" name="range"  value="20000" onChange={this.radiusHandler} />20 km</p>
                <p className={'filterMenuItems'}><input type="radio" name="range"  value="25000" onChange={this.radiusHandler} />25 km</p>
            </div>
            </ToggleDisplay>

            {viewModal}
            {viewMap}
			{textcategories}
		</main>
    );
  }
}

export default App;
