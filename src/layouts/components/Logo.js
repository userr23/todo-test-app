import React      from 'react';
import { styled } from '@material-ui/core/styles';

import NavLink from '../../components/NavLink';

const LogoH1 = styled( 'h1' )( ( { theme } ) => ( {
    color        : theme.palette.common.white,
    fontFamily   : theme.typography.fontFamily,
    fontSize     : theme.spacing( 3 ),
    fontWeight   : theme.typography.fontWeightMedium,
    textTransform: 'uppercase'
} ) );

export default function Logo () {
    return (
        <LogoH1>
            <NavLink href='/' label='Todo App' showActive={false} />
        </LogoH1>
    );
}
