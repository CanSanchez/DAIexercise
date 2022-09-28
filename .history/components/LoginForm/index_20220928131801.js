import { Button, Loader } from 'semantic-ui-react';

export default function LoginForm({
    loginState="before",
    onLoginClick = () => {}
}) {

    var c = "blue";
    var text = "Log In"

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
      }

    return <div>
        <h3>Login Form</h3>
        <Input placeholder ="email" />
        <Input placeholder ="password" />
        <Button 
            color={c} 
            onClick={onLoginClick}>
            {text}
            {loginState==="during" && <Loader active/>}
        </Button>
    </div>
}
