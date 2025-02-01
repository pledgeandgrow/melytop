import { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import CustomerLight from "./src/components/CustomerLight";
import Home from "./Home";
import News from "./News";
import Services from "./Services";
import Layout from "./src/layouts/Layout";
const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <Layout>
      <Home />
      {/* /Home Section */}
      {/* About Section */}
      <About />
      {/* /About Section */}
      {/* Portfolio Section */}
      {/* Services Section */}
      <Services />
      {/* /Services Section */}
      {/* Customers Section */}
      <CustomerLight />
      {/* /Customers Section */}
      {/* News Section */}
      <News />
      {/* /News Section */}
      {/* Contact Section */}
      <Contact />
      {/* /Contact Section */}
    </Layout>
  );
};

export default Index;
