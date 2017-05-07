import React, {Component} from 'react';



import api from '../api/api';

export default class SearchInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			term: null
		}

	}
	onInputTerm(term){
		this.setState({term});
	}
	onSumbitTerm(term){
		this.props.search(term,'games');
	}
	render(){
		return(
				<div className='search-bar' >
					<form
						onSubmit={(e)=>{
								e.preventDefault();
								this.onSumbitTerm(e.target.searchValue.value);
							}}
					>
						<input 
							name='searchValue'
							type='text'
							onChange={(e)=>{this.onInputTerm(e.target.value)}} 
						/>
					</form>
				</div>
			);
	}
}