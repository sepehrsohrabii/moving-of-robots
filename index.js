const GetCommand = require('./src/getCommand');
const Moving = require('./src/moving');

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const robot = {
  x: 0,
  y: 0,
  direction: directions[0],
};

console.log(robot);
const command = GetCommand(robot);
Moving(command, robot);
