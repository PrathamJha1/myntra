import React, { useContext, useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
// import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import AuthData from "./LoginDataDummmy";
import { UserContext } from "../Context/AuthContext";
export default function Login() {
   const emailRef = useRef();
   const passwordRef = useRef();
   const {setUser} = useContext(UserContext);
   // const { login } = useAuth();
   const [error, setError] = useState("");
   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();
      const data = AuthData.filter(({email,password})=>{
         if(email === emailRef.current.value && password === passwordRef.current.value){
            return true;
         }
      })
      if(data.length!==0){
         setUser(emailRef.current.value);
         navigate("/home",{replace:"true"});
      }else{
         alert("Credentials do not match");
      }
      
   }

   const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
   });


   return (
      <div
         style={{
            width: "30%",
            margin: "auto",
           // height: "40vh",
            marginTop: "10%",
            marginBottom: "3%",
            borderRadius:"2%",
           boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
           padding:"1%"
          
         }}
      >
        

         {/*Bootstrap  */}
         <Container>
         <img style={{width:"100%",marginBottom:"5%"}}
               src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg"></img>
            <Card>
               {/* <h2>Log In</h2> */}
               {error && <Alert variant="danger">{error}</Alert>}

               <Card.Body>
              
                  <h2 className="text-center mb-4" >Log In</h2>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                     </Form.Group>
                     <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           ref={passwordRef}
                           required
                        />
                     </Form.Group>
                     <Button
                        className="w-100"
                        type="submit"
                        style={{
                           backgroundColor: "rgb(244,28,178)",
                           border: "none",
                           marginTop: "5%"
                        }}
                     >
                        Log In
                     </Button>
                  </Form>
               </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               Need an account? <Link to="/signup">Sign Up</Link>
            </div>
         </Container>
      </div>
   );
}