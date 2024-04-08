import "../common/styles/index.css";
import "../common/styles/utilities.css";
import "../common/styles/colors.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import usersSlice from "../features/users/usersSlice";
import Login from "../pages/Login";

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
          <Route path="/profilePage" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
