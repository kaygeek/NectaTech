import React from "react";
import Vector from "./contacts_imgs/Vector.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Input, Button, Select } from 'antd';
import { Row, Col } from "antd";
import 'antd/dist/antd.css';


const Frame = styled.div`
 position:relative;
 background-color: #E5E5E5;
 width: 100%;
 height:1020px;
`


const VectorDiv = styled.div`
 width: 100%;
 overflow: hidden;
`

const FormBody = styled.div`
 position:relative;
 top: -27rem;
 width: 50%;
 padding: 4rem;
 margin-top: 4rem;
 margin-bottom: 1rem;
 margin-left:  36rem;
 margin-right: 6rem;
 background: #FFFFFF;
 z-index: 10px;
`

const PrivacyTag = styled.div`
 width: 90% ;
 font-size: 1rem ;

`

const PrivacyLink = styled(Link)`
 position: relative;

`

const Content = styled.div`
 position: relative;
 top: 5rem;
 margin-left: 6rem;
 list-style: none;

ul{
 list-style: none;
 line-height: 52px;
 color: #E5E5E5;
}

ul li:before{
 content: "✔️"
}

`

const ContentList = styled(Link)`
 list-style: none;
 font-size: 1rem;
 text-align: left;
`

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
    country: '${label} Please select country!'
  }
};

const { Option } = Select;



const MyButton = styled(Button)`
 position:relative;
 width: 30%;
 border-radius: 2px;
 margin-top: 1rem;
 background: #333333;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`





/* eslint-enable no-template-curly-in-string */

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Frame className="contacts-body">
      <VectorDiv>
      <img src={Vector} alt="vector" style={{position:"reletive", width:"300%",}} /> 
      </VectorDiv>
       

       <Content>
         <h2>Contact Us</h2>
         <ul>
           <li><ContentList>Reason to contact us</ContentList></li>
           <li><ContentList>Description of what we can do for your company</ContentList></li>
           <li><ContentList>Reason to contact us</ContentList></li>          
         </ul>
       </Content>

       
      <FormBody>
      <Form layout="vertical" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
        <Row>
          <Col span={12}>
           <Form.Item
              name={['user', 'firstName']}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{width:"570px" ,marginRight:"1rem",}}
             >
              <Input placeholder="Your first name" />
           </Form.Item>
            
          </Col>

          <Col span={12}>
           <Form.Item
              name={['user', 'lastName']}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}

              style={{width:"570px ", marginRight:"1rem",}}
             >
               <Input placeholder="Your last name" />
            </Form.Item>
            
        </Col>

          </Row>

        <Row>
          <Col span={12}>
          <Form.Item
              name={['user', 'workEmail']}
              label="Work Email"
              rules={[
                { 
                  required: true,
                  type: 'email', 
                },
              ]}
              style={{width:"570px" ,marginRight:"1rem",}}
            >
              <Input placeholder="example@acme.com" />
            </Form.Item>
        
          </Col>

          <Col span={12}>
          <Form.Item
              name={['user', 'company']}
              label="Campany"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{width:"570px" ,marginRight:"1rem",}}
            >
            
              <Input placeholder=" Acme inc." />
            </Form.Item>
            
          </Col>
          
        </Row>

        <Col>


        
        {/* /////////////////////// */}
          <Form.Item
            name={["user","coutry"]}
            label="Coutry"
            rules={[{ required: true, message: 'Please select country!' }]} >
              <Select placeholder="Please select country!">
                <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
          </Form.Item>
          
          <Form.Item name={['user', 'introduction']} label="Message (optional)" style={{width:"1160px" ,marginRight:"2rem",}}>
          <Input placeholder=" Autosize hight based on content lines" />
            <Input.TextArea />
            
          </Form.Item>

          <PrivacyTag>By clicking “Submit,” I acknowledge receipt of the NectaTech  <PrivacyLink>Privacy Policy.</PrivacyLink> </PrivacyTag>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <MyButton type="primary" htmlType="submit">
              Submit
            </MyButton>
          </Form.Item> 
          
        </Col>
          
      </Form>

      </FormBody>
      

    </Frame>
  )
}


export default Contact;