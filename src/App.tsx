import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { handleGetPortfolioData } from "./firebase";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { setPortfolioData } from "./redux/slice/portfolio";
import { useDispatch } from "react-redux";
import { type MyDispatch } from "./redux/store";

const App = () => {
  const dispatch = useDispatch<MyDispatch>();

  // use effect to get portfolio data
  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "smooth";
      const scrollableContainer = document.querySelector("#home");
      if (scrollableContainer) scrollableContainer.scrollTop = 0;

      const response = await handleGetPortfolioData();
      dispatch(setPortfolioData(response));
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
