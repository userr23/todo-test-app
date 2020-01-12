import React from 'react';

import { styled }    from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const ContainerStyled = styled( Container )( ( { theme } ) => ( {
    paddingTop   : theme.spacing( 5 ),
    paddingBottom: theme.spacing( 5 ),
    minHeight    : `calc(100vh - ${theme.spacing( 20 )}px)`,
} ) );

export default function ContentWrapper ( { content } ) {
    return (
        <ContainerStyled maxWidth="sm">
            {content}
        </ContainerStyled>
    );
}
