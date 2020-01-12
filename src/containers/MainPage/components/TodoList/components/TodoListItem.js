import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    ButtonGroup,
    Button,
    ListItemText
}                     from '@material-ui/core';

const useStyles = makeStyles( {
    root: {
        display       : 'flex',
        flexWrap      : 'no-wrap',
        justifyContent: 'space-between',
        width         : '100%',
    },
} );

const styles = {
    label         : {
        color: '#363B4A',
    },
    labelImportant: {
        color: 'tomato',
    },
    labelDone     : {
        textDecoration: 'line-through',
    },
};

export default function TodoListItem ( {
                                           label, important, done,
                                           deleteItem,
                                           toggleImportant,
                                           toggleDone
                                       } ) {

    const classes = useStyles();

    return (
        <Typography component='div' className={classes.root}>
            <ListItemText primary={label}
                          onClick={toggleDone}
                          style={{
                              ...styles.label,
                              ...( important ? styles.labelImportant : {} ),
                              ...( done ? styles.labelDone : {} ),
                          }}
            />
            <div>
                <ButtonGroup size='small' color='secondary'>
                    <Button variant='outlined'
                            size='small'
                            onClick={toggleImportant}
                    >
                        !
                    </Button>

                    <Button variant='outlined'
                            size='small'
                            onClick={deleteItem}
                    >
                        DEL
                    </Button>
                </ButtonGroup>
            </div>
        </Typography>
    );
}

