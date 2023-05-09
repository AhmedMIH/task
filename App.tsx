/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from "react-redux";
import AppNavigation from "./src/routes/AppNavigation";
import store from "./src/store/store";




function App(): JSX.Element {

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}


export default App;
