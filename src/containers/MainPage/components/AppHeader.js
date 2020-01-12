import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography     from '@material-ui/core/Typography';


const useStyles = makeStyles( {
    root: {
        textAlign   : 'center',
        marginBottom: 30,
    },
} );

export default function AppHeader ( { toDo, done } ) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h2' gutterBottom>
                ToDo List
            </Typography>
            <Typography variant='h6' gutterBottom>
                {toDo} more to do, {done} done
            </Typography>
        </div>
    );
}
