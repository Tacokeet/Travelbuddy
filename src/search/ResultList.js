import React, { Component}  from 'react';
import Result from './Result.js';

class ResultList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"result-list"}>
                {this.props.results.map((result) => (
                    <Result key={result.id} result={result} handlerss={this.props.handlerss} />
                ))}
            </div>

        )
    }

}


export default ResultList;