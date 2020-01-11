import React                       from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import Container                   from '@material-ui/core/Container';
import { makeStyles }              from '@material-ui/core/styles';

import AppHeader        from './components/AppHeader';
import SearchPanel      from './components/SearchPanel';
import TodoList         from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import ItemAddForm      from './components/ItemAddForm';


const useStyles = makeStyles( {
    root: {
        display       : 'flex',
        flexWrap      : 'wrap',
        justifyContent: 'space-between',
    },
} );

function App () {
    const classes = useStyles();
    const store   = useObservable( {
            todos : [],
            label : '',
            term  : '',
            filter: 'all',
            get remainingTodos () {
                return store.todos.filter( t => !t.done ).length
            },
            get visibleItems () {
                return toFilter(
                    search( store.todos, store.term ), store.filter );
            },
            onToggleImportant ( id ) {
                store.todos.map( t => {
                    if ( t.id === id ) {
                        t.important = !t.important
                    }
                } );
            },
            onToggleDone ( id ) {
                store.todos.map( t => {
                    if ( t.id === id ) {
                        t.done = !t.done
                    }
                } );
            },
            onItemAdded ( text ) {
                const newItem = createTodoItem( text );
                store.todos.push( newItem );
            },
            deleteItem ( id ) {
                const idx = store.todos.findIndex( ( el ) => el.id === id );
                store.todos.splice( idx, 1 );
            },
            onSearchChange ( term ) {
                store.term = term;
            },
            onLabelChange ( label ) {
                store.label = label;
            },
            onFilterChange ( f ) {
                store.filter = f;
            }
        }
    );


    const createTodoItem = ( label ) => {
        return {
            label,
            added    : `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            important: false,
            done     : false,
            id       : 'item-' + Date.now()
        }
    };


    const search = ( items, term ) => {
        if ( term.length === 0 ) {
            return items;
        }

        return items.filter( ( item ) => {
            return item.label.toLowerCase().includes( term.toLowerCase() );
        } );
    };


    const toFilter = ( items, f ) => {
        switch ( f ) {
            case 'all':
                return items;
            case 'active':
                return items.filter( ( item ) => !item.done );
            case 'done':
                return items.filter( ( item ) => item.done );
            case 'important':
                return items.filter( ( item ) => item.important );
            default:
                return items;
        }
    };


    const doneCount = store.todos.length - store.remainingTodos;

    return (
        <Container maxWidth="sm">
            <AppHeader toDo={store.remainingTodos} done={doneCount} />
            <div className={classes.root}>
                <SearchPanel
                    searchTerm={store.term}
                    onSearchChange={store.onSearchChange}
                />
                <ItemStatusFilter
                    filter={store.filter}
                    onFilterChange={store.onFilterChange}
                />
            </div>

            <TodoList
                todos={store.visibleItems}
                onDeleted={store.deleteItem}
                onToggleImportant={store.onToggleImportant}
                onToggleDone={store.onToggleDone}
            />

            <ItemAddForm
                labelTodo={store.label}
                onLabelChange={store.onLabelChange}
                onItemAdded={store.onItemAdded}
            />
        </Container>
    );
}

export default observer( App );
