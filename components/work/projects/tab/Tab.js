import React, { useRef } from "react";

const Tab = ({ project, dataIndex, updateIndex, updateTab }) => {
  const tabItem = useRef();

  const changeProjectIndex = (e) => {
    e.preventDefault();
    tabItem.current.style.color = "red";
    updateTab(tabItem);
    updateIndex(e.target.getAttribute("index-data"));
  };

  return (
    <li
      ref={tabItem}
      index-data={dataIndex}
      onClick={(e) => changeProjectIndex(e)}
    >
      {project.name}
    </li>
  );
};

export default Tab;
