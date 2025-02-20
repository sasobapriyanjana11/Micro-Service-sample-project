const express=require("express")
const {Eureka} = require("eureka-js-client");

const app=express();
const port= 3000;
const router=express.Router();

router.get('inventory',(req,res)=>{
    res.json({
        item:["milk","Eggs","Bread"],
        message:"THIS IS INVENTORY SERVICE"
    })
});
const eurekaClient = new Eureka({
    instance: {
        instanceId: "inventory-service",
        app: "INVENTORY-SERVICE",
        hostName: "localhost",
        ipAddr: "127.0.0.1",
        port: {
            $: port,
            "@enabled": true,
        },
        vipAddress: "inventory-service",
        dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn",
        },
    },
    eureka: {
        host: "localhost",
        port: 8761,
        // servicePath: "/eureka/app/",
        // or
        // servicePath: "/eureka/",
        // or
        // empty
    },
});

app.use("/inventory",router);
app.listen(port,()=>{

   console.log(`server port listen in :  ${port}`) ;


   eurekaClient.start((error)=>{
      if(error){
          console.log("error")
      }else{
          console.log("success")
      }
   })

});
