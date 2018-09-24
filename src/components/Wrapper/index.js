import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
 
`;

const Wrapper = props => {

    return ( 
        <WrapperStyled> 
            { props.children } 
        </WrapperStyled>
      );
} 
 
export default Wrapper;