module.exports = {
    template: "/api-jst/temp/service.ejs",
    urlTemplate: "/api-jst/temp/constant.ejs",
    output: "/api-jst/output/${name}ApiService.js",
    urlConstantOutput: "/api-jst/output/urlConstant.js",
    api: "http://172.29.20.41:9090/template/index",
};