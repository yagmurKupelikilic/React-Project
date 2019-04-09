import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return(
    <div>
    <h3>{props.title}</h3>
    </div>
    );
}
//sending a title is mandatory
Navbar.propsType = {
    title : PropTypes.string.isRequired
}
//if a title is not sending in App.js when called
Navbar.defaultProps = {
    title : "default title"
}
export default Navbar;