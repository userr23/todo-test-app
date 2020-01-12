import React      from 'react';
import { styled } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
import NavLink       from '../../components/NavLink';
import Logo          from './Logo';

const HeaderStyled = styled( 'header' )( ( { theme } ) => ( {
    backgroundColor: theme.palette.primary.main,
    height         : theme.spacing( 10 ),
    padding        : `0 ${theme.spacing( 3 )}px`,
    boxShadow      : theme.shadows[ 5 ]
} ) );

const ContainerStyled = styled( Container )( () => ( {
    height        : '100%',
    margin        : '0 auto',
    padding       : 0,
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'space-between'
} ) );

export default function Header () {
    return (
        <HeaderStyled>
            <ContainerStyled maxWidth='md'>
                <Logo />
                <nav>
                    <NavLink href='/' label='Home' />
                    <NavLink href='/about' label='About' />
                </nav>
            </ContainerStyled>
        </HeaderStyled>
    );
}
