import React from 'react';
import Link  from 'next/link';

const headerStyle = {
    flex        : '0 0 auto',
    marginBottom: '2rem',
};

const navStyle = {
    padding       : '1.5rem 1.25rem',
    borderBottom  : '1px solid #ebebeb',
    display       : 'flex',
    justifyContent: 'start',
    flexDirection : 'row',
    alignItems    : 'center',
};

const linkStyle = {
    marginRight   : 15,
    marginBottom  : 15,
    fontFamily    : 'Roboto',
    fontSize      : '1.5em',
    textDecoration: 'none',
    color         : 'tomato',
};

export default function Header () {
    return (
        <header style={headerStyle}>
            <nav
                style={navStyle}
                role="navigation"
                aria-label="main navigation"
            >
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </nav>
        </header>
    );
}

