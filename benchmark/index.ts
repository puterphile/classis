import { Suite } from "benchmark";
import classis from "..";

new Suite()
  .add("classis conditaion", () => {
    classis(true && "blue", false && "yellow");
  })
  .add("classis undefined", () => {
    classis(undefined, ["blue", [undefined]], {});
  })
  .add("classis override", () => {
    classis("blue", "white", { white: "yellow" });
  })
  .on("cycle", (event: any) => console.log(`${event.target}]\n`))
  .run();
