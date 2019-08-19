"use strict";
/**
 * Created by cuppi on 2017/8/29.
 */
//测试发布
const ClientPath = '/usr/local/lib/node_modules/ssh2';
// const ClientPath = '/Users/jbz/.nvm/versions/node/v8.12.0/lib/node_modules/ssh2';
const host = '10.1.1.61';
const username = 'root';
const password = 'JBZ321*88';
const path = '/opt/project/NodeWorld/jbzfilmsdk';
const publish_handle = './publish.sh';
/**************************   发布脚本  **********************************/
let conn;
try {
  const Client = require(ClientPath).Client;
  conn = new Client();
}
catch (e) {
  console.log(e);
  console.log('\n异常信息: 没有找到 ssh2 依赖库, 请设置正确的依赖库路径 (ClientPath)');
}
function doPublish() {
  conn.on('ready', function () {
    console.log('正在发布...');
    conn.exec('cd ' + path + ' && ' + publish_handle, function (err, stream) {
      if (err)
        throw err;
      stream.on('close', function (code, signal) {
        conn.end();
        if (code === 0) {
          console.log('发布成功');
        }
        else {
          console.log('发布失败');
        }
      }).on('data', function (data) {
        console.log(data.toString());
      }).stderr.on('data', function (data) {
        // console.log('\n异常信息: ' + data);
      });
    });
  }).connect({
    host,
    username,
    password
  });
}
doPublish();
