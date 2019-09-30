import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const Password = Input.Password;
const FormItem = Form.Item;
class LoginForm extends React.Component {
    
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.registerUser(values);
      }
    });
  };

  handleValidator = (rule, val, callback) => {
    if (!val) {
      callback();
    }
    console.log('username = ',val);
    console.log('username = ',val.length);
    let validateResult = val.length > 8 && val.length < 10;
    // console.log('username = ',validateResult);
    if (!validateResult) {
      callback('Please input validate username, length must be >8 and <10, current length='+val.length);
    }
    callback();
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            // initialValue: {username:'', password:''},
            rules: [
              // {required: true, message: 'Please input your username!'},
              // {min: 8, message: 'username needs to be at least 8 chars!'}
              { validator: this.handleValidator }
            ],
          })(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {required: true, message: 'Please input your Password!'},
              {min: 8, message: 'password needs to be at least 8 chars!'}
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>
              Remember me
            </Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
export default Form.create({})(LoginForm);