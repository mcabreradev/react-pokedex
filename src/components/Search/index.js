import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading';
import Select from '../Select';
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
        const { name, isLoading } = this.props;

        return (
            <div>

                <Loading isActive={ isLoading }/>

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
                            <Select 
                                type="types"
                                selectName="selectedType" 
                                onChange={ this.onChange } 
                                {...this.props}
                               />
                        </div>

                        <div className="field column is-3">
                            <Select 
                                type="weakness"
                                selectName="selectedWeakness" 
                                onChange={ this.onChange } 
                                {...this.props}
                               />
                        </div>

                        <div className="field column is-3">
                            <Select 
                                type="abilities"
                                selectName="selectedAbilities" 
                                onChange={ this.onChange } 
                                {...this.props}
                               />
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
    isLoading: state.pokedex.isLoading,
 });

export default connect(mapStateToProps, {
    setName,
    setSelectedType,
    setSelectedWeakness,
    setSelectedAbilities
})(Search);

