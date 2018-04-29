import React from 'react'
import Link from 'gatsby-link'
import Agenda from '../components/agenda'

const IndexPage = () => (
  <div>
    <Agenda 
      number="1"
      item="First item"
    />
    <Agenda
      number="2"
      item="Second item"
    />
  </div>
)

export default IndexPage
