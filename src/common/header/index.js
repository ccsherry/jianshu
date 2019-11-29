import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {

    render() {
        return ( <
            HeaderWrapper >
            <
            Logo href = '/' / >
            <
            Nav >
            <
            NavItem className = 'left active' > 首页 < /NavItem> <
            NavItem className = 'left' > 下载App < /NavItem> <
            NavItem className = 'right' > 登录 < /NavItem> <
            NavItem className = 'right' > Aa < /NavItem> <
            SearchWrapper >
            <
            CSSTransition in = { this.props.focused }
            classNames = "slide"
            timeout = { 200 } >
            <
            NavSearch className = { this.props.focused ? 'focused' : '' }
            onFocus = { this.handleInputFocus }
            onBlur = { this.handleInputBlur } >
            <
            /NavSearch> < /
            CSSTransition > <
            i className = { this.props.focused ? 'focused iconfont' : 'iconfont' } > & #xe601; < /i> < /
            SearchWrapper > <
            /Nav> <
            Addition >
            <
            Button className = "writting" >
            <
            i className = 'iconfont' > & #xe601; < /i>写文章 < /
            Button > <
            Button className = "reg" > 注册 < /Button> < /
            Addition > <
            /HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);