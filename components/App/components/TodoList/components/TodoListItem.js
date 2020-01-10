import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography     from '@material-ui/core/Typography';
import ButtonGroup    from '@material-ui/core/ButtonGroup';
import Button         from '@material-ui/core/Button';
import ListItemText   from '@material-ui/core/ListItemText';


const useStyles = makeStyles( {
    root          : {
        display       : 'flex',
        flexWrap      : 'no-wrap',
        justifyContent: 'space-between',
        width         : '100%',
    },
    buttonsWrapper: {
        display : 'flex',
        flexWrap: 'no-wrap',
    },
} );

const styles = {
    label         : {
        color: 'slategrey',
    },
    labelImportant: {
        fontWeight: 'fontWeightBold',
        fontSize  : 'h6.fontSize',
        color     : 'tomato',
    },
    labelDone     : {
        textDecoration: 'line-through',
    },
};

export default function TodoListItem ( {
                                           label, onDeleted,
                                           onToggleImportant,
                                           onToggleDone,
                                           done, important
                                       } ) {

    const classes = useStyles();

    return (
        <Typography component="div" className={classes.root}>
            <ListItemText primary={label}
                          onClick={onToggleDone}
                          style={{
                              ...styles.label,
                              ...( important ? styles.labelImportant : {} ),
                              ...( done ? styles.labelDone : {} ),
                          }}
            />
            <div className={classes.buttonsWrapper}>
                <ButtonGroup size="small" color="secondary">
                    <Button variant="outlined"
                            size="small"
                            onClick={onToggleImportant}
                    >
                        !
                    </Button>

                    <Button variant="outlined"
                            size="small"
                            onClick={onDeleted}
                    >
                        DEL
                    </Button>
                </ButtonGroup>
            </div>
        </Typography>
    );
}

