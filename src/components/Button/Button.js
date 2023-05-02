import React from "react";

import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ type = 'button', onClick = null }) => {
  return (
    <Btn type={type} onClick={onClick}>
      Load more
    </Btn>
  );
};

 Btn.propTypes = {
   type: PropTypes.string,
   onClick: PropTypes.func.isRequired,
 };

