import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Template extends ApiService {


//TYPE GET
//URL /template/index
index(data){
return this.get(Config.API_URL + Constant.TEMPLATE_INDEX, data);
}


}
