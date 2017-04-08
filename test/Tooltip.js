import zora from "zora";
import {default as Tooltip} from "../src/Tooltip.js";

export default zora()
  .test("Tooltip", function *(assert) {

    yield cb => new Tooltip().render(cb);
    assert.ok(true, "function success");

  });
