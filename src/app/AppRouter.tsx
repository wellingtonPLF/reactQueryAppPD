import { Route, BrowserRouter, Routes} from "react-router-dom";
import HomeLayout from "./views/HomeScreen/HomeLayout";
import MainLayout from "./views/MainScreen/mainLayout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <HomeLayout />}  path="/home" />
                <Route element = { <MainLayout />}  path="/" />
            </Routes>
       </BrowserRouter>
    );
};

export default AppRouter;