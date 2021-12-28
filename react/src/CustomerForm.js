import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Radio,
  Space,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";

const areas = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Pune", value: "Pune" },
];

const onFinish = (values) => {
  console.log("Received values of form:", values);
};

const handleChange = (form) => {
  form.setFieldsValue({ sights: [] });
};

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitFormForLogin = this.submitFormForLogin.bind(this);
  }

  onFinish(values) {
    console.log("Success i", values);
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  submitFormForLogin(values) {
    console.log("Login Success");
    console.log(values);
    console.log("Your user name " + values.username);
    console.log("Your Password" + values.password);
  }

  render() {
    return (
        <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="Name"
                rules={[
                    {
                    required: true,
                    message: "Please input your username!",
                    },
                ]}
                >
                <Input />
            </Form.Item>
       
        
            <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                type: "email",
                message: "The input is not valid E-mail!",
                },
                {
                required: true,
                message: "Please input your E-mail!",
                },
            ]}
            >
            <Input />
            </Form.Item>
        

        <Form.Item name="date-picker" label="DatePicker" required="true">
          <DatePicker />
        </Form.Item>

        <Form.Item name="Gender" label="Gender" required="true">
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Contact" name="Contact" required="true">
          <Space direction="vertical">
            <Input addonBefore="+91" />
          </Space>
        </Form.Item>

        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >

        
        <Form.Item
            name="Building Name"
            label="Building Name"
            rules={[{ required: true, message: "Missing area" }]}
          >
            <Input />
          </Form.Item>
       

        <Form.Item
          name="area"
          label="Area"
          rules={[{ required: true, message: "Missing area" }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          name="Lane"
          label="Lane"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="City"
          label="City"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select options={areas} onChange={handleChange} />
        </Form.Item>
        </Form>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        
        <Form.Item>
          <Button
            type="danger"
            htmlType="submit"
            onClick={this.submitFormForLogin}
          >
            Submit
          </Button>
        </Form.Item>
</Form>
    );
  }
}

export default CustomerForm;
