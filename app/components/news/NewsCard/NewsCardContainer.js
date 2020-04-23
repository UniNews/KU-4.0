import { connect } from 'react-redux'
import NewsCardView from './NewsCardView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCardView)