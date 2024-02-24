import Magician from '../models/Magician';
import Daemon from '../models/Daemon';

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [11, 0]])('Subclasses attack efficiency (without stone) test', (cell, attack) => {
  const magician = new Magician('Some name');
  const daemon = new Daemon('Some name');
  magician.attack = cell;
  daemon.attack = cell;
  expect([magician.attack, daemon.attack]).toEqual([attack, attack]);
});

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [11, 0]])('', (cell, attack) => {
  const magician = new Magician('Some name');
  const daemon = new Daemon('Some name');
  magician.stoned = true;
  magician.attack = cell;
  daemon.stoned = true;
  daemon.attack = cell;
  const formula = attack - (Math.log2(cell) * 5).toFixed(1);
  expect([magician.attack, daemon.attack]).toEqual([formula, formula]);
});

test.each([
  ['no', false],
  ['not', false],
  ['false', false],
  ['not stoned', false],
  ['0', false],
  [false, false],
  [true, true],
  [1, true],
  [42, true],
  ['some text', true],
])('', (input, output) => {
  const magician = new Magician('Some name');
  const daemon = new Daemon('Some name');
  magician.stoned = input;
  daemon.stoned = input;
  expect([magician.stoned, daemon.stoned]).toEqual([output, output]);
});
