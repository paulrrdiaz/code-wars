const SHOULD_HAVE = [/[A-Z]/, /[0-9]/, /[.!?\\-]/, /^.{8,30}$/];
const SHOULD_NOT_HAVE = [/^password$/g];

const simplePassword = password => {
  return (
    SHOULD_HAVE.every(match => match.test(password)) &&
    SHOULD_NOT_HAVE.every(match => !match.test(password))
  ).toString();
};

export { simplePassword };
