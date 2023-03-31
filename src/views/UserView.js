class UserView {
  static renderSuccess(res, message) {
    return res.status(200).json({ success: message });
  }

  static renderError(res, status, message) {
    return res.status(status).json({ error: message });
  }

  static renderUsers(res, users) {
    return res.status(200).json(users);
  }

  static renderUser(res, user) {
    return res.status(200).json(user);
  }
}

module.exports = UserView;