import React from 'react';

const Loading = (props) =>  (
    <div className={"pageloader has-background-warning " + ( props.isActive ? 'is-active' : '')}>
        <span className="title">{ props.text }</span>
    </div>
);

Loading.defaultProps = {  
    text: "Loading..",
    isActive: false 
};

export default Loading;