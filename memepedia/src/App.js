import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import MemePage from "./pages/MemePage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="meme" element={<MemePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}