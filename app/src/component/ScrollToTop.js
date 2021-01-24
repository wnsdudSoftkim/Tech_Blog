import React from 'react'
class ScrollToTop extends React.Component {
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      const { location = {} } = prevProps;
  
      // 컴포넌트 업데이트 시 페이지 이동인지 확인
      if (this.props.location.pathname !== location.pathname) {
        window.scrollTo(0, 0);
      }
    }
    
    render() {
      return this.props.children;
    }
  }
  
  export default ScrollToTop;