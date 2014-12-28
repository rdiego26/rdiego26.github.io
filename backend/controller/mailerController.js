/**
 * Created by ramos on 04/10/14.
 */

exports.sendEmail = function(req, res) {
    var constants = require('../utils/Constants'),
        _result = {status:{}, date:new Date(), data:[]},
        nodemailer = require("nodemailer");

    var smtpTransport = nodemailer.createTransport("SMTP", constants.email.config);

    var _name = req.body.name || undefined;
    var _email = req.body.email || undefined;
    var _subject = req.body.subject || '';
        _subject = constants.email.subject + _subject;
    var _website = req.body.website || undefined;
    var _message = req.body.message || undefined;
        _message = 'website: ' + _website + '\n' + _message

    var mailOptions = {
        from: _name + ' <'+ _email+'>', // sender address
        replyTo: _name + ' <'+ _email+'>', // sender address
        to: constants.email.contactEmail, // list of receivers
        subject: _subject, // Subject line
        text: _message // plaintext body
    };

    smtpTransport.sendMail(mailOptions, function(error, response) {

        if(error) {
            _result.status = constants.http.internalError;
            _result.data = error;
            smtpTransport.close();
            res.end(JSON.stringify(_result));
        } else {
            _result.status = constants.http.ok;
            _result.data = response;
            smtpTransport.close();
            res.end(JSON.stringify(_result));
        }


    });

};
