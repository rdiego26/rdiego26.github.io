/**
 * Created by ramos on 04/10/14.
 */
Constants = {

    header: {
        json: 'application/json'
    },

    app: {
        name: 'BackEnd Site Diego Ramos',
        port: 4500
    },

    email: {
        subject: 'Contato pelo site - ',
        contactEmail: 'rdiego26@gmail.com',
        config:  {
            host: "smtp.gmail.com",
            port: 465,
            secureConnection: true,
            auth: {
                user: "contactSiteDiegoRamos@gmail.com",
                pass: "djaljda3617%"
            }
        }
    },

    error: {
        generic: {error:'Ocorreu um erro durante o processamento'}
    },

    /*
     *  @see: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     */
    http: {
        ok:         {cod:200, msg:'OK'},
        noContent:  {cod:204, msg:'No Content'},
        notFound:   {cod:404, msg:'Not Found'},
        internalError:   {cod:500, msg:'Erro interno'}
    }

}

module.exports = Constants;