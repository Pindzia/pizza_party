import React, { Component } from 'react'
import Navigator from './Navigator'
import Footer from './Footer'
import { Container } from '@mui/material'

type Props = {
    children: React.ReactNode
}

type State = Record<string, never>

class Layout extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

  state = {}

  render() {
    return (
      <div>
        <Navigator />
        <Container maxWidth="md">
            {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout;