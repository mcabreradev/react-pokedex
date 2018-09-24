import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setName,
    setSelectedType,
    setSelectedWeakness,
    setSelectedAbilities
} from '../../store/actions/pokedexAction';

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
            
            case "selectedWeakness":
                this.props.setSelectedWeakness(e.target.value);
                break;
            
            case "selectedAbilities":
                this.props.setSelectedAbilities(e.target.value);
                break;
        
            default:
                break;
        }
    }

    render() {
        const { types, name, selectedType, weakness, selectedWeakness, abilities, selectedAbilities } = this.props;

        return (
            <div>
                <div className="container" style={ styles }>
                    <div className="columns"> 
                        <div className="field column is-3">
                            <label className="label">Name</label>
                            <div className="control is-medium has-icons-right">
                                <input className="input is-medium" type="text" placeholder="Enter pokemon name" name="name" value={ name } onChange={ this.onChange } />
                                <span className="icon is-medium is-right"><i className="fas fa-search"></i></span>
                            </div>
                        </div>
    
                        <div className="field column is-3">
                            <label className="label">Type</label>
                            <div className="control is-expanded">
                                <div className={ "select is-medium is-fullwidth " + (!types.length ? 'is-loading' : '')}>
                                    <select 
                                        name="selectedType" 
                                        value={ selectedType } 
                                        onChange={ this.onChange } 
                                        className="is-capitalized" 
                                        disabled={ !types.length }
                                        >

                                        <option value="">{ selectedType === "" ? "Select" : "-- Reset Filter" }</option>

                                        { types.map(type => ( <option value={ type } key={ type }>{ type }</option> )) }

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field column is-3">
                            <label className="label">Weakness</label>
                            <div className="control is-expanded">
                                <div className={ "select is-medium is-fullwidth " + (!weakness.length ? 'is-loading' : '')}>
                                    <select 
                                        name="selectedWeakness" 
                                        value={ selectedWeakness } 
                                        onChange={ this.onChange } 
                                        className="is-capitalized" 
                                        disabled={ !weakness.length }
                                        >

                                        <option value="">{ selectedWeakness === "" ? "Select" : "-- Reset Filter" }</option>

                                        { weakness.map(weak => ( <option value={ weak } key={ weak }>{ weak }</option> )) }

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field column is-3">
                            <label className="label">Abilities</label>
                            <div className="control is-expanded">
                                <div className={ "select is-medium is-fullwidth " + (!abilities.length ? 'is-loading' : '')}>
                                    <select 
                                        name="selectedAbilities" 
                                        value={ selectedAbilities } 
                                        onChange={ this.onChange } 
                                        className="is-capitalized" 
                                        disabled={ !abilities.length }
                                        >

                                        <option value="">{ selectedAbilities === "" ? "Select" : "-- Reset Filter" }</option>

                                        { abilities.map(ability => ( <option value={ ability } key={ ability }>{ ability }</option> )) }

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
    selectedType: "",
    weakness: [],
    selectedWeakness: "",
    abilities: [],
    selectedAbilities: "",
};

const mapStateToProps = state => ({
    types: state.pokedex.types,
    weakness: state.pokedex.weakness,
    abilities: state.pokedex.abilities,
    name: state.pokedex.name,
    selectedType: state.pokedex.selectedType,
    selectedWeakness: state.pokedex.selectedWeakness,
    selectedAbilities: state.pokedex.selectedAbilities,
 });

export default connect(mapStateToProps, {
    setName,
    setSelectedType,
    setSelectedWeakness,
    setSelectedAbilities
})(Search);

