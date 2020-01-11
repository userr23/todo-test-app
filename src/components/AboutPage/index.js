import React      from 'react';
import Typography from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';

import Layout from '../Layout';


export default function AboutPage ( props ) {
    return (
        <Layout pageTitle={props.pageTitle}>
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    About
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    This example is simple Todo application built using MobX, Material UI and NextJS
                </Typography>

            </Container>
        </Layout>
    );
}
