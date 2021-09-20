const upload = (req, res) => {

  if(req.fileValidationError){
    return res.status(400).json({ code: 'Conflict', message: "Extension must be `png`"})
  }

  res.status(200).json({ code: 'ok', message:'Menssagem enviada com sucesso'})
}

module.exports ={
  upload,
}