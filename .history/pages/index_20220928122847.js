import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from 'semantic-ui-react';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  //before, during and after

  const [loginState, setLoginState] = useState("before");
  var c = "blue";
  var text = "Log In"

  if (loginState === "before"){
    c = "blue";
    text = "Log In"
  } 
  else if (loginState === "during"){
    c = "green";
    text = "Submit"
  }
  else if (loginState === "after"){
    c = "grey";
    text = "Log Out"
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
      <Button color={c} onClick={()=> HandleButton()}>{text}</Button>
    </div>
  )
}
