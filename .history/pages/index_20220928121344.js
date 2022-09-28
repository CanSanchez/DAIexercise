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

  if (loginState === "before"){
    c = "blue";
  } else if (loginState === "during"){
    c = "green";
  } else if (loginState === "after"){
    c = "grey";
  }
  
  return (
    <div>
    </div>
  )
}
