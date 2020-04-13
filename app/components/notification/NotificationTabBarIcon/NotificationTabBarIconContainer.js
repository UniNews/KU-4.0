import { connect } from 'react-redux';
import NotificationView from './NotificationTabBarIconView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)( NotificationView );