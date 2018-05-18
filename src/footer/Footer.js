import React, { Component } from 'react';

import './Footer.css';
import facebookIcon from './facebook.svg';
import linkedIcon from './linkedin.svg';
import twitterIcon from './twitter.svg';

class Footer extends Component {
	render() {
		return (
			<footer>
				<img id="icon" src={facebookIcon} />
				<img id="icon" src={twitterIcon} />
				<img id="icon" src={linkedIcon} />
			</footer>
		);
	}
}

export default Footer;