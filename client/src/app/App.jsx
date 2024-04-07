import "../common/styles/index.css";
import "../common/styles/utilities.css";
import "../common/styles/colors.css";
import  {Provider} from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import ProfilePage from "../pages/ProfilePage";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
    reducer:{
        users: usersSlice
    }
})

const App = () => {
  return (
    <Provider store={store}>
        <ProfilePage></ProfilePage>
    </Provider>
  );
};

export default App;
