import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from 'semantic-ui-react';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { userAgent } from 'next/server';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


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
    text = "Submit"
  }
  else if (loginState === "after"){
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

  return (
    <div>
      <Button 
        color={c} onClick={()=> HandleButton()}>
          {text}
          {loginState==="during" && <Loader active/>}
      </Button>
    </div>
  )
}
