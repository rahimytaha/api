const { PrismaClient } = require("@prisma/client");
var express = require("express")
var router = express.Router()


const prismaC = new PrismaClient();
router.post("/CreateHelp", async function (req, res, next) {
    try {
        console.log(req.body)
        const userId = req.body.myId
        const allData = await prismaC.group.create({data:{Ishelp:true,Peaple1:userId,Peaple2:null}})
        res.send({success:true,data:allData})
    } catch (error) {
        console.log(error)
        res.send({success:false,error})
    }
})

router.get("/findHelpForAdmin", async function (req, res, next) {
    try {
        const allData = await prismaC.group.findMany({ where: { Peaple2: null,Ishelp:true } })
        res.send({success:true,data:allData})
    } catch (error) {
        res.send({success:false,error})
    }
})
router.post("/AcceptHelpForAdmin", async function (req, res, next) {
    try {
        const {AdminId,HelpId}=req.body
        const allData = await prismaC.group.update({where:{id:HelpId},data:{Peaple2:AdminId}})
        res.send({success:true,data:allData})
    } catch (error) {
        res.send({success:false,error})
    }
})
router.get("/AdminAll", async function (req, res, next) {
    try {
        const allData = await prismaC.group.findMany({ where: { Ishelp: true } })
        res.send({success:true,data:allData})
    } catch (error) {
        res.send({success:false,error})
    }

})
router.get("/findHelpMyAdmin/:Id", async function (req, res, next) {
    try {
        const {Id}= req.params
        const allData = await prismaC.group.findMany({ where: { Peaple2: parseInt(Id),Ishelp:true } })
        res.send({success:true,data:allData})
    } catch (error) {
        res.send({success:false,error})
    }
})
router.get("/HelpById/:Id", async function (req, res, next) {
    try {
        const {Id}= req.params
        const ChatInfo = await prismaC.group.findFirst({ where: { id:Id } })
        const TextsChat = await prismaC.texts.findMany({where:{GroupId:Id}})
        ChatInfo["dataText"] =TextsChat;
        res.send({success:true,data:ChatInfo})

    } catch (error) {
        res.send({success:false,error})
    }
})
router.post("/TextHelpCreate/:YourId/:Text", async function (req, res, next) {
    try {
        const {YourId,Text}= req.params
        const ChatInfo = await prismaC.group.create({data:{Peaple1:parseInt(YourId),Peaple2:null,Ishelp:true}})
        
        const TextsChat = await prismaC.texts.create({data:{GroupId:ChatInfo.id,SenderId:parseInt(YourId),text:Text,time:new Date()}})
        ChatInfo["dataText"] =TextsChat;
        res.send({success:true,data:ChatInfo})

    } catch (error) {
        console.log(error)
        res.send({success:false,error})
    }
})
module.exports = router;
