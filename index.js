/**
 * Initialize an given object with the following behaviour
 * Key -> sets the values to null
 * Array -> If Array of Objects: sets array size to 1 and all object keys to null
 *          If Array of Elements: sets array size to 0
 * @param {*} obj
 */
const cleanObject = obj => {
  let tmpObj;
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    tmpObj = { ...obj };
    for (let key in tmpObj) {
      tmpObj[key] = cleanObject(tmpObj[key]);
    }
  } else if (typeof obj === "object" && Array.isArray(obj)) {
    tmpObj = [...obj];
    tmpObj =
      typeof tmpObj[0] === "object" &&
      tmpObj[0] !== null &&
      !Array.isArray(tmpObj[0])
        ? [cleanObject(tmpObj[0])]
        : tmpObj.splice();
  } else {
    return null;
  }
  return tmpObj;
};

module.exports = cleanObject;
