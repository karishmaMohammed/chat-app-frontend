import React, { useState } from "react";
import "./MainStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import ConversationItems from "./ConversationItems";
import { useNavigate } from "react-router-dom";

function SideBar() {
  
  const [conversations, setConversations] = useState([
    {
      name: "Karishma",
      lastMessage: "last Message #1",
      timeStamp: "yesterday",
    },
    {
      name: "Madhav",
      lastMessage: "last Message #2",
      timeStamp: "yesterday",
    },
    {
      name: "Ishu",
      lastMessage: "last Message #3",
      timeStamp: "Today",
    },
  ]);
  const [lightTheme, setLightTheme] = useState(true);

  const navigate = useNavigate();
  return (
    <div className="sidebar-content">
      <div className={"sidebar-header" + ((lightTheme)? "" : "dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setLightTheme((prevValue) => {
                return !prevValue;
              });
            }}
          >
            {lightTheme && <NightlightOutlinedIcon />}
            {!lightTheme && <LightModeIcon />}
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" placeholder="Search" />
      </div>
      <div className="sidebar-conversations">
        {conversations.map((conversation) => {
          return (
            <ConversationItems
              props={conversation}
              key={conversation.name}
              onClick={() => navigate("chartArea")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
