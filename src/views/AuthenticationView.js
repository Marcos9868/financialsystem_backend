class AuthenticationView {
  static renderSuccess(res, message) {
    return res.status(200).json({ success: message });
  }

  static renderError(res, status, message) {
    return res.status(status).json({ error: message });
  }
}

module.exports = AuthenticationView;