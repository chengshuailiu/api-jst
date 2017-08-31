import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Application extends ApiService {


//TYPE null
//URL /
home(){
return this.post(Config.API_URL + Constant.APPLICATION_HOME);
}


}
