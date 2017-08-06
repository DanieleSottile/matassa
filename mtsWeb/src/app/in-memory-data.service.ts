import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
    { id: 11, name: 'Tomatoes' },
    { id: 12, name: 'Courgettes' },
    { id: 13, name: 'Eggplants' },
    { id: 14, name: 'Eggs' },
    { id: 15, name: 'Sugar' }
    ];
    return {ingredients};
  }
}
