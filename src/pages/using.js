import * as React from 'react'
import Layout from '../components/layout'

const UsingPage = () => {
  return (
    <Layout pageTitle="Using">
      <p>The tools I'm using to build this here site. So maybe this should be <tt>/colophon</tt>?</p>
      <p>Whatever.</p>
      <ul>
        <li><a href="https://gatsbyjs.org">Gatsby</a></li>
        <li><a href="https://neovim.io">Neovim</a></li>
      </ul>
    </Layout>
  )
}

export default UsingPage
