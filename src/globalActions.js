import {map, values, split, head, tail, fromPairs, pipe, join, concat, toLower, converge, toUpper } from 'ramda';
const C = require('konstants');

const collection = map((c) => {
  const functionName = pipe(
    split('_'),
    map(
      converge(
        concat, [pipe(head, toUpper), pipe(toLower, tail)]
      )
    ),
    join(''),
    converge(
      concat, [pipe(head, toLower), tail]
    ),
  )(c)

  return [functionName, (action) => { return { ...action, type: c } }];
}, C);

export default fromPairs(values(collection));


