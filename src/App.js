// npm install -g @aws-amplify/cli
// amplify configure
// npm install aws-amplify @aws-amplify/ui-react to Add Authentication
// amplify add auth   To create the authentication service,
// amplify push --y to deploy the authentication service it will create a file called aws-exports.js located in the src directory of our project.
// Add Athentication flow in App.js
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
