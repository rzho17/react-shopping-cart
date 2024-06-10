import reactLogo from "../assets/react.svg";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Outlet />
    </main>
  );
}
