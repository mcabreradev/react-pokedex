import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setSelectedType } from '../../store/actions/pokedexAction';

const styles = {
    marginTop: "10px"
};

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

        switch (e.target.name) {
            case "name":
                this.props.setName(e.target.value);
                break;
            
            case "selectedType":
                this.props.setSelectedType(e.target.value);
                break;
        
            default:
                break;
        }
    }

    render() {
        const { types, name, selectedType } = this.props;

        return (
            <div>
                <div className="container" style={ styles }>
                    <div className="columns"> 
                        <div className="field column is-8">
                            <div className="control is-large has-icons-right">
                                <input className="input is-large" type="text" placeholder="Enter pokemon name" name="name" value={ name } onChange={ this.onChange } />
                                <span className="icon is-medium is-right"><i className="fas fa-search"></i></span>
                            </div>
                        </div>
    
                        <div className="field column is-4">
                            <div className="control is-expanded">
                                <div className={ "select is-large is-fullwidth " + (!types.length ? 'is-loading' : '')}>
                                    <select 
                                        name="selectedType" 
                                        value={ selectedType } 
                                        onChange={ this.onChange } 
                                        className="is-capitalized" 
                                        disabled={ !types.length }
                                        >

                                        <option value="">{ selectedType === "" ? "Select Type" : "-- Reset Filter" }</option>

                                        { types.map(type => ( <option value={ type } key={ type }>{ type }</option> )) }

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        );
    }
  }

Search.defaultProps = {  
    types: [],
    name: "",
    selectedType: ""
};

const mapStateToProps = state => ({
    types: state.pokedex.types,
    weakness: state.pokedex.weakness,
    abilites: state.pokedex.abilities,
    name: state.pokedex.name,
    selectedType: state.pokedex.selectedType,
 });

export default connect(mapStateToProps, { setName, setSelectedType })(Search);

