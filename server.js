const path = require('path');
const express = require('express');

const app = express();


const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(BUILD_PATH, './index.html'));
});

app.listen(process.env.LC_APP_PORT || 3000, () => {
  console.log('启动服务. 端口号:', process.env.LC_APP_PORT || 3000);
})
