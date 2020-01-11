import React, { useState } from 'react';
import { makeStyles }      from '@material-ui/core/styles';
import TextField           from '@material-ui/core/TextField';
import Box                 from '@material-ui/core/Box';
import Button              from '@material-ui/core/Button';


const useStyles = makeStyles( theme => ( {
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing( 1 ),
            width : '98%',
        },
    },
} ) );

export default function ItemAddForm ( { onItemAdded } ) {

    const [ labelTodo, setLabelTodo ] = useState( '' );

    const classes = useStyles();

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( labelTodo ) {
            onItemAdded( labelTodo );
            setLabelTodo( '' );
        }
    };

    return (
        <form className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
        >
            <TextField
                id="standard-search"
                label="Add ToDo"
                type="search"
                value={labelTodo}
                onChange={( e ) => setLabelTodo( e.target.value )}
                placeholder="What needs to be done?"
            />
            <Box>
                <Button className={classes.root.margin}
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
