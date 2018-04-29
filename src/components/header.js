import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, version }) => (
  <div
    style={{
      background: '#d81c3f',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <span style={{fontSize: `0.55em`, verticalAlign: `text-top`, color: `#aaa`}}>
          {version} 
        </span>
      </h1>
    </div>
  </div>
)

export default Header
