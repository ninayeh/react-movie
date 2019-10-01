import React, {Component} from 'react';
import FontAwsome from 'react-fontawesome';
import './SearchBar.css';
import { thisTypeAnnotation } from '@babel/types';

class SearchBar extends Component {
  state = {
    value:''
  }

  timeout = null;

  doSearch = (event) => {
    this.setState({ value: event.target.value})
    clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);
    }, 500 );
  }

  render(){
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwsome className="rmdb-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;

