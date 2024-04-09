import "../common/styles/index.css";
import "../common/styles/utilities.css";
import "../common/styles/colors.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import usersSlice from "../features/users/usersSlice";
import Login from "../pages/Login";
import ProfileInfo from "../pages/ProfilePage/components/ProfileInfo";
import EditProfile from "../pages/ProfilePage/components/EditProfile";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/ProfilePage"
            element={<ProfilePage children={<ProfileInfo />} />}
          />
          <Route
            path="/ProfilePage/EditProfile"
            element={<ProfilePage children={<EditProfile />} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
