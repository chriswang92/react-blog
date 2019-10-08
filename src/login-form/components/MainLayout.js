
import React from 'react';
import LoginFormCtn from '../containers/LoginFormCtn';
import ContentCtn from '../containers/ContentCtn';

class MainLayout extends React.Component {
  render() {
    return(
      <div>
        <LoginFormCtn isLogin={true}/>
        <ContentCtn />
      </div>
    );
  }
}
export default MainLayout;