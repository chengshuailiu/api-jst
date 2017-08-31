import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Login extends ApiService {


//TYPE null
//URL /login/cas
all(){
return this.post(Config.API_URL + Constant.LOGIN_ALL);
}


}
