import React from 'react';
import Link  from 'next/link';

const linkStyle = {
    marginRight   : 15,
    marginBottom  : 15,
    fontFamily    : 'Roboto',
    fontSize      : '1.5em',
    textDecoration: 'none',
    color         : 'tomato',
};

export default function Header ( ) {
    return (
        <header className="header">
            <nav
                className="nav"
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
            <style jsx>
                {`
                .header {
                    margin-bottom: 2rem;
                }
                  nav {
                    padding: 1.5rem 1.25rem;
                    border-bottom: 1px solid #ebebeb;
                    display: flex;
                    justify-content: start;
                    flex-direction: row;
                    align-items: center;
                  }
                  @media (min-width: 900px) {
                    .header {
                      margin-bottom: 0;
                      height: 100vh;
                      position: fixed;
                      left: 0;
                      top: 0;
                    }
                    .nav {
                      padding: 2rem;
                      width: 10vw;
                      height: 100%;
                      border-right: 1px solid #ebebeb;
                      border-bottom: none;
                      flex-direction: column;
                      align-items: start;
                `}
            </style>
        </header>
    );
}

