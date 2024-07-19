import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Pricing, Terms } from "./pages";
import { MainLayout } from "./layouts";
import { pageLinks } from "./config";
import ScrollToTop from "./helpers/UseScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            {/** ROUTES */}
            <Route path={pageLinks.home.url} element={<Home />} />
            <Route path={pageLinks.about.url} element={<About />} />
            <Route path={pageLinks.contact.url} element={<Contact />} />
            <Route path={pageLinks.pricing.url} element={<Pricing />} />
            <Route path={pageLinks.terms.url} element={<Terms />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
