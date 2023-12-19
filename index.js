const express = require('express')
const server = express();
const fs = require('fs');
const PORT = 5000;

// 지역별 그룹을 나누어 get 통신 설명
server.get('/',(req,res) => {
    res.send(`
        <div>
        <h1>해당 서버는 jsp Project를 위한 서버입니다.</h1>
        <h3>해당 API 는 일본 여행 관련 API입니다.</h3>
        <span>해당 지역들이 그룹이 되며 지역을 나타냅니다 예를들어 get방식으로 /Tokyo/[고유 값]을 통해 api fetch 할수있습니다.</span>    
        <ol>
                <li>도쿄 -> Tokyo</li>
                <li>교토 -> Kyoto </li>
                <li>오사카 -> Osaka</li>
                <li>후쿠오카 -> Fukuoka</li>
                <li>나고야 -> Nagoya</li>
                <li>오키나와 -> Okinawa</li>
            </ol>
<pre>
    data 형식은 
    [
        {
            "id" : "1",
            "region" : "Fukuoka",
            "Tourist_destination" : "address",
            "Tourist_dest_name" : "후쿠오카 타워",
            "Tourist_dest_img" : ["test.jpg"],
            "Tourist_dest_summary" : "시사이드 모.."
            "Tourist_dest_content" : "쿠오카의 상징이라 할 수 있는 이 곳..."
        }
    ]
</pre>
<strong>
    img 경로 -> ex) http://localhost:5000/지역/1.jpg
</strong>
        </div>`
    );
});


// 해당 파일의 값을 읽어서 return 하고 있음.
const fileReadFc = (filePath) => {
    const file = fs.readFileSync(filePath);
    const encodingFile = JSON.parse(file);
    return encodingFile;
};



// Tokyo
server.get('/Tokyo',(req,res) => {
    const json_file = fileReadFc("jsonFile/Tokyo.json");
    res.json(json_file);
});


// Kyoto
server.get('/Kyoto',(req,res) => {
    const json_file = fileReadFc("jsonFile/Kyoto.json");
    res.json(json_file);
});


// Osaka
server.get('/Osaka',(req,res) => {
    const json_file = fileReadFc("jsonFile/Osaka.json");
    res.json(json_file);
});


// Fukuoka 
server.get('/Fukuoka',(req,res) => {
    const json_file = fileReadFc("jsonFile/Fukuoka.json");
    res.json(json_file);
});

// Nagoya 
server.get('/Nagoya',(req,res) => {
    const json_file = fileReadFc("jsonFile/Nagoya.json");
    res.json(json_file);
});

// Okinawa 
server.get('/Okinawa',(req,res) => {
    const json_file = fileReadFc("jsonFile/Okinawa.json");
    res.json(json_file);
});


// image를 가져올수 있는 경로입니다.
server.get('/:region/:Tourist_dest_img',(req,res) => {
    const {region,Tourist_dest_img} = req.params;
    res.sendFile(__dirname + `/jsonFile/images/${region}/${Tourist_dest_img}`)
});


//Server Running..
server.listen(PORT,() => {
    console.log("server is Running!!!")
});