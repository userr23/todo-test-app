import React          from 'react';
import {
    Divider,
    List,
    ListItem,
    ListItemText
}                     from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import TodoListItem from './components/TodoListItem';


const useStyles = makeStyles( {
    root: {
        marginTop   : 10,
        marginBottom: 10,
    },
} );

export default function TodoList ( {
                                       todos, deleteItem,
                                       toggleImportant,
                                       toggleDone
                                   } ) {
    const classes  = useStyles();
    const elements = todos.map( ( item ) => {

        const { id, ...itemProps } = item;
        return (
            <ListItem key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    deleteItem={() => deleteItem( id )}
                    toggleImportant={() => toggleImportant( id )}
                    toggleDone={() => toggleDone( id )}
                />
            </ListItem>
        );
    } );

    return (
        <List>
            <Divider className={classes.root} />
            {!todos.length && <ListItemText secondary="ToDo list is empty. Write something to do..." />}
            {elements}
            <Divider className={classes.root} />
        </List>
    );
}
