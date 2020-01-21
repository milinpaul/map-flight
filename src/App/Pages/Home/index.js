import { connect } from 'react-redux'

import HomeContainer from './Home.Container'
import { getUserDataRequest } from './dux'

const mapStateToProps = (state) => ({
  data: state.HomeReducer.data,
  loading: state.HomeReducer.loading
})

const mapDispatchToProps = {
  getUserDataRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
