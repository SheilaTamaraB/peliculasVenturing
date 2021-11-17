const logs = (req,res,next) =>{
    const url = req.url
    const status = res.status
    //TODO guardar logd
    next()
}

module.exports = logs