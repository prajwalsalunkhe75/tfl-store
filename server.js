var express = require('express');
var path = require ('path');

var app = express();

var flowers=[{"id":1,"name":"rose","unit_price":20 },
             {"id":2,"name":"orchid","unit_price":300 },
             {"id":3,"name":"sunflower","unit_price":100 }
    
]


var customer = [{"id":1,"name":"rajiv","surname":"patil"},
    {"id":2,"name":"raji","surname":"patil"},
    {"id":3,"name":"rajin","surname":"patil"},
    {"id":4,"name":"rajun","surname":"patil"}

]

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile("index.html");

});
app.get("/api/flowers",(req,res)=>{
    res.send(flowers);
});

app.get("/api/customers",(req,res)=>{
    res.send(flowers);
});


app.listen(9898);
console.log("server is listening on port 9999");