import React from "react";
import Vector from "./contacts_imgs/Vector.svg";
import 'antd/dist/antd.css';
// import './index.css';
import { Form, Input, InputNumber, Button } from 'antd';
import "./contact.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};
/* eslint-enable no-template-curly-in-string */

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="contacts-body">
       <img src={Vector} alt="vector" /> 


      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>


        <div className="form-container1">
          <div>
            <Form.Item

              name={['user', 'firstName']}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Your first name" />
            </Form.Item>

            <Form.Item
              name={['user', 'lastName']}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
             >
               <Input placeholder="Your last name" />
            </Form.Item>


          </div>
          <div>

            <Form.Item
              name={['user', 'workEmail']}
              label="Work Email"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'company']}
              label="Campany"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder=" Acme inc." />
            </Form.Item>


          </div>


        </div>
        <div>
          <Form.Item
            name={['user', 'country']}
            label="Country"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
             <Input placeholder=" Select Country" />
          </Form.Item>
          
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button style={{background: "#333333",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "2px",}} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </div>
          
      </Form>

    </div>
  )
}


export default Contact;