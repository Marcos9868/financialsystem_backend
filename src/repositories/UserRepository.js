class UserRepository {
  async create() {
    const script = `
      INSERT INTO users
      (name, email, password, documentNumber, status)
      VALUES 
      ($1, $2, $3, $4, $5)
      RETURNING id
    `;

    const values = [];

    const { rows } = await db.query(script, values);
    const [ newUser ] = rows;

    return newUser.id;
  }

  async list() {
    const query = `
      SELECT name, email, password FROM users
    `;

    const { rows } = await db.query(query)

    return rows || [];
  }

  async show() {

  }

  async update() {
    
  }

  async remove() {

  }
}

module.exports = new UserRepository();