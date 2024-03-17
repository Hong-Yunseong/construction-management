const express = require('express');

const path = require('path');  // path 모듈 사용
const app = express();
const port = 3000;

app.use( '/', express.static( path.join(__dirname, '../hong_simp/dist') ));  

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../hong_simp/dist/index.html'));  
})

app.listen(port, ()=> {
    console.log(`app listening app http://localhost:${port}`);
})