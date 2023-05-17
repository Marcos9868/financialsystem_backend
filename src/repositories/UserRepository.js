const db = require('../config/database.config');

class UserRepository {
  async create(user) {
    const script = `
      INSERT INTO users
      (name, email, password, documentNumber, status)
      VALUES 
      ($1, $2, $3, $4, $5)
      RETURNING id
    `;

    const values = [user.name, user.email, user.password, user.documentNumber, user.status, user.id];

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

  // async show() {
  //   const query = `
  //     SELECT 
  //   `;
  // }

  async findByEmailAndPassword(email, password) {
    try {
      const query = `
        SELECT id, email
        FROM list_users WHERE
        useremail = $1 AND
        password = crypt($2, 'my_salt')
      `;

      const values = [email, password]

      const { rows } = await db.query(query, values);
      const [ user ] = rows;

      return user || null

    } catch(error) {
      console.log('Query Error by useremail and password', error)
    }
  }

  async update() {
    const script = `
      UPDATE users
      SET 
        name = $1,
        email = $2,
        password = crypt($3, 'my_salt'),
        documentNumber = $4,
        status = $5
      WHERE id = $6
    `;

    const values = [
      user.name, 
      user.email, 
      user.password, 
      user.documentNumber, 
      user.status, 
      user.id
    ];

    await db.query(script, values)
  }

  async remove(id) {
    const script = `
      DELETE FROM users WHERE id = $1
    `;

    const values = [id];

    await db.query(script, values);
  }
}

module.exports = new UserRepository();