import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const goals = [
      { id: 0, title: 'Goal 0' },
      { id: 11, title: 'Goal 1' },
      { id: 12, title: 'Goal 2' },
      { id: 13, title: 'Goal 3' },
      { id: 14, title: 'Goal 4' },
      { id: 15, title: 'Goal 5' },
      { id: 16, title: 'Goal 6' },
      { id: 17, title: 'Goal 7' }
    ]

    const users = [
      { id: 0, username: 'vinnie', password: 'asdf1234' }
    ]
    return {goals, users};
  }
}