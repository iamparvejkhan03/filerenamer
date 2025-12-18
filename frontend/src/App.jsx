import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App(){
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </main>
    );
}

export default App;