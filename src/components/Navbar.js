import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return(
    <div>
    <h3>{props.title}</h3>
    <ul>
        <li>
            <Link to = "/">Home</Link>
        </li>
        <li>
            <Link to = "/add">Add User</Link>
        </li>
        <li>
            <Link to = "/github">Project Files</Link>
        </li>
    </ul>
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