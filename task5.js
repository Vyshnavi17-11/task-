var nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
service:'gmail',
auth:{
    user:'srivaishnavi.suddapalli15@gmail.com',
    pass:'sbgc orga tfcp oylu',
}
});
var mailOptions={
    from:"srivaishnavi.suddapalli15@gmail.com",
    to:'balubadarla9515@gmail.com',
    subject:"hola",
    text:'hallo',
}
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

