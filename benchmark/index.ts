import { Suite } from "benchmark";
import classis from "..";
import _classis from "@scriptum/classis";

new Suite()
  .add("_classis conditaion", () => {
    _classis(true && "blue", false && "yellow");
  })
  .add("classis conditaion", () => {
    classis(true && "blue", false && "yellow");
  })
  .add("_classis undefined", () => {
    _classis(undefined, ["blue", [undefined]], {});
  })
  .add("classis undefined", () => {
    classis(undefined, ["blue", [undefined]], {});
  })
  .add("_classis override", () => {
    _classis("blue", "white", { white: "yellow" });
  })
  .add("classis override", () => {
    classis("blue", "white", { white: "yellow" });
  })
  .on("cycle", (event: any) => console.log(`${event.target}]\n`))
  .run();
