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
 height: 1320px;
 overflow: hidden;
 @media  screen and (max-width: 765px){
   height: 1590px;
 }
 @media  screen and (max-width: 734px){
  height: 1790px;
 }
`


const VectorDiv = styled.div`
 width: 100%;
 overflow: hidden;
 z-index: -1;

`

const FormBody = styled.div`
 position: absolute;
 margin-top: -25rem; 
 left: 40%;
 width: 50%;
 padding: 4rem;
 overflow: hidden;
 margin-bottom: 2rem;
 background: #FFFFFF;
 margin-left: 2rem;
 @media  screen and (max-width:765px){
  margin-top: 2rem; 
  width: 80%;
  left: 5%;
  
 }

 @media  screen and (max-width:425px){
   margin: 1rem;
 }
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
 margin-left: 5rem;
 margin-right: 1.5rem;
 list-style: none;
 width: 30%;

ul{
  margin-left:-2.5rem;
  list-style: none;
  line-height: 52px;
  color: black;
  list-style: none;
  font-size: 1rem;
  text-align: left;
  
}

@media  screen and (max-width:765px){
  width: 80%;
  margin-left: 4rem;
}

@media  screen and (max-width:425px){
  margin-left: 2rem;
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
        
          <Form.Item style={{width:"50%"}} name={["user","coutry"]} label="Country"
            rules={[{ required: true, message: 'Please select country!' }]} >
              <Select placeholder="Please select country!">
                <Option label="South Africa" value="SouthArica">South Africa</Option>
                <Option  label="Zimbabwe"value="Zimbabwe">Zimbabwe</Option>
                <Option label="Nigeria"value="Nigeria">Nigeria</Option>
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