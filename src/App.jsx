import "./App.css";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router";
import data from "../data.json";

const PlanetPage = lazy(() => import("./components/PlanetPage/PlanetPage"));
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/mercury" replace />} />

          {data.map((planet) => (
            <Route
              key={planet.name}
              path={planet.name.toLowerCase()}
              element={<PlanetPage planet={planet} />}
            />
          ))}
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
