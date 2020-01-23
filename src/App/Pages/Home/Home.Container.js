import React from 'react'

const RenderMap = React.lazy(() => import('./RenderMap'))

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <RenderMap />
      </>
    )
  }
}

export default HomeContainer
