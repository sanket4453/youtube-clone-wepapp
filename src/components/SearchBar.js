import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{

    state = { searchTerm :'dogs'}

    handleChange = (e) =>{
        this.setState({searchTerm: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {searchTerm} =this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

    }

   render(){
        return(
            <Paper elevation={10} style= {{padding:'25px', margin:'10px 100px'}}>
              <form onSubmit={this.handleSubmit} className="searchform">  
                 <TextField fullWidth label="Search Here..." onChange={this.handleChange}/>
                 <button onClick={this.handleSubmit} className="searchbtn">Search</button>
              </form>
                    
           </Paper>
        )

                
    }
}

export default SearchBar;