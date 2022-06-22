import AuthScript from "../../components/authentication/authScript";
import DecisionScript from "../../components/decisionComponent/decisionScript";
import PerfilScript from "../../components/perfilComponent/perfilScript";
import './mainStyle.scss'

const mainLayout = () => {

    return (
        <div className="pagina">
            <AuthScript />
            <PerfilScript />
            <DecisionScript />
        </div>
    );
};

export default mainLayout;