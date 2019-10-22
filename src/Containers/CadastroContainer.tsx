import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import HeaderComponent from '../Components/Cadastro/Header';
import BodyComponent from '../Components/Cadastro/Body';


class Props{
    
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class CadastroContainer extends React.Component<Props> {
    render(){
        return(
            <div>
                <HeaderComponent>Cadastro</HeaderComponent>
                <BodyComponent/>
            </div>
        ); 
    }

}
