var Client = require('ssh2').Client;
var conn = new Client();
const path = '/opt/project/jbzfilmsdk';
const publishHandle = './publish.sh';
conn.on('ready', function() {
  console.log('正在发布...');
  conn.exec('cd ' + path + '  && ' + publishHandle, function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      conn.end();
      if (code === 0){
        console.log('发布成功');
      } else {
        console.log('发布失败');
      }
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '10.1.1.106',
  port: 22,
  username: 'root',
  password: 'JBZ321*88'
});
