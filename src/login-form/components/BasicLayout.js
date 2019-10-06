import React from 'react';
import {Button} from 'antd';
class BasicLayout extends React.Component {
  render() {

    return (
      <div>
        <h1>BasicLayout</h1>
        
        <Button onClick={()=>this.props.history.push('/login')}>login </Button>
      </div>
    );
  }
}
export default BasicLayout;