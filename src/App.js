import { Header, Sidebar, Main } from "./components";

const App = () => {
    return (
        <div className="home">
            <Header />
            <div className="app">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};

export default App;
