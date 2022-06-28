import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroComponent from "./components/cadastroComponent/cadastroScript";
import LoginComponent from "./components/loginComponent/loginScript";
import EditComponent from "./components/editComponent/editScript";
import HomeComponent from "./views/HomeScreen/HomeLayout";
import MainComponent from "./views/MainScreen/mainLayout";
import TestComponent from "./views/TestScreen/testScript";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <HomeComponent />}  path="/home" />
                <Route element = { <MainComponent />}  path="/" />
                <Route element = { <EditComponent />}  path="/edit" />
                <Route element = { <CadastroComponent />}  path="/cadastro" />
                <Route element = { <LoginComponent />}  path="/login" />
                <Route element = { <TestComponent />}  path="/test" />
            </Routes>
       </BrowserRouter>
    );
};

export default AppRouter;