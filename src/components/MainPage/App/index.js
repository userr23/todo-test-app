import React                       from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import Container                   from '@material-ui/core/Container';
import { makeStyles }              from '@material-ui/core/styles';

import AppHeader        from './components/AppHeader';
import SearchPanel      from './components/SearchPanel';
import TodoList         from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import ItemAddForm      from './components/ItemAddForm';
import TodosStore       from '../../../store/TodosStore';


const useStyles = makeStyles( {
    root: {
        display       : 'flex',
        flexWrap      : 'wrap',
        justifyContent: 'space-between',
    },
} );

function App () {
    const classes = useStyles();
    const store   = useObservable( TodosStore );

    return (
        <Container maxWidth="sm">
            <AppHeader toDo={store.remainingCount} done={store.doneCount} />
            <div className={classes.root}>
                <SearchPanel
                    term={store.term}
                    changeTerm={store.changeTerm}
                />
                <ItemStatusFilter
                    filter={store.filter}
                    changeFilter={store.changeFilter}
                />
            </div>

            <TodoList
                todos={store.filteredItems}
                deleteItem={store.deleteItem}
                toggleImportant={store.toggleImportant}
                toggleDone={store.toggleDone}
            />

            <ItemAddForm
                label={store.label}
                changeLabel={store.changeLabel}
                addItem={store.addItem}
            />
        </Container>
    );
}

export default observer( App );
