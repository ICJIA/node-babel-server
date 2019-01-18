import 'dotenv/config';

const userCredentials = { firstname: 'John' };
const userDetails = { role: 'Administrator' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
