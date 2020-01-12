import React                       from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { styled }                  from '@material-ui/core/styles';

import TodosStore from '../../store/TodosStore';

import AppHeader        from './components/AppHeader';
import SearchPanel      from './components/SearchPanel';
import TodoList         from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import ItemAddForm      from './components/ItemAddForm';


const FiltersWrapper = styled( 'div' )( () => ( {
    display       : 'flex',
    flexWrap      : 'wrap',
    justifyContent: 'space-between',
    alignItems    : 'center'
} ) );

function App () {
    const store = useObservable( TodosStore );

    return (
        <>
            <AppHeader
                toDo={store.remainingCount}
                done={store.doneCount}
            />
            <FiltersWrapper>
                <SearchPanel
                    term={store.term}
                    changeTerm={store.changeTerm}
                />
                <ItemStatusFilter
                    filter={store.filter}
                    changeFilter={store.changeFilter}
                />
            </FiltersWrapper>

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
        </>
    );
}

export default observer( App );
