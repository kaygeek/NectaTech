import React from "react";
import Vector from "./contacts_imgs/Vector.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Input, Button, Select,Space } from 'antd';
import { Row, Col } from "antd";
import { AiOutlineCheck } from "react-icons/ai";


const Frame = styled.div`
 /* position:relative; */
 background-color: #E5E5E5;
 width: 100%;
 height:1020px;

`


const VectorDiv = styled.div`
 width: 100%;
 overflow: hidden;

`

const FormBody = styled.div`
position: absolute;
 display:flex;
 top: 9rem;  
 left:37rem;
 width: auto;
 padding: 4rem;
 margin-bottom: 1rem;
 /* margin-left:  37rem; */
 margin-right: 12rem;
 background: #FFFFFF;
 z-index: 1;
 
`

const PrivacyTag = styled.div`
 width: 90% ;
 font-size: 1rem ;

`

const PrivacyLink = styled(Link)`
 position: flex;

`

const Content = styled.div`
 margin-top: 3rem;
 margin-left: 6rem;
 margin-right:20rem;
 list-style: none;

ul{
  margin-left:-2.5rem;
  list-style: none;
  line-height: 52px;
  color: black;
  list-style: none;
  font-size: 1rem;
  text-align: left;
}
`


const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 24,
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
 width: 120px;
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


  // const history = useHistory()

  // const onClick = useCallback(
  //   () => {
  //     history.push('/contact')
  //   },
  //   [history],
  // )

  return (
    <Frame className="contacts-body">
      <VectorDiv>
      <img src={Vector} alt="vector" style={{position:"reletive", width:"300%",}} /> 
      </VectorDiv>
       

       <Content>
         <h2>Contact Us</h2>
         <ul>
           <Link to=""><li><AiOutlineCheck/>Reason to contact us</li></Link>
           <Link to=""><li><AiOutlineCheck/>Description of what we can do for your company</li></Link>
           <Link to=""><li><AiOutlineCheck/>Reason to contact us</li> </Link>          
         </ul>
       </Content>

       
      <FormBody>
      <Form layout="vertical" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >

        <Row gutter={8}>
          <Col  span={12} xs={24} sm={24} md={24} lg={24} xl={12}>
           <Form.Item name={['user', 'firstName']} label="First Name" rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder="Your first name" />
           </Form.Item>
            
          </Col>
          <Col span={12} xs={24} sm={24} md={24} lg={24} xl={12}>
           <Form.Item name={['user', 'lastName']} label="Last Name" rules={[
                {
                  required: true,
                },
              ]}>
               <Input placeholder="Your last name" />
            </Form.Item>
            
            </Col>

        </Row>
          
          
        <Row gutter={8}>
              
          <Col span={12} xs={24} sm={24} md={24} lg={24} xl={12}>
          <Form.Item
              name={['user', 'workEmail']}
              label="Work Email"
              rules={[
                { 
                  required: true,
                  type: 'email', 
                },
              ]}>
              <Input placeholder="example@acme.com" />
            </Form.Item>
        
         </Col>
          <Col span={12} xs={24} sm={24} md={24} lg={24} xl={12}>
            <Form.Item
              name={['user', 'company']}
              label="Campany"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder=" Acme inc." />
             </Form.Item>
          </Col>
          
        </Row>

      <Col>
        <Row >
        
          <Form.Item style={{width:"50%"}} name={["user","coutry"]} label="Coutry"
            rules={[{ required: true, message: 'Please select country!' }]} >
              <Select placeholder="Please select country!">
                <Option label="male" value="SouthArica">South Africa</Option>
                <Option  label="female"value="Zimbabwe">Zimbabwe</Option>
                <Option label="other"value="Nigeria">Nigeria</Option>
              </Select>
          </Form.Item>
        </Row>
         
        <Row  xs={24} sm={24} md={24} lg={24} xl={24}>
       
          <Form.Item name={['user', 'introduction']} label="Message (optional)">
           <Input placeholder=" Autosize hight based on content lines" />
            <Input.TextArea /> 
          </Form.Item>
        </Row>
          

          <PrivacyTag>By clicking “Submit,” I acknowledge receipt of the NectaTech  <PrivacyLink>Privacy Policy.</PrivacyLink> </PrivacyTag>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Link to="/thankyoucard">
              <MyButton type="primary" htmlType="submit">
               Submit
              </MyButton>
            </Link>
          </Form.Item>        
        </Col>     
      </Form>
      </FormBody>
    </Frame>
  )
}


export default Contact;