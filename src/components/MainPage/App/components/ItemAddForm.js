import React                      from 'react';
import { makeStyles }             from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';


const useStyles = makeStyles( {
    root: {
        marginTop   : 15,
        marginBottom: 15,
        width       : '100%',
    },
} );

export default function ItemAddForm ( { label, changeLabel, addItem } ) {

    const classes = useStyles();

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( label ) {
            addItem( label );
            changeLabel( '' );
        }
    };

    return (
        <form className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
        >
            <TextField className={classes.root}
                       id="standard-search"
                       label="Add ToDo"
                       type="text"
                       autoFocus={true}
                       value={label}
                       onChange={e => changeLabel( e.target.value )}
                       placeholder="What needs to be done?"
            />
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                >
                    Add Item
                </Button>
            </Box>
        </form>
    );
};
