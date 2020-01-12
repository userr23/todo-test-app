import React         from 'react';
import { styled }    from '@material-ui/core/styles';
import Link          from 'next/link';
import { useRouter } from 'next/router';

const StyledLink = styled( 'a' )( ( { theme, active, showActive } ) => ( {
    marginLeft    : theme.spacing( 2 ),
    fontFamily    : theme.typography.fontFamily,
    textDecoration: 'none',
    cursor        : 'pointer',
    transition    : 'color 400ms',

    color: showActive
        ? active
            ? theme.palette.common.white
            : theme.palette.primary.light
        : 'inherit',

    '&:first-child': {
        marginLeft: 0
    },
    '&:hover'      : {
        color: theme.palette.common.white
    }
} ) );

export default function NavLink ( { href, label, showActive = true } ) {
    const router   = useRouter();
    const isActive = showActive && router.pathname === href;

    return (
        <Link href={href}>
            <StyledLink active={isActive} showActive={showActive}>{label}</StyledLink>
        </Link>
    );
}
