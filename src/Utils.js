export const restTimeAndScheduleCollisionChecker = (
  oldArrival,
  newDeparture,
  rotations
) => {
  if (rotations.length === 0) {
    console.log("it's empty");
    return true;
  }
  if (newDeparture - oldArrival < 20) {
    return false;
  }

  return true;
};

export const routeChecker = (arr, obj) => {
  if (arr.length === 0) {
    return;
  }
  let lastIndex = arr.length - 1;
  console.log(arr[lastIndex], obj, arr.length);
  return arr[lastIndex].destination !== obj.origin ? false : true;
};
