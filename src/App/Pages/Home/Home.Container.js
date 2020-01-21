import React from 'react'

import Typography from '../../Components/UI/Typography'
import withLoader from '../../Components/Loader/withLoader'

const RenderList = React.lazy(() => import('./RenderList'))

const RenderListWithLoader = withLoader(RenderList)

class HomeContainer extends React.Component {
  componentDidMount() {
    const { getUserDataRequest } = this.props
    getUserDataRequest()
  }

  render() {
    const { data, loading } = this.props
    const { PrimaryHeading } = Typography

    return (
      <>
        <PrimaryHeading>List Of Users</PrimaryHeading>
        <RenderListWithLoader isLoading={loading} data={data} />
      </>
    )
  }
}

export default HomeContainer
