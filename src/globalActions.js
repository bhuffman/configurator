import {map, values, split, head, tail, fromPairs} from 'ramda';

const C = require('konstants');

const collection = values(map((c) => {
    const functionName = map((chunk) => {
        return head(chunk.toLowerCase()).toUpperCase() + tail(chunk.toLowerCase())
    },split("_", c)).join('')

    const initName = head(functionName).toLowerCase() + tail(functionName)

    return [initName, (action) => { return {...action, type: c}}];
}, C));

export default fromPairs(collection);
