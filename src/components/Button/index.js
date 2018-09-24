import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config';

const ButtonWraper = styled.button `
    background-color: ${colors.orange};
    color: ${colors.white};
    font-size: 16px;
    border: 1px solid ${colors.orange};
    transition: all 0.3s;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    border-radius: .3rem;
    line-height: 1;
    font-weight: 600;
    padding: 13px 20px;

  &:hover {
    background-color: ${colors.orangeHover};
  }
  &:disabled, &.disabled {
      opacity: .65 !important;
  }

  &.white {
    background-color: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${colors.black};
    &:hover {
      background-color: ${colors.orange};
      border: 1px solid ${colors.orange};
      color: ${colors.white};
    }
  }
  &.black {
    background-color: ${colors.black};
    color: ${colors.white};
    border: 1px solid ${colors.black};
    &:hover {
      background-color: ${colors.orange};
      border: 1px solid ${colors.orange};
      color: ${colors.white};
    }
  }
  &.small {
    padding: 5px 7px;
    font-weight: 400;
  }
  &.link {
    padding: 0;
    maring: 0;
    background-color: transparent;
    border: none;
    color: ${colors.black};
    &:hover {
      background-color: transparent;
      border: none;
      color: ${colors.black};
    }
  }
 `;

const Button = props => ( 
  <ButtonWraper { ...props }> 
    { props.children } 
  </ButtonWraper>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: "field"
};

export default Button;