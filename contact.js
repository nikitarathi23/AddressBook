var jsonFile = require('jsonFile')
var Contact = {}
var Util = require('./util')

Contact.parseName = function(str){
                     var res = str.split(",")
                     return res[0].trim()
                    }

Contact.parseNumber = function(str){
                      return str.split(",")[1]
                      }

Contact.createContact = function(str){
                         var contact = {name : this.parseName(str),
                                        number : this.parseNumber(str)
                                        }
                         return contact
                        }


Contact.loadContacts = function(done){
  jsonFile.readFile(Util.getDataPath(), function(err, data){
    done(err, data)
  })
}

Contact.saveContacts = function(contacts, done){
 jsonFile.writeFile(Util.getDataPath(), contacts, done)
}

Contact.saveContact = function(contact, done){
   var _this = this
   this.loadContacts(function(err, contacts){
    if(err){return done(err)}
    contacts.push(contact)
    _this.saveContacts(contacts, done)
})
}

Contact.findContacts = function(name, done){
   var _this = this
   this.loadContacts(function(err, contacts){
     foundContacts = contacts.filter(function(value){
                       return value.name == name
                      })
     done(err, foundContacts)
   })
}


module.exports = Contact
