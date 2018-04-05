import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    onInputChange(term){
        this.setState({term});
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.term !== "") {
            this.props.onSearchTermChange(this.state.term);
        }
    }

    render(){
        return(
            <div className="search-bar" style={{display: 'flex'}}>
                <div style={{flex: 1, paddingTop: 10, paddingRight: 15}}>
                    <h3>ColtonTube</h3>
                </div>
                <input
                    onChange={e => this.onInputChange(e.target.value)}
                    onKeyPress={this._handleKeyPress}
                    style={{flex: 9, paddingLeft: 5}}
                    value={this.state.term}
                />
                <button
                    onClick={()=>{this.props.onSearchTermChange(this.state.term)}}
                    style={{flex: 1, marginLeft: 10}}
                >
                    Search
                </button>
            </div>
        );
    }
}
