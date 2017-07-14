'use strict'

import mongoose from 'mongoose'
import { MongoDBServer } from 'mongomem'

const defaults = {
  host : 'localhost',
  port : 27017,
  db  : 'clouddyDb'
}

class Db {

  constructor (options) {
    options = options || {}
    this.host =  options.host || defaults.host
    this.port = options.port || defaults.port
    this.db = options.db || defaults.db
  }

  connect () {
    this.dbConnection = mongoose.connection

    this.connection = mongoose.connect({
      host : this.host,
      port : this.port
    })
  }

}

module.export =  Db