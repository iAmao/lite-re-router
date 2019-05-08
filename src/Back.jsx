import React from 'react';
import PropTypes from 'prop-types';
import { Context } from './Router';
import defaultStyle from './style';


const Back = ({ children, style, ...props }) => {
  const context = React.useContext(Context);
  const linkStyle = { ...defaultStyle, ...style };

  return (
    <a {...props} style={linkStyle} onClick={() => context.location.back()}>
      {children}
    </a>
  );
};

Back.propTypes = {
  children: PropTypes.node.isRequired
};


export default Back;
