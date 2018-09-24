import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config';

const Box = styled.div`
  min-height: 200px;
  min-width: 320px;
  max-width: 420px !important;
  width: 100%;
  padding:  30px 50px 30px;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,.05), 0 10px 20px rgba(0,0,0,.01) !important;
  border-color: ${colors.light_grey} !important;
`;
const Card = props => (
  <Box className="card has-text-centered">
    { props.children }
  </Box>
);

Card.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Card;
