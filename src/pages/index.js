import React from 'react'
import Link from 'gatsby-link'
import CardForm from '../components/CardForm'
import Controls from '../components/Controls'

class IndexPage extends React.Component {
  state = {
    card: {
      background: '#ffffff',
      foreground: '#000000',
      width: '2.75in',
      height: '2.75in'
    }
  }

  handleCardBgColor = color => {
    let card = this.state.card
    card.background = color.hex
    this.setState({ card })
  }

  handleCardFgColor = event => {
    let card = this.state.card

    if (event.target.value == 'dark') {
      card.foreground = '#000000'
    } else {
      card.foreground = '#ffffff'
    }

    this.setState({ card })
  }

  handleCardSize = event => {
    let card = this.state.card

    if (event.target.value == 'big') {
      card.width = '2.75in'
      card.height = '2.75in'
    } else {
      card.width = '1.75in'
      card.height = '1.75in'
    }

    this.setState({ card })
  }

  render() {
    return (
      <div>
        <CardForm card={this.state.card} />
        <Controls
          card={this.state.card}
          handleCardBgColor={this.handleCardBgColor}
          handleCardFgColor={this.handleCardFgColor}
          handleCardSize={this.handleCardSize}
        />
      </div>
    )
  }
}

export default IndexPage
