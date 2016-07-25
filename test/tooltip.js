import {test} from "tape";
import {default as tooltip} from "../src/tooltip.js";

test("tooltip", assert => {

  tooltip()
    (() => {

      assert.true(true, "function success");
      assert.end();

    });

});
