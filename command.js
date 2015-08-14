var Command = {}
var Contact = require('./contact')


Command.getOperation = function(){
   return process.argv[2];
}

Command.getOperationData = function(){
    return process.argv[3];
}

Command.add = function(done) {
  contact = Contact.createContact(process.argv[3])
  Contact.saveContact(contact, done)
}

Command.find = function(done) {
  var Contact = require('./contact')
    , data = this.getOperationData()

  Contact.findContacts(data, function(err, result) {
    if (err) {
      return done(err)
    }

    result.forEach(function(contact) {
      console.log(contact.name, contact.number)
    })

    done(null, result)
  })
}


module.exports = Command

