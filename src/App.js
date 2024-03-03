import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainContent from "./Components/MainContent";
import Login from "./Components/Login";
import WelcomePage from "./Components/WelcomePage";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
import CreateGroups from "./Components/CreateGroups";

function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lightTheme ? " " : "-dark")}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chart" element={<MainContent />}>
          <Route path="welcome" element={<WelcomePage />}></Route>
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
      {/* <MainContent /> */}
    </div>
  );
}

export default App;
