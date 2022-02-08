import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
