import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e);
    }

    render() { 
        const { selectName, type, className } = this.props;
        return (
            <div>
                <label className="label is-capitalized">{ type }</label>

                <div className="control is-expanded">
                    <div className={ "select is-medium is-fullwidth " + (!this.props[type].length ? 'is-loading' : '')}>
                        <select 
                            name={ selectName } 
                            value={ this.props[selectName] } 
                            onChange={ this.onChange } 
                            className={ className } 
                            disabled={ !this.props[type].length }
                            >

                            <option value="">{ this.props[selectName] === "" ? "Select" : "-- Reset Filter" }</option>

                            { this.props[type].map(option => ( <option value={ option } key={ option }>{ option }</option> )) }

                        </select>
                    </div>
                </div>
            </div>
          );
    }
}

Select.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    selectName: PropTypes.string,
};

Select.defaultProps = {  
    type: "",
    className: "is-capitalized",
    selectName: ""
};
 
export default Select;