import React, { Component}  from 'react';

class RadiusFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            radius: [5000, 10000, 15000, 20000, 25000]
        }

    }

    render() {
        return (
            <div>
                <p>Max. distance</p>
                <ul className={"radius-filter"}>
                    {this.state.radius.map((radius) => {
                        return (
                            <li>
                                <input type="radio" name="range" value={radius} onChange={this.props.handler}/>
                                <span>{radius / 1000} km</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default RadiusFilter;