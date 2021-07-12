const express = require ("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3003;


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// uses apiRoutes
app.use("/api",apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT,()=> console.log("listening on PORT : ${PORT}"));
