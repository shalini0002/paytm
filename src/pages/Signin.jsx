import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/Bottomwarning";
import { useNavigate } from "react-router-dom"

function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your crediendials to acess your account"} />
          <InputBox placeholder="johndoe@gmail.com" label={"Email"}/>
          <InputBox placeholder="12345" label={"Password"}/>
          <div className='pt-4'>
                  <Button label={"Sign in"} />
                  </div>
                  <BottomWarning label={"Don't have an Account?"} to={"/signup"} buttonText={"Sign up"}/>
                
        </div>
      </div>
    </div>
  );
}

export default Signin;
