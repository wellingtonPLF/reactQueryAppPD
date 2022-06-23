import { Route, BrowserRouter, Routes} from "react-router-dom";
import CadastroComponent from "./components/cadastroComponent/cadastroScript";
import LoginComponent from "./components/loginComponent/loginScript";
import EditComponent from "./components/editComponent/editScript";
import HomeComponent from "./views/HomeScreen/HomeLayout";
import MainComponent from "./views/MainScreen/mainLayout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <HomeComponent />}  path="/home" />
                <Route element = { <MainComponent />}  path="/" />
                <Route element = { <EditComponent />}  path="/edit" />
                <Route element = { <CadastroComponent />}  path="/cadastro" />
                <Route element = { <LoginComponent />}  path="/login" />
            </Routes>
       </BrowserRouter>
    );
};

export default AppRouter;