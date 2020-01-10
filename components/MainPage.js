import React, { useEffect } from 'react';
import Link                 from 'next/link';
import App                  from './App';
import Typography           from '@material-ui/core/Typography';


export default function MainPage ( props ) {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <nav>
                <Link href={props.linkTo}>
                    <a>ReadMe</a>
                </Link>
            </nav>
            <App />
        </div>
    );
}

