import "./sidebar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>
        <button onClick={() => setCollapsed(!collapsed)}>
          <GiHamburgerMenu />
        </button>
        <p>Code</p>
        <p>Notes</p>
        <p>Links</p>
      </aside>
    </div>
  );
};

export default Sidebar;
