import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Agent extends ApiService {


//TYPE POST
//URL /agent/save
save(data){
return this.post(Config.API_URL + Constant.AGENT_SAVE, data);
}


//TYPE null
//URL /agent/view/{id}
view(data, urlParam){
return this.post(Config.API_URL + Constant.AGENT_VIEW, data, urlParam);
}


//TYPE POST
//URL /agent/saveAgentRefferal
saveAgentRefferal(data){
return this.post(Config.API_URL + Constant.AGENT_SAVEAGENTREFFERAL, data);
}


//TYPE GET
//URL /agent/deleteAgentRefferal/{id}
deleteAgentRefferal(data, urlParam){
return this.get(Config.API_URL + Constant.AGENT_DELETEAGENTREFFERAL, data, urlParam);
}


//TYPE POST
//URL /agent/getAgentRefferal
getAgentRefferal(data){
return this.post(Config.API_URL + Constant.AGENT_GETAGENTREFFERAL, data);
}


//TYPE POST
//URL /agent/getAgentList
getAgentList(data){
return this.post(Config.API_URL + Constant.AGENT_GETAGENTLIST, data);
}


//TYPE GET
//URL /agent/getall
getall(){
return this.get(Config.API_URL + Constant.AGENT_GETALL);
}


}
