import { ModelStore } from 'exredux';
import { VagasRecentesModel } from './Models/VagasRecentesModel';
import { VagasEncontradasBuscaModel } from './Models/VagasEncontradasBuscaModel';
import { AuthModel } from './Models/AuthModel';
import { RouterModel } from './Models/RouterModel';


export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [VagasRecentesModel, VagasEncontradasBuscaModel, AuthModel, RouterModel]
});