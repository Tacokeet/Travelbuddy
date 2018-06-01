import React, { Component } from 'react';
import './Profile.css';
import logo1 from '../images/4.jpg';
import logo2 from '../images/3.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import xIcon from '@fortawesome/fontawesome-free-solid/faTimes'
import deleteIcon from '@fortawesome/fontawesome-free-regular/faTimesCircle'

import solidStar from '@fortawesome/fontawesome-free-solid/faStar'
import regularStar from '@fortawesome/fontawesome-free-regular/faStar'

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {		
		return (
			<main>
				<div id="profileWrapper">				
					<Favorites />
					<Preferences />
					<Settings />
				</div>
			</main>
		);
	}
}

class Favorites extends Component {

	constructor(props) {
		super(props)

        this.state = {
            favorites: [
                {name: "Cantina Mexicana",
                    image: logo1,
                    location: "Groningen",
                    rating: 4},
                {name: "Groninger Museum",
                    image: logo2,
                    location: "Groningen",
                    rating: 5},
            ],
        }

	}

    removeFavorite(index) {
        let array = this.state.favorites;
        array.splice(index, 1);
        this.setState({
            favorites: array
        });
    }

	render() {
		return (
			<div id="favorites">
				<h2>Your favorite places</h2>
				{this.state.favorites.map((place, index) => {return (
					<div class="favorite">
						<img src={place.image} alt={place.name} />
						<div class="placeInfo">
							<label className="favoriteName">{place.name}</label>
							<div className="favoriteInfo">
								<label className="favoriteLocation">{place.location}</label>
								<div className="favoriteRating">
									{Array.apply(0, Array(Math.floor(place.rating))).map(function(x) {
										return (
											<FontAwesomeIcon icon={solidStar} />
										);
									})}
									{Array.apply(0, Array(5-Math.floor(place.rating))).map(function(x) {
										return (
											<FontAwesomeIcon icon={regularStar} />
										);
									})}
								</div>
							</div>
							<FontAwesomeIcon className="deleteFavoriteIcon" icon={deleteIcon} onClick={()=>this.removeFavorite(index)}/>
						</div>
					</div>
				);})}
			</div>
		);
	}
}

class Preferences extends Component {

	constructor(props) {
		super(props);

    	this.state = {
            categories: [
                "accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank",
                "beauty_salon", "bicycle_store", "book_store", "bowling_alley", "bus_station", "cafe", "campground",
                "car_dealer", "car_rental", "car_repair", "car_wash", "casino", "cemetery", "church", "city_hall",
                "clothing_store", "convenience_store", "courthouse","dentist", "department_store", "doctor",
				"electrician", "electronics_store", "embassy", "fire_station", "florist", "funeral_home",
				"furniture_store", "gas_station", "gym", "hair_care", "hardware_store", "hindu_temple",
				"home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "lawyer", "library",
                "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway",
                "mosque", "movie_rental", "movie_theater", "moving_company", "museum", "night_club", "painter",
                "park", "parking", "pet_store", "pharmacy", "physiotherapist", "plumber", "police", "post_office",
                "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "shoe_store",
				"shopping_mall", "spa", "stadium", "storage", "store", "subway_station", "supermarket", "synagogue",
                "taxi_stand", "train_station", "transit_station", "travel_agency", "veterinary_care",
                "zoo",
            ],
            results: []
        }
	}

    handleChange = (e) => {
		let length = e.target.value.length
		let result = [];
        for (let i = 0; i < this.state.categories.length; i++) {
        	let word = this.state.categories[i];
            if (word.substring(0, length) == e.target.value.toLowerCase()) {
                result.push(word.split('_').join(' '));
            }
		}
		if (e.target.value == "") {
            this.setState({
                results: []
            })
		} else {
            this.setState({
                results: result
            })
		}

    }

	render() {
		return (
			<div id="preferences">
				<h2>Preferences</h2>
				Add preferences: 
				<input type="text" placeholder="Museums" onChange={this.handleChange} />
				<ResultList results={this.state.results} />
			</div>
		);
	}
}

class ResultList extends Component {

	constructor(props) {
		super(props);

		this.state = {
            preferences: [
                "restaurant",
                "Music stores",
                "museum"
			]
		}

        this.removePreference = this.removePreference.bind(this);

	}

    addPreference = (i) => {
		let pref = []
		let check = 0;
		console.log(this.props.results[i])
		for (let index = 0; index < this.state.preferences.length; index++) {
			pref.push(this.state.preferences[index])
			if (this.state.preferences[index] == this.props.results[i]) {
				check++;
			}
		}
		pref.push(this.props.results[i])
		if (check == 0) {
            this.setState({
                preferences: pref
            })
		}
		console.log(this.state.preferences)
	}

