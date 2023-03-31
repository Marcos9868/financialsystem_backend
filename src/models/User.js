class User {
  constructor(id, name, email, password, documentNumber, status) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password,
    this.documentNumber = documentNumber,
    this.status = status
  }
}

module.exports = User;