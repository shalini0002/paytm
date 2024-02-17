import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/Subheading'
import { InputBox } from '../components/Input'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/Bottomwarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

 
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      Password is {Password}
        <div className="flex flex-col justify-center">
            <div className="rounded bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={(e) => {
                  setFirstName(e.target.value);
                }} placeholder="John" label={"First Name"} />
                <InputBox onChange={(e) => {
                  setLastName(e.target.value);
                }} placeholder="Doe" label={"Last Name"} ></InputBox>
                <InputBox onChange={(e) => {
                  setUsername(e.target.value);
                }} placeholder="john@gmail.com" label={"Email"} ></InputBox>
                <InputBox onChange={(e) => {
                  setPassword(e.target.value);
                }} placeholder="12345" label={"Password"} ></InputBox>
                <div className='pt-4'>
                  <Button onClick={async() => {
                    const response =await axios.post("http://localhost:3000/api/v1/user/signup", {
                     username,
                     Password,
                     firstName,
                     lastName
                    });
                    localStorage.setItem("token",response.data.token);
                    localStorage.delete("token");
                    navigate("/dashboard")
                  }} label={"Sign up"} />

                  </div>
                  <BottomWarning label={"Already have an Account?"} to={"/signin"} buttonText={"Sign in"}/>
                
            </div>
        </div>

    </div>
  )
}

export default Signup