import React from 'react';
import PropTypes from 'prop-types';

import defaultStyle from './style';


const Back = ({ children, style, ...props }, context) => {
  const linkStyle = { ...defaultStyle, ...style };

  return (
    <a {...props} style={linkStyle} onClick={() => context.location.back()}>
      {children}
    </a>
  );
};

Back.contextTypes = {
  location: PropTypes.shape({
    back: PropTypes.func
  })
};

Back.propTypes = {
  children: PropTypes.node.isRequired
};


export default Back;
