import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

import '../index.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <About/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default App;
