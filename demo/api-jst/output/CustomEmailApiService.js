import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class CustomEmail extends ApiService {


//TYPE POST
//URL /email/custome
sendCustomeEmail(data){
return this.post(Config.API_URL + Constant.CUSTOMEMAIL_SENDCUSTOMEEMAIL, data);
}


}
