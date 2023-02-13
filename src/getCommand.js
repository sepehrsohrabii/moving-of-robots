const GetCommand = () => {
  let commandDict = {};
  process.stdout.write('Enter the command: ');

  process.stdin.on('data', (input) => {
    const command = input.toString();
    if (command.includes(' ')) {
      const splitCommand = command.split(' ');
      const mainCommand = splitCommand[0];
      const positionDirection = splitCommand[1].split(',');
      const direction = positionDirection[0];
      const positionX = positionDirection[1];
      const positionY = positionDirection[2];
      commandDict = {
        mainCommand,
        direction,
        positionX,
        positionY,
      };
    } else {
      commandDict = {
        mainCommand: command,
      };
    }

    console.log(commandDict);
  });
  return commandDict;
};

module.exports = GetCommand;
