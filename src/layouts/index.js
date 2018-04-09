import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import 'normalize.css'
import './index.css'

class TemplateWrapper extends React.Component {
  WebFontConfig = {
    google: {
      families: ['PT Sans', 'PT Sans Caption']
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      let WebFont = require('webfontloader')
      WebFont.load(this.WebFontConfig)
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title="Kanban card printer"
          meta={[
            { name: 'description', content: 'Kanban card printer' },
            { name: 'keywords', content: 'kanban card printer"' }
          ]}
        />
        <Header />
        <div>{this.props.children()}</div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
