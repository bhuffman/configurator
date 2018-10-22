import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose, head, isEmpty, mapObjIndexed, values, isNil} from 'ramda';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const styles = theme => ({
    SimpleTable: {
      height: '100%'
    }
});

class SimpleTable extends Component {
    render() {
        const {classes, data, columns} = this.props;

        const autoHeader = !isEmpty(data) && !isNil(data) ?
          values(mapObjIndexed((col, key) => {
              return {Header: key, accessor: key}
            },head(data)))
          :
          []

        return (<ReactTable
            data={data}
            columns={autoHeader}
            className={classes.SimpleTable}
        />)
    }
}

export default compose(withStyles(styles))(SimpleTable);