const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prismaC = new PrismaClient();
/* GET home page. */
router.post('/Chat', async function (req, res, next) {

    try {
        const { yourId, RevicedId } = await req.body;
        const creator = await prismaC.group.create({ data: { Peaple1: yourId, Peaple2: RevicedId } })
        res.send({ success: true, data: [creator, "h"] });
    } catch (error) {
        res.send({ success: false, error: [error, req.body] })
    }
});
router.get('/ChatAll', async function (req, res, next) {
    try {
        const data = await prismaC.group.findMany()
        res.send({ success: true, data: data });
    } catch (error) {
        res.send({ success: false, error: [error, req.body] })
    }
});
router.get('/Chat',async function (req, res, next) {
  try {
    const {yourId} = await req.body;
    let data =await prismaC.group.findMany();
    data.filter(el=>el.Peaple2==yourId ||el.Peaple1==yourId )
    res.send({success:true,data:data});
  }  catch (error) {
    res.send({success:false,error:[error,req.body]})
  }
});

module.exports = router;
