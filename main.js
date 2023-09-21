var test = require('./test_pb');

var sample = new test.Sample();
// フィールドに値を設定する
sample.setStr("abc");
sample.setNum(12345);
sample.setFlag(true);

// シリアライズ(バイナリに変換する)
var bytes = sample.serializeBinary();

// デシリアライズ(バイナリから戻す)
console.log(test.Sample.deserializeBinary(bytes).toObject()); // { str: 'abc', num: 12345, flag: true }

// バイナリをファイルに書き込む
const fs = require('fs');
fs.writeFileSync('./test_bin', bytes);