function createResult(error, data){
    const result = {}
     
    if(error){
        result['error'] = error
        result['status']= 'error'
    }else{
        result['status']= 'success'
        result['data'] = data
    }

    return result
}

module.exports = {
    createResult : createResult,
}