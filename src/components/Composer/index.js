import {isEmpty, isNil, mapObjIndexed, values, pluck, sortBy, prop, pipe} from 'ramda';
import Composer from '.';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Components from 'componentList';

const MergedComponents = {...Components.Feature, ...Components.Layout, ...Components.Data}

export const GenericComponent = (props) => {
  let Component = MergedComponents[ props.opts.type ];

  if (!isNil(props.opts.children) && !isEmpty(props.opts.children)){
    const kids = pipe(
      mapObjIndexed((comp, index) => { 
        return {sort: comp.sort, compDef: (<Composer opts={comp} key={index}/>)}
      }),
      values,
      sortBy(prop('sort')),
      pluck('compDef'),
    )(props.opts.children)

    return (<Component {...props } {...props.injectProps} >{kids}</Component>);
  }else{
    return (<Component {...props } {...props.injectProps} />);
  }
};

export default withStyles({})(GenericComponent);

