var express 		= 		require("express"),
	bodyParser		=		require("body-parser");
var app				=		express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
	res.render("landing");
});
app.get("/dfa",function(req,res){
	res.render("dfa");
})
app.get("/nfa",function(req,res){
	res.render("nfa");
})
app.get("/algorithm",function(req,res){
	res.render("algorithm");
})
app.get("/convertor",function(req,res){
	res.render("../views/convertor/index");
})
app.get("/jflap",function(req,res){
	res.render("jflap");
})










var port=process.env.PORT || 3000;
app.listen(port,process.env.IP,function(){
	console.log("Fla server running");
})