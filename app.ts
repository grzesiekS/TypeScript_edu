let coffeeSize: "medium" | "large";

coffeeSize = "medium";
coffeeSize = "small";

let stringOrNumber: string | number;
stringOrNumber = 255;
stringOrNumber = "max";

type doubleAnything = string | number

function double(value: doubleAnything): number {
  if(typeof value === "string") {
    return  Number(value) * 2;
  }

  return value * 2;
}

type maybeValue = string | undefined;

let valueFromDOM;

function show(value: maybeValue): maybeValue {
  return value;
}

show(valueFromDOM);

interface Knife {
  slice(): string;
}

interface Scissors {
  cut(): string;
}

type multiTool = Knife & Scissors;

function useTool(tool: multiTool): void {
  tool.cut();
  tool.slice();
}

const swissArmyKnife: multiTool = {
  slice() {
    return 'slice!'
  },
  cut() {
    return 'cut!'
  },
}

useTool(swissArmyKnife);