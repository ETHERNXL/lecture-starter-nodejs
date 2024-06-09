const invalidData = 'Invalid user information';
const invalidEmail = 'Invalid email address or its already in use';
const invalidPhone = 'Number must match the following format: +380xxxxxxxxx';
const invalidPass = 'Password must be at least 3 symbols long';
const userNotFound = 'User not found';
const userExists = 'User already exists';

const invalidFighterData = 'Invalid fighter information';
const invalidPower = 'Power must be between 1 to 100';
const invalidDefense = 'Defense must be between 1 to 10';
const invalidHealth = 'Health must be between 80 to 120 (default - 85)';
const fighterNotFound = 'Fighter not found';
const fighterExists = 'A fighter with this name already exists';

const invalidFightData = 'Invalid fight information';

export const errors = {
  emptyBody: 'Request body is empty',

  user: {
    invalidData,
    invalidEmail,
    invalidPhone,
    invalidPass,
    userNotFound,
    userExists,
  },

  fighter: {
    invalidFighterData,
    invalidPower,
    invalidDefense,
    invalidHealth,
    fighterNotFound,
    fighterExists,
  },

  fight: {
    invalidFightData,
  },
};