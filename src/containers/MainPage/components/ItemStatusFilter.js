import React                   from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

import FILTERS from '../../../data/filters.data';

export default function ItemStatusFilter ( { filter, changeFilter } ) {

    const buttons = FILTERS.map( ( { id, label } ) => {
        const isActive      = filter === id;
        const buttonVariant = isActive ? 'contained' : 'outlined';

        return (
            <Button
                variant={buttonVariant}
                key={id}
                onClick={() => changeFilter( id )}
            >
                {label}
            </Button>
        );
    } );

    return (
        <ButtonGroup size='small' color='primary' style={{ margin: '5px 0' }}>
            {buttons}
        </ButtonGroup>
    );
}
