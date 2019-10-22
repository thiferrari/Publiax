import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import BodyComponent from '../Components/Login/Body';


class Props{
    
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class LoginContainer extends React.Component<Props> {
    render(){
        return(
            <div>
                <BodyComponent/>
            </div>
        ); 
    }

}
