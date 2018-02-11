import React from 'react';
import PropTypes from 'prop-types';


const Back = ({ children, ...props }, context) => {
  return (
    <a {...props} onClick={() => context.location.back()}>
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
