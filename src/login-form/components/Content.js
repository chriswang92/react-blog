import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Content extends React.Component {
    

  render() {
    // const {getFieldDecorator} = this.props.form;
    let key = 1;
    return (
      <div>
        <h1>Content, total users#:
           {/* {this.props.users.length} */}
        </h1>
        {/* {this.props.users.map(u=><div key={++key}>id: {key}, username: {u.username}</div>)} */}
      </div>
    );
  }
}
// export default Form.create({})(LoginForm);
export default Content;