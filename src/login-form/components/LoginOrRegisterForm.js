import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import {Redirect} from 'react-router-dom';
import ContentCtn from '../containers/ContentCtn';
import {Link} from 'react-router-dom';

const Password = Input.Password;
const FormItem = Form.Item;
class LoginOrRegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('handleSubmit has err: ',err);
      }
      console.log('handleSubmit success, Received values of form: ', values);
      this.props.registerUser(values);
    });
  };

  handleValidator = (rule, val, callback) => {
    if (!val) {
      callback();
    }
    console.log('username = ',val);
    console.log('username = ',val.length);
    let validateResult = val.length >= 8 ;//&& val.length < 10;
    // console.log('username = ',validateResult);
    if (!validateResult) {
      callback('Please input validate username, length must be >=8, current length='+val.length);
    }
    callback();
  }

  render() {
    const {isLogin} = this.props;
    const {getFieldDecorator} = this.props.form;
    console.log('rendering LoginOrRegisterForm, isLogin=',isLogin);
    return (
      <div>
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

        {isLogin?
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
        </FormItem>
        : null}
        
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            {isLogin? 'Login321':'Register123'}
          </Button>
          Or <Link to={isLogin?'/register':'/login'}>{isLogin?'register':'login'} now!</Link>
        </FormItem>
      </Form>
        
      <Button><Link to='/home'>home</Link> </Button>
      <hr />
        </div>
    );
  }
}
export default Form.create({})(LoginOrRegisterForm);