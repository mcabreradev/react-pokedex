import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import styled from 'styled-components';

const StrengthMeter = styled.span`
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  height: 100%;
  display: block;
  border-radius: 3px;
  transition: all 0.3s;
`;
const PasswordBarWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0,0,0,0.15);;
  border-radius: 3px;
  margin-top: -10px;
  margin-bottom: 10px;
  position: relative;
  height: 25px;
`;

const Text = styled.p`
  display: ${props => props.display};
  margin: 0;
  text-align: left;
  padding-left: 0.5rem;
  padding-top: 0px;
  line-height: 1;
  position: absolute;
  color: ${props => props.color};
  font-size: 13px;
  top: calc(50% - 7px);
  left: 0;
  right: 0;
`;

const PasswordBar = (props) => {
  const { password } = props;
  const result = zxcvbn(password);
  const { score } = result;
  const color = (val) => {
    if (val === 0 || val === 1) {
      return 'red';
    } else if (val === 2) {
      return 'orange';
    } else if (val === 3) {
      return 'blue';
    }
    return 'green';
  };

  const textColor = (val) => {
    if (val === 0 || val === 1) {
      return 'black';
    } else if (val === 2) {
      return 'black';
    } else if (val === 3) {
      return 'white';
    }
    return 'white';
  };

  const text = (value) => {
    var label = null;

    switch (value) {
        case 0:
            label = 'Your password needs to be stronger.';
            break;
        case 1:
            label = 'Your password is too weak.';
            break;
        case 2:
            label = 'Your password is only ok.';
            break;
        case 3:
            label = 'Your password is great!';
            break;
        default:
            label = 'Your password rocks!.';
            break;
    }
    
    return label;
  };
  return (
    <PasswordBarWrapper>
      <StrengthMeter width={ (score / 4) * 100 } color={ color(score) } />
      <Text color={ textColor(score) }>{ text(score) }</Text>
    </PasswordBarWrapper>
  );
};

PasswordBar.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordBar;
