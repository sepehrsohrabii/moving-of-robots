const Moving = require('./moving');

const GetCommand = (robot, directions) => {
  let commandList = [];
  process.stdout.write('Enter the command: ');

  process.stdin.on('data', (input) => {
    const command = input.toString().replace('\n', '');
    if (command.includes(' ')) {
      const splitCommand = command.split(' ');
      const mainCommand = splitCommand[0];
      const positionDirection = splitCommand[1].split(',');
      const direction = positionDirection[0];
      const positionX = positionDirection[1];
      const positionY = positionDirection[2];
      commandList = [
        mainCommand.toString(),
        direction.toString(),
        positionX,
        positionY,
      ];
    } else {
      commandList = [command];
    }

    robot = Moving(commandList, robot, directions);
    console.log('Enter the command: ');
  });

  return (commandList);
};

module.exports = GetCommand;
