import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from 'semantic-ui-react';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { userAgent } from 'next/server';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


export default function Home() {
  //before, during and after

  const [loginState, setLoginState] = useState("before");
  var c = "blue";
  var text = "Log In"
  const r = useRouter();

  if (loginState === "before"){
    c = "blue";
    text = "Log In"
  } 
  else if (loginState === "during"){
    c = "green";
    text = "Loading"
  }
  else if (loginState === "after"){
    text = "Logged In"
    r.push("/dashboard");
  }

  const HandleButton = () => {
    if (loginState === "before"){
      setLoginState("during");
    } 
    else if (loginState === "during"){
      setLoginState("after");
    }
    else if (loginState === "after"){
      setLoginState("before");
    } 
    
  }

  const Login = async () => {
    setLoginState("during");
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState("after");
    await new Promise(resolve => setTimeout(resolve, 2000));
    r.push("/dashboard");
  }

  return (
    <div>
      <Button 
        color={c} onClick={()=> Login()}>
          {text}
          {loginState==="during" && <Loader active/>}
      </Button>
    </div>
  )
}
