import assert from "assert";
import {default as Tooltip} from "../src/Tooltip.js";
import it from "./jsdom.js";

it("Tooltip", function *() {

  yield cb => {

    new Tooltip().render(cb);

  };

  assert.strictEqual(document.getElementsByTagName("svg").length, 1, "automatically added <svg> element to page");
  assert.strictEqual(document.getElementsByClassName("d3plus-Tooltip").length, 1, "created <g> container element");

});