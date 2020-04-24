import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseconfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseconfig);
    this.init();
  }

  init() {
    // eslint-disable-next-line arrow-parens
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
