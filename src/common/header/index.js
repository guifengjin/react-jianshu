import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionType from '../../store/action'
import './index.scss';

// 无状态组件
const Header = (props) => {
  const { focused, handleFoucs, handleBlur } = props;
  return (
    <div className="header">
      <div className="navbar">
        <a href="/" className="logo"></a>
        <div className="center">
          <div className="center-left">
            <a href="/"><i className="iconfont icon-zhinanzhen"></i>&nbsp;首页</a>
            <a href="/" className="download"><i className="iconfont icon-xiazai"></i>下载App</a>
            <div className="search">
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <input className={focused ? 'focused' : ''} onFocus={handleFoucs} onBlur={handleBlur} placeholder="搜索" type="text" />
              </CSSTransition>
              <i className="iconfont icon-sousuo"></i>
            </div>
          </div>
          <div className="center-right">
            <a className="word" href="/">Aa</a>
            <a href="/">登录</a>
          </div>
        </div>
        <div className="right">
          <a href="/" className="register">注册</a>
          <a href="/" className="write"><i className="iconfont icon-pen"></i> 写文章</a>
        </div>
      </div>
    </div>
  )
}

const mapsStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFoucs() {
      dispatch(actionType.searchFocus())
    },
    handleBlur() {
      dispatch(actionType.searchBlur())
    }
  }
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Header)
