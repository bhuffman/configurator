import { map, compose, isEmpty, isNil, mapObjIndexed, values, keys, append, pick, path, head, unnest, sortBy, prop, boolean, pluck, contains, omit , difference, flatten} from 'ramda';
import ComposerDnd from '.';
import React from 'react';
import actionCreators from 'globalActions';
import { withStyles } from '@material-ui/core/styles';
import { store } from '../../index';
import EmptyChild from 'components/dnd/EmptyChild';
import FullChild from 'components/dnd/FullChild';

import Components from 'componentList';

const MergedComponents = {...Components.Feature, ...Components.Layout, ...Components.Data}

function uuid() {
  return 'uuid-xxxx-xxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const loadComponentsIntoState = () => {
  store.dispatch(actionCreators.setEditorPath({path:['keys','features'],value: keys(Components.Feature)}))
  store.dispatch(actionCreators.setEditorPath({path:['keys','layout'],value: keys(Components.Layout)}))
  store.dispatch(actionCreators.setEditorPath({path:['keys','data'],value: keys(Components.Data)}))
}

setTimeout(loadComponentsIntoState, 100);

export const GenericComponent = (props) => {
  let Component = MergedComponents[ props.opts.type ];

  let customProp = isEmpty(pick([props.opts.type], store.getState().editor.customProps)) ? {} : head(values(pick([props.opts.type], store.getState().editor.customProps)));
  let parents = isEmpty(props.parentchain) ? [props.parentkey] : append(props.parentkey, props.parentchain);

  //Grab custom props and slots from customProp
  const slots = values(pick(['slots'],customProp));
  const stub = path(['stub'],customProp);

  //Create various arrays of keys for empties
  let empties = [uuid()];

  if (!isEmpty(slots)) {
    const potential = values(mapObjIndexed(slot => {
      return slot
    }, unnest(slots)))
    //Filter out already populated keys
    empties = difference(potential, keys(props.opts.children))
  } else if (stub) {
    empties = null;
  }

  //remove prop key as it errors deep in react
  customProp = omit(['stub', 'children'], customProp)

  const emptyChildren = values(mapObjIndexed((slot) => {
      return (<EmptyChild key={slot} {...props} parentchain={parents} parentkey={slot}/>)},empties))

  if (!isNil(props.opts.children) && !isEmpty(props.opts.children)){

    let kids = pluck('compDef',sortBy(prop('sort'),values(mapObjIndexed((comp, index) => {
      return {sort: comp.sort, compDef: (<FullChild key={index} {...props} {...customProp} parentchain={parents}>
                <ComposerDnd {...props} opts={comp} {...customProp} {...props.injectProps} parentkey={index} parentchain={parents}/>
              </FullChild>)}
    }, props.opts.children))))

      return (<Component { ...props } {...props.opts.props}>
                {kids}
                {emptyChildren}
              </Component>);
  }else{
      return (<FullChild key='drop-child' {...props} {...customProp} parentchain={parents}>
                <Component { ...props } {...customProp} {...props.injectProps} {...props.opts.props}>
                  {emptyChildren}
                </Component>
              </FullChild>);
  }
};

export default compose(
  withStyles({}),
)(GenericComponent);

