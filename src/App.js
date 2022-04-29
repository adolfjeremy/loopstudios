import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <About />
                <ProductList />
            </main>
        </div>
    );
}

export default App;
