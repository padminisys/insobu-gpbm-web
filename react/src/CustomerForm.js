import { Form, Select, Input, Button, Checkbox, DatePicker, Radio } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
// import DatePicker from "./datepicker";
const { Option } = Select;

const areas = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Pune", value: "Pune" },
];

const selectBefore = (
  <Select defaultValue="+91" style={{ width: 70 }}>
    <Option value="+91">+91</Option>
    <Option value="+33">+33</Option>
    <Option value="45">+45</Option>
    <Option value="63">+63</Option>
    <Option value="77">+77</Option>
  </Select>
);

// const onFinish = (values) => {
//   console.log("Received values of form:", values);
// };

// const handleChange = (form) => {
//   form.setFieldsValue({ sights: [] });
// };

class CustomerForm extends React.Component {
  onFinish(values) {
    console.log("Success", values);
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
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
          <DatePicker onChange={(date) => console.log(date)} />
        </Form.Item>

        <Form.Item
          name="Gender"
          label="Gender"
          required="true"
          message="This field is not selected"
        >
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <FormItem
          label="Contact"
          name="Contact"
          required="true"
          style={{ width: "100%" }}
        >
          <Input addonBefore={selectBefore} />
        </FormItem>
        <FormItem
          name="Building Name"
          label="Building Name"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Input />
        </FormItem>
        <FormItem
          name="area"
          label="Area"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Input />
        </FormItem>
        <FormItem
          name="Lane"
          label="Lane"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Input />
        </FormItem>
        <FormItem
          name="City"
          label="City"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select options={areas}  />
        </FormItem>

        <FormItem name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.submitFormForLogin}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default CustomerForm;
