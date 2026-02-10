import { useState } from "react";
import Company from "../components/Admin/Company";
import { useNavigate } from "react-router-dom";
import Blogs from "../components/Admin/Blogs";
import { Toaster } from "sonner";
import Projects from "../components/Admin/Projects";
import Skills from "../components/Admin/Skills";
import ReorderProjects from "../components/Admin/ReorderProjects";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = () => {
    if (password !== import.meta.env.VITE_PASSWORD) navigate("/");
    else setAuthenticated(true);
  };

  return (
    <div>
      <Toaster />
      {!authenticated ? (
        <div className="h-40 border-2 border-black">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full border"
          />
          <button onClick={auth}>Authenticate</button>
        </div>
      ) : (
        <div className="p-2">
          <div className="flex gap-2 mb-2">
            <Blogs />
            <Company />
            <Projects />
          </div>
          <Skills />
          <ReorderProjects />
        </div>
      )}
    </div>
  );
};

export default Admin;
