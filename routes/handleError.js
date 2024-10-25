const errorsCode =[
    {code:"P2002",text :" سلام دوست من لطفا به گروهی که داری دوباره گروه نساز کار بدیه عزیزم 😒😍"}

]


 function handlerError(code) {
    return errorsCode.find(el=>el.code==code)
}
  