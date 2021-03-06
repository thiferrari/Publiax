import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Home from '../Components/Home/HomeComponent';
import VagasContainer from '../Containers/VagasContainer';
import CadastroContainer from '../Containers/CadastroContainer';
import QuemSomosContainer from '../Containers/QuemSomosContainer';
import ContatoContainer from '../Containers/ContatoContainer';
import LoginRedirectContainer from '../Containers/LoginRedirectContainer';
import RedirectContainer from '../Containers/RedirectContainer';
import RouterHandle from './RouterHandle';
import LogoutContainer from '../Containers/LogoutContainer';
import { AuthModel } from '../Models/AuthModel';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import PrivateAccessContainer from '../Containers/PrivateAccessContainer';

class Props {
    @Inject auth: AuthModel;
}

const PrivateRoute = ({ auth: Auth, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated() === true
            ? <Component {...props} />
            : <PrivateAccessContainer />
    )} />
)

@Connection({
    modelStore: appModels,
    props: Props
})

export class Routes extends React.Component<Props>{

    private isAuthenticated = () => {
        const { auth } = this.props;
        return auth.isAuthenticated();
    }

    
    render() {
        const { auth } = this.props;
        return (
            <HashRouter>
                <RouterHandle />
                <Switch>
                    <PrivateRoute auth={auth} path="/curriculum" component={Home} />
                    <Route exact={true} path="/token/:token" component={RedirectContainer} />
                    <Route exact={true} path="/login" component={LoginRedirectContainer} />
                    <Route exact={true} path="/logout" component={LogoutContainer} />
                    <Route exact={true} path="/contato" component={ContatoContainer} />
                    <Route exact={true} path="/cadastro" component={CadastroContainer} />
                    <Route exact={true} path="/quemsomos" component={QuemSomosContainer} />
                    <Route exact={true} path="/vagas" component={VagasContainer} />
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={true} path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}