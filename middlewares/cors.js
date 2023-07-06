function enableCors(req,res,next){

    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PATCH,DELETE,OPTIONS');
    // OPTIONS - this is automatically sent request which browser will send when we use AJAX  Requests - evaluates whether it is request really want to send
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type')
    next();

    // Access-Control-Allow-Origin ---> which 'origins'(domains) may request resources
    // Access-Control-Allow-Methods ---> which http request methods may be sent by the allowed origins
    // Access-Control-Allow-Headers --> which header may be attached to requests sent by origins...
     
}   

module.exports = enableCors;