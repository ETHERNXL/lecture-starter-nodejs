import { FIGHTER } from '../models/fighter.js';
import { errors } from '../constants/errors.js';
import { fighterService } from '../services/fighterService.js';

const fighterKeys = Object.keys(FIGHTER);
const fighterSchema = [...fighterKeys];

const indexOfId = fighterSchema.indexOf('id');
fighterSchema.splice(indexOfId, 1);

const indexOfHealth = fighterSchema.indexOf('health');
fighterSchema.splice(indexOfHealth, 1);

const createFighterValid = (req, res, next) => {

  const bodyKeys = Object.keys(req.body);

  if (!bodyKeys.length) {
    res.error = errors.emptyBody;
    next();
  }

  const matches = bodyKeys.every(
    (bodyKey) =>
      fighterSchema.find((fighterKey) => fighterKey === bodyKey) ||
      bodyKey === 'health'
  );

  if (!matches) {
    res.error = errors.fighter.invalidFighterData;
    next();
  }

  const { name, health, power, defense } = req.body;

  const doesNameExist = fighterService.search({ name });

  if (doesNameExist) {
    res.error = errors.fighter.fighterExists;
    next();
  }

  if (power < 1 || power > 100 || typeof power != 'number') {
    res.error = errors.fighter.invalidPower;
    next();
}

  if (defense < 1 || defense > 10 || typeof defense != 'number') {
    res.error = errors.fighter.invalidDefense;
    next();
}

  if (!req.body.health) req.body.health = 85;

  if (req.body.health < 80 || req.body.health > 120 || typeof req.body.health != 'number') {
    res.error = errors.fighter.invalidHealth;
    next();
  }

  if (health && isHealthInvalid) {
    res.error = errors.fighter.invalidHealth;
    next();
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  const bodyKeys = Object.keys(req.body);

  if (!bodyKeys.length) {
    res.error = errors.emptyBody;
    next();
  }

  const matches = bodyKeys.some(
    (bodyKey) =>
      fighterSchema.find((fighterKey) => fighterKey === bodyKey) ||
      bodyKey === 'health'
  );

  if (!matches) {
    res.error = errors.fighter.invalidFighterData;
    next();
  }

  const { name, health, power, defense } = req.body;

  const nameExists = fighterService.search({ name });

  if (name && nameExists) {
    res.error = errors.fighter.fighterExists;
    next();
  }

  if (power < 1 || power > 100 || typeof power != 'number') {
    res.error = errors.fighter.invalidPower;
    next();
}

  if (defense < 1 || defense > 10 || typeof defense != 'number') {
    res.error = errors.fighter.invalidDefense;
    next();
}

  if (!req.body.health) req.body.health = 85;

  if (req.body.health < 80 || req.body.health > 120 || typeof req.body.health != 'number') {
    res.error = errors.fighter.invalidHealth;
    next();
  }

  if (health && isHealthInvalid) {
    res.error = errors.fighter.invalidHealth;
    next();
  }

  next();
};

export { createFighterValid, updateFighterValid };
