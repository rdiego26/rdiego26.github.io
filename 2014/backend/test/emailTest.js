/**
 * Created by ramos on 04/10/14.
 */

var nodemailer = require("nodemailer");

describe('Email tests', function() {

    describe('Send a simple email with nodemailer', function() {

        var smtpTransport = nodemailer.createTransport("SMTP",{
            host: "smtp.gmail.com",
            port: 465,
            secureConnection: true,
            auth: {
                user: "contactSiteDiegoRamos@gmail.com",
                pass: "djaljda3617%"
            }
        });

        var mailOptions = {
            from: "contactSiteDiegoRamos@gmail.com", // sender address
            to: "rdiego26@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Yeah ✔" // plaintext body
        };

        it('Envio de e-mail', function(done) {

            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                }else{
                    console.log("Message sent: " + response.message);
                    done();
                }
                smtpTransport.close();
            });

        });

    });

});

