import { observable, computed, action, autorun, toJS } from 'mobx';

const FILTERS = {
    all      : { tag: 'all todos', filter: null },
    active   : { tag: 'active',    filter: t => !t.done },
    done     : { tag: 'done',      filter: t => t.done },
    important: { tag: 'important', filter: t => t.important }
};

const LOCAL_STORAGE_KEY = '__todo__';

class TodosStore {
    @observable todos  = [];
    @observable term   = '';
    @observable label   = '';
    @observable filter = 'all';

    constructor () {
        if ( process.browser ) {
            loadData.call( this );
            autoSave.call( this );
        }
    }

    @computed get totalCount () {
        return this.todos.length;
    }

    @computed get doneCount () {
        return this.todos.filter( FILTERS.done.filter ).length;
    }

    @computed get remainingCount () {
        return this.todos.filter( FILTERS.active.filter ).length;
    }

    @computed get filteredItems () {
        let result = [ ...this.todos ];

        const { filter } = FILTERS[ this.filter ];

        if ( filter ) {
            result = result.filter( filter );
        }

        const searchStr = this.term.trim().toLowerCase();

        if ( searchStr.length ) {
            result = result.filter( t => t.label.toLowerCase().includes( searchStr ) );
        }

        return result;
    }

    @action.bound
    toggleImportant ( id ) {
        const index = this.indexById( id );

        this.todos[ index ] = {
            ...this.todos[ index ],
            important: !this.todos[ index ].important
        };
    }

    @action.bound
    toggleDone ( id ) {
        const index = this.indexById( id );

        this.todos[ index ] = {
            ...this.todos[ index ],
            done: !this.todos[ index ].done
        };
    }

    @action.bound
    addItem ( text ) {
        this.todos.push( formItem( text ) );
    }

    @action.bound
    deleteItem ( id ) {
        this.todos.splice( this.indexById( id ), 1 );
    }

    @action.bound
    changeFilter ( filter ) {
        if ( FILTERS[ filter ] ) {
            this.filter = filter;
        }
    }

    @action.bound
    changeTerm ( term ) {
        this.term = term;
    }

    @action.bound
    changeLabel ( label ) {
        this.label = label;
    }

    indexById ( id ) {
        return this.todos.findIndex( t => t.id === id );
    }
}

export default new TodosStore();

// helpers
function formItem ( label ) {
    const now = Date.now();

    return {
        label,
        added: now,
        important: false,
        done: false,
        id: `item-${ now }`
    };
}

function loadData () {
    const data = localStorage.getItem( LOCAL_STORAGE_KEY );

    if ( data ) {
        try {
            const { todos } = JSON.parse( data );

            this.todos = todos;
        } catch ( error ) {
            // eslint-disable-next-line no-console
            console.error( error );
        }
    }
}

function autoSave () {
    let firstRun = true;

    autorun( () => {
        const json = JSON.stringify( toJS( this ) );

        if ( !firstRun ) {
            localStorage.setItem( LOCAL_STORAGE_KEY, json );
        }
        firstRun = false;
    } );
}
