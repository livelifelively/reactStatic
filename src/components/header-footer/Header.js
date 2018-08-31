import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
// import ToolBar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/core/Menu';
// import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-test="component-header">
        Header
      </div>
    );
  }
}

Header.propTypes = {};

export {Header};

