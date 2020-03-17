import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Directory} />
                    <Route exact path="/directory" component={Directory} />
                    <Route exact path="/about" component={About} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    )
}
 
export default App;