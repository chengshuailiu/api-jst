import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Dashboard extends ApiService {


//TYPE GET
//URL /dashboard/selectPvRealTime/{refferalId}
selectPvRealTime(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTPVREALTIME, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectUvRealTime/{refferalId}
selectUvRealTime(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTUVREALTIME, data, urlParam);
}


//TYPE GET
//URL /dashboard/flushCache
flushCache(){
return this.get(Config.API_URL + Constant.DASHBOARD_FLUSHCACHE);
}


//TYPE POST
//URL /dashboard/topN
rankTopN(data){
return this.post(Config.API_URL + Constant.DASHBOARD_RANKTOPN, data);
}


//TYPE POST
//URL /dashboard/exportReport
exportReport(data){
return this.post(Config.API_URL + Constant.DASHBOARD_EXPORTREPORT, data);
}


//TYPE GET
//URL /dashboard/overViewData/{searchDay}
selectOverViewData(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTOVERVIEWDATA, data, urlParam);
}


//TYPE POST
//URL /dashboard/selectRefferalCompare
selectRefferalCompare(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTREFFERALCOMPARE, data);
}


//TYPE POST
//URL /dashboard/selectRefferalByDataType
selectRefferalByDataType(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTREFFERALBYDATATYPE, data);
}


//TYPE POST
//URL /dashboard/selectRefferalByDataTypeAdmin
selectRefferalByDataTypeAdmin(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTREFFERALBYDATATYPEADMIN, data);
}


//TYPE POST
//URL /dashboard/getRefferalByPublish
getRefferalByPublish(data){
return this.post(Config.API_URL + Constant.DASHBOARD_GETREFFERALBYPUBLISH, data);
}


//TYPE POST
//URL /dashboard/selectRefferalConvertRatio
selectRefferalConvertRatio(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTREFFERALCONVERTRATIO, data);
}


//TYPE POST
//URL /dashboard/selectRefferalTrend
selectRefferalTrend(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTREFFERALTREND, data);
}


//TYPE GET
//URL /dashboard/selectRegRealTime/{refferalId}
selectRegRealTime(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTREGREALTIME, data, urlParam);
}


//TYPE GET
//URL /dashboard/currentTimeMillis
getCurrentTimeMillis(){
return this.get(Config.API_URL + Constant.DASHBOARD_GETCURRENTTIMEMILLIS);
}


//TYPE GET
//URL /dashboard/selectFirstInvestPerson/{refferalId}
selectFirstInvestPerson(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTFIRSTINVESTPERSON, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectFirstInvestAmount/{refferalId}
selectFirstInvestAmount(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTFIRSTINVESTAMOUNT, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectAvgFirstInvestAmount/{refferalId}
selectAvgFirstInvestAmount(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTAVGFIRSTINVESTAMOUNT, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectTotalInvestPerson/{refferalId}
selectTotalInvestPerson(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTTOTALINVESTPERSON, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectTotalInvestAmount/{refferalId}
selectTotalInvestAmount(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTTOTALINVESTAMOUNT, data, urlParam);
}


//TYPE GET
//URL /dashboard/selectAvgTotalInvestAmount/{refferalId}
selectAvgTotalInvestAmount(data, urlParam){
return this.get(Config.API_URL + Constant.DASHBOARD_SELECTAVGTOTALINVESTAMOUNT, data, urlParam);
}


//TYPE POST
//URL /dashboard/selectStatisticsData
selectStatisticalData(data){
return this.post(Config.API_URL + Constant.DASHBOARD_SELECTSTATISTICALDATA, data);
}


}
