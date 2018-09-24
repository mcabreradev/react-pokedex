import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config';

import './index.css';

const StyledButton = styled.a`
    width: 40px !important;
    height: 48px !important;
    border-radius: 0 4px 4px 0 !important;
    background-color: ${colors.lighter_grey} !important;
    border-color: #dbdbdb !important;
    color: #7a7a7a !important;
    box-shadow: none !important;
`;

const InputWraper = styled.div`

`;

class Input extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onChange(e) {
        this.props.onChange(e);
    }

    onClick(e) {
        this.props.onClick(e);
    }

    onKeyPress(e) {
        this.props.onKeyPress(e);
    }

    render() {

        return ( 
            <InputWraper className="field has-addons">
               
                <input 
                    className={ "input is-fullwidth is-custom-input " + this.props.className } 
                    type={ this.props.type } 
                    placeholder={ this.props.placeholder } 
                    name={ this.props.name } 
                    onChange={ this.onChange }
                    />
        
                <StyledButton 
                    className={ "button is-medium is-custom-icon " + (this.props.nonStatic ? "" : "is-static" )  }
                    onClick={this.onClick} 
                    onKeyPress={this.onKeyPress}>

                    <i className={ this.props.icon }></i>

                </StyledButton> 

            </InputWraper>
         );
    }
}
 
Input.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

Input.defaultProps = {  
    type: "text",
    icon: "",
    className: "",
    placeholder: "",
    name: "",
    nonStatic: false,
};

export default Input;
