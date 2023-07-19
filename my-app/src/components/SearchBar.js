import React from 'react';

class SearchBar extends React.Component{
  state = {term:''};

  onFormSubmit= event => {
    event.preventDefault(); //Eviter de recharger la page apreès soumission du formulaire
    this.props.onSubmit(this.state.term);
  }
     render(){
      return(
        <>
          <div className="container"><h3 style={{color:'#3e8e41',fontWeight:'bolder'}}>ImSearch</h3></div>
          <div className="ui segment">

               <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="field">
                       <label style={{color:'#B22222'}}>Image search engine</label>
                       <input type="text" placeholder="Search an image..." value={this.state.term} onChange={(e) => this.setState({term:e.target.value.toUpperCase()})} />
                    </div>
               </form>

          </div>
        </>
      )
     }
}

export default SearchBar;