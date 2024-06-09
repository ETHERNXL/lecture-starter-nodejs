import { USER } from '../models/user.js';
import { userService } from '../services/userService.js';
import { regex } from '../constants/regex.js';
import { errors } from '../constants/errors.js';

const userKeys = Object.keys(USER);
const userSchema = [...userKeys];

const indexOfId = userSchema.indexOf('id');
userSchema.splice(indexOfId, 1);

const createUserValid = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);

  if (!bodyKeys.length) {
    res.error = errors.emptyBody;
    next();
  }

  const matches = bodyKeys.every((bodyKey) =>
    userSchema.find((userKey) => userKey === bodyKey)
  );

  if (!matches) {
    res.error = errors.user.invalidData;
    next();
  }

  const { email, phoneNumber, password } = req.body;

  if (!regex.email.test(email)) {
    res.error = errors.user.invalidEmail;
    next();
  }

  if (!regex.phoneNumber.test(phoneNumber)) {
    res.error = errors.user.invalidPhone;
    next();
  }

  const doesEmailExist = userService.search({ email });
  const doesPhoneExist = userService.search({ phoneNumber });

  if (doesEmailExist || doesPhoneExist) {
    res.error = errors.user.userExists;
    next();
  }

  if (typeof password !== 'string' || password.length < 3) {
    res.error = errors.user.invalidPass;
    next();
  }

  next();
};

const updateUserValid = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);

  if (!bodyKeys.length) {
    res.error = errors.user.emptyBody;
    next();
  }

  const matches = bodyKeys.some((bodyKey) =>
    userSchema.find((userKey) => userKey === bodyKey)
  );

  if (!matches) {
    res.error = errors.user.invalidData;
    next();
  }

  const { email, phoneNumber } = req.body;

  if (email && !regex.email.test(email)) {
    res.error = errors.user.invalidEmail;
    next();
  }

  if (phoneNumber && !regex.phoneNumber.test(phoneNumber)) {
    res.error = errors.user.invalidPhone;
    next();
  }

  next();
};

export { createUserValid, updateUserValid };