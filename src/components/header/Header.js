import React from 'react';
import { connect } from "react-redux";
import Menu  from './Menu';


const Header = (props) => {

  return (
      <header>
          <Menu />
      </header>
        
  )
}

export default connect()(Header);