import React from 'react';
import {Button} from 'antd';
import BlogTable from './BlogTable';

class BasicLayout extends React.Component {
  render() {

    return (
      <div>
        <h1>BasicLayout123</h1>
        <BlogTable />
        <Button onClick={()=>this.props.history.push('/login')}>login </Button>
      </div>
    );
  }
}
export default BasicLayout;