    removePreference(index) {
        let array = this.state.preferences;
        array.splice(index, 1);
        this.setState({
            preferences: array
        });
    }

    render() {
        return (
				<div>
					<div id={"suggested"}>
						<ul className={"suggestCategories"}>
						{this.props.results.map((result, i) => (
							<li value={i} name={result} onClick={this.addPreference.bind(this, i)}>{result}</li>
						))}
						</ul>
					</div>
					<div id="preferenceList">
                        {this.state.preferences.map((preference, index) => {return (
                            <label className="preference" onClick={() => this.removePreference(index)}>
                                {preference}
                                <FontAwesomeIcon className="closeIcon" icon={xIcon} />
                            </label>
                        );})}
                    </div>
				</div>
        )
    }

}

class Settings extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			firstName: "John",
			lastName: "Smith",
			username: "johnsmith43",
			email: "johnsmith@gmail.com",
			country: "BE",
			password: "showlength",
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		return (
			<div id="settings">
			<h2>Account settings</h2>
			
			<form onSubmit={this.handleSubmit}>
				<div className="settingsRow">
					<div className="settingsBlock">
						<label>First name</label>
						<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
					</div>
					
					<div className="settingsBlock">
						<label>Last name</label>
						<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
					</div>
				</div>
				
				<div className="settingsRow">
					<div className="settingsBlock">
						<label>Username</label>
						<input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
					</div>
				</div>
				<div className="settingsRow">
					<div className="settingsBlock">
						<label>Email address</label>
						<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
					</div>
				</div>
				
				<div className="settingsRow">
					<div className="settingsBlock">
						<label>Password</label>
						<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
					</div>
				</div>
				
				<div className="settingsRow">
					<div className="settingsBlock">
						<label>Country</label>
						{this.renderCountries()}
					</div>
				</div>
				
				<div className="settingsBlock">
					<button type="submit">Save settings</button>
				</div>
			</form>
		</div>
		);
	}
	
	handleInputChange(event) {
		const targetField = event.target;
		const value = targetField.value;
		const field = targetField.name;
		this.setState({
			[field]: value
		});
	}
	
	handleSubmit(event) {
		alert("Saved settings!");
	}
	
	renderCountries() {
		return (
			<select value={this.state.country} onChange={this.handleInputChange}>
				<option value="AF">Afghanistan</option>
				<option value="AX">Åland Islands</option>
				<option value="AL">Albania</option>
				<option value="DZ">Algeria</option>
				<option value="AS">American Samoa</option>
				<option value="AD">Andorra</option>
				<option value="AO">Angola</option>
				<option value="AI">Anguilla</option>
				<option value="AQ">Antarctica</option>
				<option value="AG">Antigua and Barbuda</option>
				<option value="AR">Argentina</option>
				<option value="AM">Armenia</option>
				<option value="AW">Aruba</option>
				<option value="AU">Australia</option>
				<option value="AT">Austria</option>
				<option value="AZ">Azerbaijan</option>
				<option value="BS">Bahamas</option>
				<option value="BH">Bahrain</option>
				<option value="BD">Bangladesh</option>
				<option value="BB">Barbados</option>
				<option value="BY">Belarus</option>
				<option value="BE">Belgium</option>
				<option value="BZ">Belize</option>
				<option value="BJ">Benin</option>
				<option value="BM">Bermuda</option>
				<option value="BT">Bhutan</option>
				<option value="BO">Bolivia, Plurinational State of</option>
				<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
				<option value="BA">Bosnia and Herzegovina</option>
				<option value="BW">Botswana</option>
				<option value="BV">Bouvet Island</option>
				<option value="BR">Brazil</option>
				<option value="IO">British Indian Ocean Territory</option>
				<option value="BN">Brunei Darussalam</option>
				<option value="BG">Bulgaria</option>
				<option value="BF">Burkina Faso</option>
				<option value="BI">Burundi</option>
				<option value="KH">Cambodia</option>
				<option value="CM">Cameroon</option>
				<option value="CA">Canada</option>
				<option value="CV">Cape Verde</option>
				<option value="KY">Cayman Islands</option>
				<option value="CF">Central African Republic</option>
				<option value="TD">Chad</option>
				<option value="CL">Chile</option>
				<option value="CN">China</option>
				<option value="CX">Christmas Island</option>
				<option value="CC">Cocos (Keeling) Islands</option>
				<option value="CO">Colombia</option>
				<option value="KM">Comoros</option>
				<option value="CG">Congo</option>
				<option value="CD">Congo, the Democratic Republic of the</option>
				<option value="CK">Cook Islands</option>
				<option value="CR">Costa Rica</option>
				<option value="CI">Côte d'Ivoire</option>
				<option value="HR">Croatia</option>
				<option value="CU">Cuba</option>
				<option value="CW">Curaçao</option>
				<option value="CY">Cyprus</option>
				<option value="CZ">Czech Republic</option>
				<option value="DK">Denmark</option>
				<option value="DJ">Djibouti</option>
				<option value="DM">Dominica</option>
				<option value="DO">Dominican Republic</option>
				<option value="EC">Ecuador</option>
				<option value="EG">Egypt</option>
				<option value="SV">El Salvador</option>
				<option value="GQ">Equatorial Guinea</option>
				<option value="ER">Eritrea</option>
				<option value="EE">Estonia</option>
				<option value="ET">Ethiopia</option>
				<option value="FK">Falkland Islands (Malvinas)</option>
				<option value="FO">Faroe Islands</option>
				<option value="FJ">Fiji</option>
				<option value="FI">Finland</option>
				<option value="FR">France</option>
				<option value="GF">French Guiana</option>
				<option value="PF">French Polynesia</option>
				<option value="TF">French Southern Territories</option>
				<option value="GA">Gabon</option>
				<option value="GM">Gambia</option>
				<option value="GE">Georgia</option>
				<option value="DE">Germany</option>
				<option value="GH">Ghana</option>
				<option value="GI">Gibraltar</option>
				<option value="GR">Greece</option>
				<option value="GL">Greenland</option>
				<option value="GD">Grenada</option>
				<option value="GP">Guadeloupe</option>
				<option value="GU">Guam</option>
				<option value="GT">Guatemala</option>
				<option value="GG">Guernsey</option>
				<option value="GN">Guinea</option>
				<option value="GW">Guinea-Bissau</option>
				<option value="GY">Guyana</option>
				<option value="HT">Haiti</option>
				<option value="HM">Heard Island and McDonald Islands</option>
				<option value="VA">Holy See (Vatican City State)</option>
				<option value="HN">Honduras</option>
				<option value="HK">Hong Kong</option>
				<option value="HU">Hungary</option>
				<option value="IS">Iceland</option>
				<option value="IN">India</option>
				<option value="ID">Indonesia</option>
				<option value="IR">Iran, Islamic Republic of</option>
				<option value="IQ">Iraq</option>
				<option value="IE">Ireland</option>
				<option value="IM">Isle of Man</option>
				<option value="IL">Israel</option>
				<option value="IT">Italy</option>
				<option value="JM">Jamaica</option>
				<option value="JP">Japan</option>
				<option value="JE">Jersey</option>
				<option value="JO">Jordan</option>
				<option value="KZ">Kazakhstan</option>
				<option value="KE">Kenya</option>
				<option value="KI">Kiribati</option>
				<option value="KP">Korea, Democratic People's Republic of</option>
				<option value="KR">Korea, Republic of</option>
				<option value="KW">Kuwait</option>
				<option value="KG">Kyrgyzstan</option>
				<option value="LA">Lao People's Democratic Republic</option>
				<option value="LV">Latvia</option>
				<option value="LB">Lebanon</option>
				<option value="LS">Lesotho</option>
				<option value="LR">Liberia</option>
				<option value="LY">Libya</option>
				<option value="LI">Liechtenstein</option>
				<option value="LT">Lithuania</option>
				<option value="LU">Luxembourg</option>
				<option value="MO">Macao</option>
				<option value="MK">Macedonia, the former Yugoslav Republic of</option>
				<option value="MG">Madagascar</option>
				<option value="MW">Malawi</option>
				<option value="MY">Malaysia</option>
				<option value="MV">Maldives</option>
				<option value="ML">Mali</option>
				<option value="MT">Malta</option>
				<option value="MH">Marshall Islands</option>
				<option value="MQ">Martinique</option>
				<option value="MR">Mauritania</option>
				<option value="MU">Mauritius</option>
				<option value="YT">Mayotte</option>
				<option value="MX">Mexico</option>
				<option value="FM">Micronesia, Federated States of</option>
				<option value="MD">Moldova, Republic of</option>
				<option value="MC">Monaco</option>
				<option value="MN">Mongolia</option>
				<option value="ME">Montenegro</option>
				<option value="MS">Montserrat</option>
				<option value="MA">Morocco</option>
				<option value="MZ">Mozambique</option>
				<option value="MM">Myanmar</option>
				<option value="NA">Namibia</option>
				<option value="NR">Nauru</option>
				<option value="NP">Nepal</option>
				<option value="NL">Netherlands</option>
				<option value="NC">New Caledonia</option>
				<option value="NZ">New Zealand</option>
				<option value="NI">Nicaragua</option>
				<option value="NE">Niger</option>
				<option value="NG">Nigeria</option>
				<option value="NU">Niue</option>
				<option value="NF">Norfolk Island</option>
				<option value="MP">Northern Mariana Islands</option>
				<option value="NO">Norway</option>
				<option value="OM">Oman</option>
				<option value="PK">Pakistan</option>
				<option value="PW">Palau</option>
				<option value="PS">Palestinian Territory, Occupied</option>
				<option value="PA">Panama</option>
				<option value="PG">Papua New Guinea</option>
				<option value="PY">Paraguay</option>
				<option value="PE">Peru</option>
				<option value="PH">Philippines</option>
				<option value="PN">Pitcairn</option>
				<option value="PL">Poland</option>
				<option value="PT">Portugal</option>
				<option value="PR">Puerto Rico</option>
				<option value="QA">Qatar</option>
				<option value="RE">Réunion</option>
				<option value="RO">Romania</option>
				<option value="RU">Russian Federation</option>
				<option value="RW">Rwanda</option>
				<option value="BL">Saint Barthélemy</option>
				<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
				<option value="KN">Saint Kitts and Nevis</option>
				<option value="LC">Saint Lucia</option>
				<option value="MF">Saint Martin (French part)</option>
				<option value="PM">Saint Pierre and Miquelon</option>
				<option value="VC">Saint Vincent and the Grenadines</option>
				<option value="WS">Samoa</option>
				<option value="SM">San Marino</option>
				<option value="ST">Sao Tome and Principe</option>
				<option value="SA">Saudi Arabia</option>
				<option value="SN">Senegal</option>
				<option value="RS">Serbia</option>
				<option value="SC">Seychelles</option>
				<option value="SL">Sierra Leone</option>
				<option value="SG">Singapore</option>
				<option value="SX">Sint Maarten (Dutch part)</option>
				<option value="SK">Slovakia</option>
				<option value="SI">Slovenia</option>
				<option value="SB">Solomon Islands</option>
				<option value="SO">Somalia</option>
				<option value="ZA">South Africa</option>
				<option value="GS">South Georgia and the South Sandwich Islands</option>
				<option value="SS">South Sudan</option>
				<option value="ES">Spain</option>
				<option value="LK">Sri Lanka</option>
				<option value="SD">Sudan</option>
				<option value="SR">Suriname</option>
				<option value="SJ">Svalbard and Jan Mayen</option>
				<option value="SZ">Swaziland</option>
				<option value="SE">Sweden</option>
				<option value="CH">Switzerland</option>
				<option value="SY">Syrian Arab Republic</option>
				<option value="TW">Taiwan, Province of China</option>
				<option value="TJ">Tajikistan</option>
				<option value="TZ">Tanzania, United Republic of</option>
				<option value="TH">Thailand</option>
				<option value="TL">Timor-Leste</option>
				<option value="TG">Togo</option>
				<option value="TK">Tokelau</option>
				<option value="TO">Tonga</option>
				<option value="TT">Trinidad and Tobago</option>
				<option value="TN">Tunisia</option>
				<option value="TR">Turkey</option>
				<option value="TM">Turkmenistan</option>
				<option value="TC">Turks and Caicos Islands</option>
				<option value="TV">Tuvalu</option>
				<option value="UG">Uganda</option>
				<option value="UA">Ukraine</option>
				<option value="AE">United Arab Emirates</option>
				<option value="GB">United Kingdom</option>
				<option value="US">United States</option>
				<option value="UM">United States Minor Outlying Islands</option>
				<option value="UY">Uruguay</option>
				<option value="UZ">Uzbekistan</option>
				<option value="VU">Vanuatu</option>
				<option value="VE">Venezuela, Bolivarian Republic of</option>
				<option value="VN">Viet Nam</option>
				<option value="VG">Virgin Islands, British</option>
				<option value="VI">Virgin Islands, U.S.</option>
				<option value="WF">Wallis and Futuna</option>
				<option value="EH">Western Sahara</option>
				<option value="YE">Yemen</option>
				<option value="ZM">Zambia</option>
				<option value="ZW">Zimbabwe</option>
			</select>
		);
	}
}

export default Profile;