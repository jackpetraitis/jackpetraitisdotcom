import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "MenuLink.css";

class MenuLink extends Component {
    constructor(props){
        super(props);
    }

    defaultProps 

    render() {
      return (
        <a className="MenuLink" href={this.props.linkURL}>
            {this.props.linkText}
        </a>
      )
    }
}

MenuLink.propTypes = {
    linkURL: PropTypes.string,
    linkText: PropTypes.string
}

MenuLink.defaultProps = {
    linkURL: '<WRONG WAY DUFUS>',
    linkText: '<WRONG WAY DUFUS>'
}


export default MenuLink;
