const validate = password => {
  const regex = /^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]*$/;
  return regex.test(password);
};

export { validate };
