import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
// Styles
import footerStyles from 'components/Footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }`
  )
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer;