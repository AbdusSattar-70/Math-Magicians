import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { displyValue } = props;
  return (
    <div className="display">
      {displyValue}
    </div>
  );
};

Display.propTypes = {
  displyValue: PropTypes.string.isRequired,
};

export default Display;
