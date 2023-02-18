const Moving = require('./src/moving');
const GetCommand = require('./src/getCommand');

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

let robot = {
  x: 0,
  y: 0,
  direction: directions[0],
};

console.log(robot);

const command = GetCommand(robot, directions);
robot = Moving(command, robot, directions);
