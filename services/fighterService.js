import { fighterRepository } from '../repositories/fighterRepository.js';

class FighterService {
  getAllFighters() {
    return fighterRepository.getAll();
  }

  search(queryObj) {
    const item = fighterRepository.getOne(queryObj);
    return item ? item : null;
  }

  createFighter(data) {
    return fighterRepository.create(data);
  }

  editFighter(id, dataToUpdate) {
    return fighterRepository.update(id, dataToUpdate);
  }

  deleteFighter(id) {
    const doesExist = this.search({ id });
    if (!doesExist) return null;

    const [deletedFighter] = fighterRepository.delete(id);
    return deletedFighter;
  }
}

export const fighterService = new FighterService();