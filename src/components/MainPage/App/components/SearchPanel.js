import React     from 'react';
import TextField from '@material-ui/core/TextField';


export default function SearchPanel ( { term, changeTerm } ) {
    return (
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            size="small"
            value={term}
            onChange={e => {
                changeTerm( e.target.value )
            }}
            placeholder=""
        />
    );
};
