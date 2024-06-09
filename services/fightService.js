import { fightRepository } from '../repositories/fightRepository.js';

class FightService {
  getAllFights() {
    return fightRepository.getAll();
  }

  search(queryObj) {
    const item = fightRepository.getOne(queryObj);
    return item ? item : null;
  }

  save(data) {
    return fightRepository.create(data);
  }
}

export const fightService = new FightService();