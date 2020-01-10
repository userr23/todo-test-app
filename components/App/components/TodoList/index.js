import React          from 'react';
import List           from '@material-ui/core/List';
import ListItem       from '@material-ui/core/ListItem';
import ListItemText   from '@material-ui/core/ListItemText';
import Divider        from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';

import TodoListItem from './components/TodoListItem';


const useStyles = makeStyles( theme => ( {
    root: {
        marginTop   : 10,
        marginBottom: 10,
    },
} ) );

export default function TodoList ( {
                                       todos, onDeleted,
                                       onToggleImportant,
                                       onToggleDone
                                   } ) {
    const classes  = useStyles();
    const elements = todos.map( ( item ) => {

        const { id, ...itemProps } = item;
        return (
            <ListItem key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted( id )}
                    onToggleImportant={() => onToggleImportant( id )}
                    onToggleDone={() => onToggleDone( id )}
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