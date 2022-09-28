import { Button, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function LoginForm({
    loginState="before",
    onLoginClick = () => {}
}) {

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
        c = "grey"
        text = "Logged In"
        r.push("/dashboard");
      }

    return <div>
        <h3>Login Form</h3>
        <Button 
            color={c} 
            onClick={onLoginClick}>
            {text}
            {loginState==="during" && <Loader active/>}
        </Button>
    </div>
}
