import React, { useState } from 'react';
import TextField           from '@material-ui/core/TextField';


export default function SearchPanel ( { onSearchChange } ) {

    const [ term, setTerm ] = useState( '' );

    const onChangeTerm = ( e ) => {
        setTerm( e.target.value );
        onSearchChange( e.target.value );
    };

    return (
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            size="small"
            value={term}
            onChange={onChangeTerm}
            placeholder=""
        />
    );
};
