const Moving = (command, robot, directions) => {
  const baseDir = robot.direction;
  let robotDirIndex = directions.indexOf(baseDir);
  if (command.length !== 0) {
    if (command[0].includes('PLACE') === true) {
      if (command[1] >= 0 && command[1] <= 5 && command[2] >= 0 && command[2] <= 5) {
        robot.x = command[1];
        robot.y = command[2];
        robot.direction = command[3];
      } else {
        console.log(`The box size is 5*5 and the robot's posittion is: ${robot}`);
      }
    } else if (command[0].includes('MOVE') === true) {
      if (robot.direction === 'NORTH' && robot.y < 5) {
        robot.y += 1;
      } else if (robot.direction === 'EAST' && robot.x < 5) {
        robot.x += 1;
      } else if (robot.direction === 'SOUTH' && robot.y > 0) {
        robot.y -= 1;
      } else if (robot.direction === 'WEST' && robot.x > 0) {
        robot.x -= 1;
      } else {
        console.log(`The box size is 5*5 and the robot's posittion is: ${robot}`);
      }
    } else if (command[0].includes('LEFT') === true) {
      if (robotDirIndex === 0) {
        robotDirIndex = 4;
      }
      robot.direction = directions[robotDirIndex - 1];
    } else if (command[0].includes('RIGHT') === true) {
      if (robotDirIndex === 3) {
        robotDirIndex = -1;
      }
      robot.direction = directions[robotDirIndex + 1];
    } else if (command[0].includes('REPORT') === true) {
      console.log(robot);
    }
  }

  return robot;
};

module.exports = Moving;
