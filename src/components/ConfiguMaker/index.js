import {isEmpty, isNil, mapObjIndexed, values} from 'ramda';
import ConfiguMaker from '.';
import React from 'react';

// Layout


//Features


//Data


const Components = {
  //Layout

  //Features

  //Data

  //Other

};

export const GenericComponent = (props) => {
  let Component = Components[ props.opts.type ];

  if (!isNil(props.opts.children) && !isEmpty(props.opts.children)){
    const kids = values(mapObjIndexed((comp, index) => {
      return (<ConfiguMaker opts={comp} key={index}/>)
    }, props.opts.children))
    return (<Component { ...props }{...props.opts.props} >{kids}</Component>);
  }else{
    return (<Component { ...props } {...props.opts.props} />);
  }
};

export default GenericComponent;

