import {test} from "tape";
import {default as Tooltip} from "../src/Tooltip.js";

test("Tooltip", assert => {

  new Tooltip()
    .render(() => {

      assert.true(true, "function success");
      assert.end();

    });

});
