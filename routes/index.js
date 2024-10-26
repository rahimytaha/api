const { PrismaClient } = require('@prisma/client');
const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));
const prismaC = new PrismaClient();
/* GET home page. */
router.post('/Text', async function (req, res, next) {
  const body = await req.body;
  try {
    const creator = await prismaC.texts.create({ data: { time: new Date(), ReciveId: body.ReciveId, SenderId: body.yourId, text: body.text, GroupId: body.GroupId , } })
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
  const data = await prismaC.group.findMany()
  res.send({ success: true, data: data });
  try {
  } catch (error) {
    res.send({ success: false, error: error})
  }
});
router.get('/Chat', async function (req, res, next) {
  try {
    const { yourId } = await req.body;
    let data = await prismaC.group.findMany();
    data = data.filter(el => el.Peaple2 == yourId || el.Peaple1 == yourId)
    res.send({ success: true, data: data });
  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});


router.get('/AiImage', async function (req, res, next) {

  try {
    const { Text } = await req.body;
    const create = await axios.post("https://api.imggen.ai/guest-generate-image", {
      "prompt": Text
    })
    const uuid = "3fb21b95-313b-4b46-a6fe-321513a7c077"

   const interval= await setInterval(async () => {
      const get = await axios.get(`https://api.imggen.ai/guest-watch-process/${uuid}`)
      console.log(get.data,create.data,Text,uuid)
      if (get.data.images?.length >= 1) {
        clearInterval(interval)
        res.send({ success: true, data: get.data });
      }
    }, 60000);
    // console.log(create)?

  } catch (error) {
    res.send({ success: false, error: [error, req.body] })
  }
});



// const errorsCode =[
//   {code:"P2002",text :" سلام دوست من لطفا به گروهی که داری دوباره گروه نساز کار بدیه عزیزم 😒😍"}

// ]


// function handlerError(code) {
//   console.log(errorsCode.find(el=>el.code==code))
//   return errorsCode.find(el=>el.code==code)
// }



module.exports = router;
