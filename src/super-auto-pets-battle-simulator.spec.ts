import { BattleService } from './super-auto-pets-battle-simulator';
describe("UserService getUsers method test case", ()=> {
  // For storing UserService instance
  let battleService: BattleService;
  // For every test case we need UserService instance so before running each test case the UserService instance will be created
   beforeEach(() => {
     battleService = new BattleService();
   });
   
   // Test case to ensure getUsers method is defined
   it('Should be defined', () => {
      expect(battleService.getPets()).toBeDefined('getUsers method should be defined');
   });
   // Test case to ensure getUsers method returns Array object
   it('Should return Array', () => {
      expect(battleService.getPets()).toEqual([], 'getUsers method should return Array object');
   });
   // Test case to ensure getUsers method returns Array containing specific object property and value
   it('Should return Array containing "name" property and value as "admin"', () => {
      expect(battleService.getPets()).toContain({'name': 'admin'}, 'getUsers method expect Array containing "name" property and value as "admin"');
   });
});