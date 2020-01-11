import React      from 'react';
import Typography from '@material-ui/core/Typography';


const footerStyle = {
    display       : 'flex',
    flex          : '0 0 auto',
    justifyContent: 'center',
    flexDirection : 'row',
    alignItems    : 'center',
    marginTop     : '5rem',
    width         : '100%',
    height        : '10vh',
    borderTop     : '1px solid #ebebeb',
};

export default function Footer () {
    return (
        <footer style={footerStyle}>
            <Typography variant="subtitle1">
                Test App
            </Typography>
        </footer>
    );
}

