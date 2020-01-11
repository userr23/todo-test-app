import React     from 'react';
import TextField from '@material-ui/core/TextField';


export default function SearchPanel ( { searchTerm, onSearchChange } ) {
    return (
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={e => {
                onSearchChange( e.target.value )
            }}
            placeholder=""
        />
    );
};
