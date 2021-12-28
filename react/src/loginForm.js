import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitFormForLogin = this.submitFormForLogin.bind(this);
  }

  onFinish(values) {
    console.log('Success i', values);
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }

  submitFormForLogin(values) {
    console.log('Login Success');
    console.log(values);
    console.log('Your user name ' + values.username);
    console.log('Your Password' + values.password);
  }

  render() {
    return (
      <Form
        name='basic'
        initialValues={{
          remember: true
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete='off'>
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type='danger'
            htmlType='submit'
            onClick={this.submitFormForLogin}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
