import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Product extends ApiService {


//TYPE null
//URL /product/getList
all(){
return this.post(Config.API_URL + Constant.PRODUCT_ALL);
}


//TYPE null
//URL /product/getList/{id}
getbyID(data, urlParam){
return this.post(Config.API_URL + Constant.PRODUCT_GETBYID, data, urlParam);
}


}
