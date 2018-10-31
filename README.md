### Configurator is a tech demo for a small piece of code that allows you read in a JSON tree and recursively build an entire React application. 

Note: This is a tech demo only.

[![Configurator Demo](/public/configurator_demo.png)](https://youtu.be/zYqgn1E4FyM "Demo!")

The first thing you do is define your JSON tree structure (currently done in initialstate with Redux). The tree looks like this:

```
tree:{
    "1": {
    "injectProps": {
        "title": "drop drawer"
    },
    "type": "PermDrawer",
    "children": {
        "mainContent": {
        "injectProps": {},
        "type": "SimpleTabs",
        "sort": 1001,
        "children": {
            "tabThree": {
            "injectProps": {},
            "type": "SimpleForm",
            "sort": 1009
            },
            "tabTwo": {
            "injectProps": {
                "style": {
                "minHeight": "300px",
                "height": "100%"
                }
            },
        }
    }
}
```

Then, the magic is done in the Composer component:

```
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
```

The only real requirement is that you define your components up front (good practice to only require components you need for the production build for size considerations). That structure looks like this:

```

//Data
import MockChartData from 'components/data/MockChartData';
import MockTableData from 'components/data/MockTableData';

const Data = {
  MockChartData,
  MockTableData,
}

export default {
  Data: Data,
};
```

Once you have these three things, you just call Composer anywhere in your app and pass it a tree (or portion of a tree). It will walk the tree and create Components, inject props, and then recursively map over any children and do it all over again.

Just for fun, I built a simple Drag and Drop wrapper around the Composer, imported most of Material UI as well as a few custom components, and made a playground. 

You can view a live demo at the URL above. Ctrl-x will toggle "preview", and ctrl-z/shift-ctrl-z do what you would expect them to do. 

