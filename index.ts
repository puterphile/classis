if (!Array.isArray) {
  Array.isArray = function (object: any): object is any[] {
    return Object.prototype.toString.call(object) === "[object Array]";
  };
}

const hasStringifier = (object: any) =>
  object.toString !== Object.prototype.toString;

export function classis(...args: any) {
  const object: { [k: string]: boolean } = {};

  for (let index in arguments) {
    const argument = arguments[index];

    if (!argument) continue;

    const type = typeof argument;

    switch (type) {
      case "string":
      case "number":
        object[argument] = true;
        continue;
      case "function":
        object[argument()] = true;
        continue;
      case "object":
        if (Array.isArray(argument)) {
          if (!argument.length) continue;
          const inner: string = classis(...(argument as any).flat(Infinity));
          inner.split(" ").map((className) => (object[className] = true));
        } else {
          if (hasStringifier(argument)) {
            object[`${argument}`] = true;
            continue;
          }

          for (let key in argument) {
            const value = argument[key];
            if (typeof value == "boolean") object[key] = !!value;
            else {
              if (!value) continue;
              object[key] = false;
              object[value] = true;
            }
          }
        }
        continue;
      default:
        object[`${argument}`] = true;
        continue;
    }
  }

  return Object.keys(object)
    .filter((className) => object[className])
    .join(" ");
}

export default classis;
