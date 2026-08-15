import React, { act, useState } from "react";
const tabs = [
  {
    id: "profile",
    label: "Profile",
    content: "This is Profile content",
  },
  {
    id: "posts",
    label: "Posts",
    content: "This is Posts content",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is Settings content",
  },
];
const Tabs = () => {
  const [activeId, setActiveId] = useState("profile");
  const showContent = (id) => {
    setActiveId(id);
  };
  return (
    <div>
      <h2>Tabs</h2>
      {tabs.map((tab) => (
        <span
          id={tab.id}
          onClick={() => {
            showContent(tab.id);
          }}
          className={activeId === tab.id ? "active" : ""}
        >
          {tab.label} |{" "}
        </span>
      ))}
      <div style={{ marginTop: "15px" }}>
        {tabs.find((tab) => activeId === tab.id)?.content}
      </div>
    </div>
  );
};

export default Tabs;
