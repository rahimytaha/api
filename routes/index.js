const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prismaC = new PrismaClient();
/* GET home page. */
router.post('/Text', async function (req, res, next) {
  const body = await req.body;
  try {
    const creator = await prismaC.texts.create({ data: { Time: new Date(), ReciveId: body.ReciveId, SendId: body.yourId, Text: body.text, GroupId: body.GroupId } })
    res.send({ success: true, data: [creator, "h"] });
  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});
router.get('/TextAll', async function (req, res, next) {
  try {
    const id = await req.body.id;
    const data = await prismaC.texts.findMany()
    res.send({ success: true, data: data });
  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});
router.get('/Text', async function (req, res, next) {
  try {
    const { GroupId, yourId } = await req.body;
    const data = await prismaC.texts.findMany({ where: { GroupId: GroupId } });
    res.send({ success: true, data: data });
  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});



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
router.get('/Chat', async function (req, res, next) {
  try {
    const { yourId } = await req.body;
    let data = await prismaC.group.findMany();
   data= data.filter(el => el.Peaple2 == yourId || el.Peaple1 == yourId)
    res.send({ success: true, data: data });
  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});


module.exports = router;
