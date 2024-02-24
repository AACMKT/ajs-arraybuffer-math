import Character from '../models/Character';

test.each(
  [[' is too short', 'q'],
    ['is too long', 'Robin the Good'],
    ['contains only numbers', '12345']],
)('parent class Character throwing error (name %s) banch test', (_, wrongName) => {
  const throwError = () => {
    const char = new Character(wrongName, 'Magician');
    return char;
  };
  expect(throwError).toThrowError('Name has to be from 2 to 10 characters lenght and contains at least one letter');
});

test('parent class Character throwing error (adventure type in not correct) banch test', () => {
  const throwError = () => {
    const char = new Character('J Chan', 'Drunck master');
    return char;
  };
  expect(throwError).toThrowError('Unsupported class of adventure!');
});

test('parent class Character sucesfull creation', () => {
  const char = new Character('Gendalf', 'Magician');
  expect(char).toEqual({
    health: 100, level: 1, name: 'Gendalf', type: 'Magician',
  });
});
