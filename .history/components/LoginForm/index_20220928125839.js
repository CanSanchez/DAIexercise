import { Button, Loader } from 'semantic-ui-react';

export default function LoginForm({

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
        text = "Logged In"
        r.push("/dashboard");
      }

    return <div>

    </div>
}
