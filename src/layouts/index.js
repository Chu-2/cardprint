import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import 'normalize.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="cardprint"
      meta={[
        { name: 'description', content: 'Kanban card printer' },
        { name: 'keywords', content: 'kanban card printer"' }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
