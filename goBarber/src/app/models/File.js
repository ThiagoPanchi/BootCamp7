import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
        // eslint-disable-next-line comma-dangle
      }
    );

    return this;
  }
}

export default File;