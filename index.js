#!/usr/bin/env node
//
//
// //读取参数
// var argv = require('minimist')(process.argv.slice(2));
//
// //验证参数
// var valdataCommand = function (arr) {
//     if (typeof arr == "array") {
//         for (var i = 0; i <= arr.length; i++) {
//             if (argv[arr[i]]) {
//                 return true;
//             }
//         }
//     }
//     else {
//         return argv._.indexOf(arr) != -1;
//     }
//     return false;
// }
//
//
// if (valdataCommand(["h", "help"])) {
//     require('./cmd/help')();
// }
// else if (valdataCommand(["v", "version"])) {
//     require('./cmd/version')();
// }
// else if (valdataCommand("init")) {
//     require('./cmd/init')();
//
// }
// if (argv._.length === 0) {
//     console.error(
//         'You did not pass any commands, run `api-jst --help` to see a list of all available commands.'
//     );
//     process.exit(1);
// }


var program = require('commander');

program
    .version('0.1.0', "-v, --version")
    .usage('自动生成JSRest服务调用代码，就是这么简单~')

program
    .command('init')
    .description('初始化项目代码')
    .action(require('./cmd/init'));

program
    .parse(process.argv);

if (program.args.length == 0) {
    require("./cmd/run")();
}