import StandardPage from "components/StandardPage";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import NotFound from "pages/NotFound";
import Post from "pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "components/Menu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
