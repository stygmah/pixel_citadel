import React, {Component} from 'react';
import api from '../api/api';
import SearchResults from './search-results';

const Search =(props) =>{
	return(
		<div>
			<p>SEARCH</p>
			<SearchResults />
		</div>
	);

}

export default Search;