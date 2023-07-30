import Counter from "./Pages/Counter";
import ClassCounter from "./Pages/ClassCounter";
import MainPage from "./FakeStore/Products/MainPage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../src/FakeStore/Products/ProductDetailPage";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <MainPage /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
