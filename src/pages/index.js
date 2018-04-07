import React from 'react'
import Link from 'gatsby-link'
import QueryString from 'querystringify'
import CardForm from '../components/CardForm'
import Controls from '../components/Controls'
import Bookmarklet from '../components/Bookmarklet'
import styles from './styles.module.css'

class IndexPage extends React.Component {
  state = {
    card: {
      background: '#ffffff',
      foreground: '#000000',
      foregroundControl: 'dark',
      width: '2.75in',
      height: '2.75in',
      sizeControl: 'large',
      number: '',
      subject: ''
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
      card.foregroundControl = 'dark'
    } else {
      card.foreground = '#ffffff'
      card.foregroundControl = 'light'
    }

    this.setState({ card })
  }

  handleCardSize = event => {
    let card = this.state.card

    if (event.target.value == 'big') {
      card.width = '2.75in'
      card.height = '2.75in'
      card.sizeControl = 'large'
    } else {
      card.width = '1.75in'
      card.height = '1.75in'
      card.sizeControl = 'small'
    }

    this.setState({ card })
  }

  handleCardNumber = event => {
    let card = this.state.card
    card.number = event.target.value
    this.setState({ card })
  }

  handleCardSubject = event => {
    let card = this.state.card
    card.subject = event.target.value
    this.setState({ card })
  }

  componentDidMount() {
    let query = QueryString.parse(location.search)
    let card = this.state.card
    card.number = query.number
    card.subject = query.subject
    this.setState({ card })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.canvas}>
          <CardForm
            card={this.state.card}
            handleCardNumber={this.handleCardNumber}
            handleCardSubject={this.handleCardSubject}
          />
        </div>
        <div className={styles.controls}>
          <Controls
            card={this.state.card}
            handleCardBgColor={this.handleCardBgColor}
            handleCardFgColor={this.handleCardFgColor}
            handleCardSize={this.handleCardSize}
          />
        </div>
      </div>
    )
  }
}

export default IndexPage
