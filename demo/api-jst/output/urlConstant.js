
export default {

  APPLICATION_HOME:"/",

  ACTIVE_GETACTIVELIST:"/active/getActiveList",

  ACTIVE_INSERTACTIVE:"/active/insertActive",

  ACTIVE_UPDATEACTIVESTATUS:"/active/updateActiveStatus",

  ACTIVE_GETACTIVEURLLISTBYUSER:"/active/getActiveUrlListByUser",

  ACTIVE_DELACTIVE:"/active/delActive/{id}",

  ACTIVE_SELECTACTIVE:"/active/selectActive/{id}",

  ACTIVE_GETACTIVEHISLIST:"/active/getActiveHisList",

  AGENT_SAVE:"/agent/save",

  AGENT_VIEW:"/agent/view/{id}",

  AGENT_SAVEAGENTREFFERAL:"/agent/saveAgentRefferal",

  AGENT_DELETEAGENTREFFERAL:"/agent/deleteAgentRefferal/{id}",

  AGENT_GETAGENTREFFERAL:"/agent/getAgentRefferal",

  AGENT_GETAGENTLIST:"/agent/getAgentList",

  AGENT_GETALL:"/agent/getall",

  BANNER_ALL:"/banner/getList/{refferalId}",

  BANNER_SAVE:"/banner/save",

  BANNER_VIEW:"/banner/view/{id}",

  BANNER_GETBANNERSBYREFFERALIDANDPUBLISHID:"/banner/getBannersByRefferalIdAndPublishId",

  BANNER_EXCELIMPORT:"/banner/excelImport",

  BANNER_GETBANNERSBYREFFERALID:"/banner/getBannersByRefferalId",

  BANNER_GETBANNERSBYPUBLISHID:"/banner/getBannersByPublishId/{publishId}",

  BANNER_BANNERTEMPLATEDOWNLOAD:"/banner/template",

  BANNER_BANNERTEMPLATEUPLOAD:"/banner/template/upload",

  CAMPAIGNPLAN_GETLIST:"/mc/campaignPlan/list",

  CAMPAIGNPLAN_ADDCAMPAIGNPLAN:"/mc/campaignPlan/addCampaignPlan",

  CAMPAIGNPLAN_COPYCAMPAIGNPLAN:"/mc/campaignPlan/copyCampaignPlan/{id}",

  CAMPAIGNPLAN_DELCAMPAIGNPLAN:"/mc/campaignPlan/delCampaignPlan/{id}",

  CAMPAIGNPLAN_UPDATECAMPAIGNPLAN:"/mc/campaignPlan/updateCampaignPlan",

  CAMPAIGNPLAN_SELECTCAMPAIGNPLAN:"/mc/campaignPlan/selectCampaignPlan/{id}",

  CUSTOMEMAIL_SENDCUSTOMEEMAIL:"/email/custome",

  DASHBOARD_SELECTPVREALTIME:"/dashboard/selectPvRealTime/{refferalId}",

  DASHBOARD_SELECTUVREALTIME:"/dashboard/selectUvRealTime/{refferalId}",

  DASHBOARD_FLUSHCACHE:"/dashboard/flushCache",

  DASHBOARD_RANKTOPN:"/dashboard/topN",

  DASHBOARD_EXPORTREPORT:"/dashboard/exportReport",

  DASHBOARD_SELECTOVERVIEWDATA:"/dashboard/overViewData/{searchDay}",

  DASHBOARD_SELECTREFFERALCOMPARE:"/dashboard/selectRefferalCompare",

  DASHBOARD_SELECTREFFERALBYDATATYPE:"/dashboard/selectRefferalByDataType",

  DASHBOARD_SELECTREFFERALBYDATATYPEADMIN:"/dashboard/selectRefferalByDataTypeAdmin",

  DASHBOARD_GETREFFERALBYPUBLISH:"/dashboard/getRefferalByPublish",

  DASHBOARD_SELECTREFFERALCONVERTRATIO:"/dashboard/selectRefferalConvertRatio",

  DASHBOARD_SELECTREFFERALTREND:"/dashboard/selectRefferalTrend",

  DASHBOARD_SELECTREGREALTIME:"/dashboard/selectRegRealTime/{refferalId}",

  DASHBOARD_GETCURRENTTIMEMILLIS:"/dashboard/currentTimeMillis",

  DASHBOARD_SELECTFIRSTINVESTPERSON:"/dashboard/selectFirstInvestPerson/{refferalId}",

  DASHBOARD_SELECTFIRSTINVESTAMOUNT:"/dashboard/selectFirstInvestAmount/{refferalId}",

  DASHBOARD_SELECTAVGFIRSTINVESTAMOUNT:"/dashboard/selectAvgFirstInvestAmount/{refferalId}",

  DASHBOARD_SELECTTOTALINVESTPERSON:"/dashboard/selectTotalInvestPerson/{refferalId}",

  DASHBOARD_SELECTTOTALINVESTAMOUNT:"/dashboard/selectTotalInvestAmount/{refferalId}",

  DASHBOARD_SELECTAVGTOTALINVESTAMOUNT:"/dashboard/selectAvgTotalInvestAmount/{refferalId}",

  DASHBOARD_SELECTSTATISTICALDATA:"/dashboard/selectStatisticsData",

  DASHBOARDPUBLISH_GETCOMPAIGNPLANBYCHANNELANDBIZTYPE:"/dashboard/publish/selectCompaignPlanByChannelAndBizType",

  DASHBOARDPUBLISH_GETUTMBYBANNERID:"/dashboard/publish/getUtmByBannerId",

  DASHBOARDPUBLISH_SELECTCOMPARE:"/dashboard/publish/selectCompare",

  DASHBOARDPUBLISH_GETBANNERSBYCAMPAIGNPLANID:"/dashboard/publish/getBannersByCampaignPlanId",

  DASHBOARDPUBLISH_SELECTPUBLISHTREND:"/dashboard/publish/selectPublishTrend",

  DATADIC_UPDATE:"/dataDic/update",

  DATADIC_DELETE:"/dataDic/delete/{id}",

  DATADIC_INSERT:"/dataDic/insert",

  DATADIC_GETDATACODE:"/dataDic/getDataCode/{parentCode}/{parentId}",

  DATADIC_GETDATADICLIST:"/dataDic/getDataDicList/{dataCode}",

  DATADIC_SELECTDBDATE:"/dataDic/selectDbDate",

  DATADIC_GETDATADICLISTBYDATATYPE:"/dataDic/getDataDicListByDataType/{dataType}",

  DATADIC_GETMAINDATALISTBYPAGINATION:"/dataDic/getMainDataListByPagination",

  DATADIC_GETNAMEBYCODE:"/dataDic/getNameByCode/{dataCode}",

  DATADIC_GETROLELIST:"/dataDic/getRoleList",

  HEALTHCHECK_CHECKSERVERSTATUS:"/healthCheck/checkServerStatus",

  IDFA_ADDIDFA:"/idfa/click",

  LOGIN_ALL:"/login/cas",

  MATERIALATTACHMENT_PUSH:"/attachment/push",

  MATERIALATTACHMENT_DELETEMULTIPLEATTACHMENTS:"/attachment/deleteMultipleAttachments",

  MATERIALATTACHMENT_GETMATERIALHISTORYLIST:"/attachment/history/list/{materialTaskId}",

  MATERIALATTACHMENT_GETMULTIPLEATTACHMENTS:"/attachment/getMultipleAttachments",

  MATERIALATTACHMENT_FETCH:"/attachment/fetch",

  MATERIALATTACHMENT_GETMATERIALLIST:"/attachment/getMaterialList",

  MATERIALATTACHMENT_DELETEATTACHMENT:"/attachment/deleteMaterial/{id}",

  MATERIALTASK_USER:"/materialTask/view/{id}",

  MATERIALTASK_GETMATERIALTASKLIST:"/materialTask/getMaterialTaskList",

  MATERIALTASK_SELECTMATERIALTASKLIST:"/materialTask/selectMaterialTaskList",

  MATERIALTASK_SELECTMATERIALTASK:"/materialTask/selectMaterialTask/{id}",

  MATERIALTASK_GETDATADICLIST:"/materialTask/getDataDicList",

  MATERIALTASK_UPDATETASKSTATU:"/materialTask/updateTaskStatu/{id}",

  MATERIALTASK_CHECKCOMPLETE:"/materialTask/complete/{taskId}",

  MATERIALTASK_GETUSERLIST:"/materialTask/getUserList",

  MATERIALTASK_BATCHSAVE:"/materialTask/batchSave",

  OPERATIONHIS_GETOPERATIONHIS:"/operationHis/getOperationHis",

  PRODUCT_ALL:"/product/getList",

  PRODUCT_GETBYID:"/product/getList/{id}",

  PUBLISH_UPDATEPUBLISH:"/mc/publish/updatePublish",

  PUBLISH_DELPUBLISH:"/mc/publish/delPublish",

  PUBLISH_STOPPUBLISH:"/mc/publish/stopPublish/{id}",

  PUBLISH_EXPORTURL:"/mc/publish/export/{campaignId}",

  PUBLISH_CHECKURLVALID:"/mc/publish/checkUrlValid",

  PUBLISH_GETKEYWORD:"/mc/publish/getKeyword",

  PUBLISH_SELECTPUBLISH:"/mc/publish/selectPublish/{publishId}",

  PUBLISH_UPDATEPUBLISHTIME:"/mc/publish/updatePublishTime",

  PUBLISH_GETPUBLISHSBYCAMPAIGNIDPAGINATION:"/mc/publish/getPublishsByCampaignIdPagination",

  PUBLISH_GETPUBLISHSBYCAMPAIGNID:"/mc/publish/getPublishsByCampaignId/{campaignId}",

  PUBLISH_INSERTPUBLISHLIST:"/mc/publish/insertPublishList",

  REDISCACHEDATA_GETURLBYID:"/redis/url/{id}",

  REDISCACHEDATA_GETPUBLISHBYID:"/redis/publish/{id}",

  REDISCACHEDATA_FLUSHBASEDATA:"/redis/flush/baseData",

  REDISCACHEDATA_GETREFFERALBYID:"/redis/refferal/{id}",

  REDISCACHEDATA_GETCAMPAIGNPLANBYID:"/redis/campaignPlan/{id}",

  REFFERAL_ALL:"/refferal",

  REFFERAL_DELETE:"/refferal/delete/{id}",

  REFFERAL_SAVE:"/refferal/save",

  REFFERAL_VIEW:"/refferal/view/{id}",

  REFFERAL_COPYREFFERAL:"/refferal/copy/{id}",

  REFFERAL_REFFERALLIST:"/refferal/refferalList",

  REFFERAL_EXCELDOWNLOAD:"/refferal/template",

  REFFERAL_GETREFFERALANDANGENTLIST:"/refferal/getRefferalAndAngentList",

  REFFERAL_GETREFFERALBYAGENTID:"/refferal/getRefferalByAgentId/{agentId}",

  REFFERAL_EXCELIMPORT:"/refferal/excelImport",

  REGISTER_ALL:"/register/getList",

  REPORT_EXPORTROIDETAIL:"/report/export/roi/detail",

  ROI_ROILIST:"/roi/roiList",

  TEMPLATE_INDEX:"/template/index",

  TIMINGTASK_CACHEDATAFROMDB:"/mc/timingTask/cacheData",

  TIMINGTASK_MCTIMINGUPATEPUBLISHSTATUS:"/mc/timingTask/mcTimingUpatePublishStatus",

  TIMINGTASK_REFFERALSETTLEMENT:"/mc/timingTask/refferalSettlement",

  TIMINGTASK_GETONEDAYPVUVDATAFROMCMS:"/mc/timingTask/getOneDayPvUvDataFromCms",

  TIMINGTASK_GETAPPOINTDAYSPVUVDATAFROMCMS:"/mc/timingTask/getAppointDaysPvUvDataFromCms",

  TIMINGTASK_UPDATEREGISTERPUBLISHIDS:"/mc/timingTask/updateRegisterPublishIds",

  USER_BATCHPERMISSION:"/user/batchPermission",

  USER_GETUSERBYEMAIL:"/user/getUserByEmail",

  USER_GETUSERLIST:"/user/getUserList",

  UTM_SEACHUTM:"/mc/utm/seachUtm/{utmId}",

  BASICERROR_ERROR:"/error",

  BASICERROR_ERRORHTML:"/error",

}