class FakeAuth {
  jwtSign() {
    return 'AccessDenied';
  }
}

export default FakeAuth;
