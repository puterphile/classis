if (!Array.isArray) {
  Array.isArray = function (object: any): object is any[] {
    return Object.prototype.toString.call(object) === "[object Array]";
  };
}

const hasStringifier = (object: any) =>
  object.toString !== Object.prototype.toString;

export function classis(...args: any) {
  let array: string[] = [];

  let index = 0;
  while (index < arguments.length) {
    const argument = arguments[index++];

    if (!argument) continue;

    const type = typeof argument;

    switch (type) {
      case "function":
        array.push(argument());
        continue;
      case "object":
        if (Array.isArray(argument)) {
          if (!argument.length) continue;
          const inner: string = classis(...(argument as any).flat(Infinity));
          array = array.concat(inner.split(" "));
        } else {
          if (hasStringifier(argument)) {
            array.push(`${argument}`);
            continue;
          }

          for (let key in argument) {
            const value = argument[key];

            if (typeof value === "boolean") {
              if (value) array.push(key);
              continue;
            }

            array.splice(
              array.findIndex((el) => el == key),
              1
            );

            array.push(value);
          }
        }
        continue;
      case "string":
      case "number":
      default:
        array.push(`${argument}`);
        continue;
    }
  }

  return array.join(" ");
}

export default classis;
