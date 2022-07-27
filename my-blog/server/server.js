const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// 서버 응답 출력
app.get('/api/host', (req, res) => {
    res.send({ host : 'JooHeon' });
})

// 서버 실행 ( server.js 가 있는 디렉토리에서 실행해야함.)

app.listen(PORT,() => {
    console.log(`Server ON :: http://localhost:${PORT}/`);
})