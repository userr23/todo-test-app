import React      from 'react';
import Typography from '@material-ui/core/Typography';


export default function AboutPage ( ) {
    return (
        <>
            <Typography variant="h3" gutterBottom>
                About
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                This example is simple ToDo application built using MobX, Material UI and NextJS
            </Typography>
        </>
    );
}
