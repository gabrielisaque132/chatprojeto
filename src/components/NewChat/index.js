import React, { useState } from "react";

import { ArrowBack } from "@material-ui/icons";

import "./style.css";

export default ({ chatList, user, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://www.dreamstime.com/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-image184330869",
      name: "Gabriel Isaque",
    },
    {
      id: 1234,
      avatar:
        "https://pt.pngtree.com/freepng/avatar-icon-profile-icon-member-login-vector-isolated_5247852.html",
      name: "Karielly Alves",
    },
    {
      id: 12345,
      avatar:
        "https://pt.pngtree.com/freepng/avatar-icon-profile-icon-member-login-vector-isolated_5247852.html",
      name: "Isaque Amorim",
    },
  ]);

  return (
    <div className="newChat" style={{ left: show ? 0 : "-415px" }}>
      <div className="newChat--head">
        <div onClick={() => setShow(false)} className="newChat--backbutton">
          <ArrowBack style={{ color: "#FFF" }} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>

      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img
              className="newChat--itemavatar"
              src={item.avatar}
              alt={item.name}
            />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
