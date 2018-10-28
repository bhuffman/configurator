import React from 'react';
import Fade from '@material-ui/core/Fade';

const FadeWrapper = (props) => {
  return (
    <React.Fragment>
      <Fade in={true} timeout={1000}>
        <div>
          {props.children}
        </div>
      </Fade>
    </React.Fragment>
  );
}

export default FadeWrapper;
