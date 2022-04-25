import { Route, Routes } from "react-router-dom";
import { Header, Sidebar, Main, PreviewChannel } from "./components";
import Watch from "./components/Watch/Watch";

const App = () => {
    return (
        <div className="home">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app">
                            <Sidebar />
                            <Main />
                        </div>
                    }
                />

                <Route path="watch" element={<Watch />} />
                <Route
                    path="previewchannel"
                    element={
                        <div className="app">
                            <Sidebar />
                            <PreviewChannel />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
