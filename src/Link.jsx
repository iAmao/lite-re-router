import React from 'react';
import PropTypes from 'prop-types';


const Link = ({ children, href,...props}, context) => {
  return (
    <a {...props} onClick={() => context.location.push(href)}>
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
