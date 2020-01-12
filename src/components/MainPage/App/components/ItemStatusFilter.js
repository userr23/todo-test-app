import React                   from 'react';
import { ButtonGroup, Button } from '@material-ui/core';


export default function ItemStatusFilter ( { filter, changeFilter } ) {

    const buttonTypes = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
        { name: 'important', label: 'Important' }
    ];

    const buttons = buttonTypes.map( ( { name, label } ) => {
        const isActive      = filter === name;
        const buttonVariant = isActive ? 'contained' : 'outlined';
        return (
            <Button variant={buttonVariant}
                    key={name}
                    onClick={() => changeFilter( name )}
            >
                {label}
            </Button>
        );
    } );

    return (
        <ButtonGroup size="small" color="primary">
            {buttons}
        </ButtonGroup>
    );
}
