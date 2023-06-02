import Header from "./components/Header";
import Intro from "./components/Intro";
import Wrapper from "./components/Wrapper";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
        <Header/>
        <Intro/>
        <Product/>
        <Footer/>
    </Wrapper>
  );
}

export default App;
