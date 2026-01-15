import { Route, Routes } from "react-router-dom";
import routers from "./routes";
export function MainRouter() {
  return (
    <>
      <Routes>
        {routers.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}
