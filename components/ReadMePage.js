import React, { useEffect } from 'react';
import Link                 from 'next/link';
import Typography           from '@material-ui/core/Typography';
import Container            from '@material-ui/core/Container';


export default function OtherPage ( props ) {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <nav>
                <Link href={props.linkTo}>
                    <a>Main Page</a>
                </Link>
            </nav>
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    About
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    This example is simple Todo application built using MobX, Material UI and NextJS
                </Typography>

            </Container>
        </div>
    );
}
