import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../Pages/Home'))

const index = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Home} />
    </Switch>
  )
}

export default index
