import React from 'react';
import PropTypes from 'prop-types';

import defaultStyle from './style';


const Link = ({ children, href, style,...props}, context) => {
  const linkStyle = { ...defaultStyle, ...style };
  return (
    <a {...props} style={linkStyle} onClick={() => context.location.push(href)}>
      {children}
    </a>
  );
};

Link.contextTypes = {
  location: PropTypes.shape({
    push: PropTypes.func,
    path: PropTypes.string,
  })
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
