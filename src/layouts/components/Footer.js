import React from 'react';

import { styled } from '@material-ui/core/styles';

const FooterStyled = styled( 'footer' )( ( { theme } ) => ( {
    backgroundColor: theme.palette.grey[ '800' ],
    height         : theme.spacing( 10 ),
    padding        : `0 ${theme.spacing( 3 )}px`,
} ) );

export default function Footer () {
    return (
        <FooterStyled>
        </FooterStyled>
    );
}

