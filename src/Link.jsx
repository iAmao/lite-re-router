import React from 'react';
import PropTypes from 'prop-types';
import { Context } from './Router';
import defaultStyle from './style';


const Link = ({ children, href, style,...props}) => {
  const context = React.useContext(Context);
  const linkStyle = { ...defaultStyle, ...style };
  return (
    <a {...props} style={linkStyle} onClick={() => context.location.push(href)}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
