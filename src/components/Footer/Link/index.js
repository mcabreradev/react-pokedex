import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

const FooterLinksStyled = styled.p`
  font-weight: 500;
  margin-bottom: 1rem;
  a { 
    font-weight: 500;
    color: ${colors.black} !important;
    &:hover {
      color: ${colors.orange} !important;
      text-decoration: none; 
    } 
  }
`;

const FooterLink = props => ( 
  <FooterLinksStyled { ...props }> 
    { props.children } 
  </FooterLinksStyled>
  );
 
export default FooterLink;