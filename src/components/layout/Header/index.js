import React from 'react';
import {isNil} from 'ramda';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  const v = !isNil(props.variant) ? props.variant : 'h1';
  return (
    <Typography variant={v}>
      {props.children}
    </Typography>
  );
}

export default Header;
