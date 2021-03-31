import React, { useState, useEffect } from "react";
import "./App.css";

import { DonutLarge, Chat, MoreVert, Search } from "@material-ui/icons";

import ChatList from "./components/Chat";
import ChatContent from "./components/Content";
import ChatWindow from "./components/Window";
import NewChat from "./components/NewChat";

export default () => {
  const [user, setUser] = useState({
    id: 1234,
    avatar:
      "https://www.auctus.com.br/planejamentoestrategico/sem-imagem-avatar/",
    name: "Gabriel Isaque",
  });

  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Gabriel Isaque",
      image: "https://www.google.com/search?sxsrf=ALeKk01PaWYqojbi2967E6aswRvN84Semg:1617157216257&q=imagem+avatar&tbm=isch&chips=q:imagem+avatar,g_1:whatsapp&usg=AI4_-kSJxL2OPt_MTqA0csT_Qm_AMLMGxw&sa=X&ved=2ahUKEwjRyq6LvNnvAhXPqp4KHYrxC9EQgIoDKAF6BAgDEAo&biw=1366&bih=625#imgrc=jelWQ07vAtiWnM",
    },
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="avatar" />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLarge style={{ color: "#919191" }} />
            </div>
            <div onClick={() => setShowNewChat(true)} className="header--btn">
              <Chat style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVert style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <Search fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatList
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId ? <ChatWindow user={user} /> : <ChatContent />}
      </div>
    </div>
  );
};
