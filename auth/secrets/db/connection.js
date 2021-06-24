module.exports = class Mongoose {
  constructor() {
    this.db = require("mongoose");
  }
  mongooseQuery = async callback => {
    await this.db.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    const res = await callback();
    this.db.connection.close();
    return res;
  }
}