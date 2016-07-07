import {accessor, constant, stylize} from "d3plus-common";
import {default as prefix} from "./prefix";
import {select} from "d3-selection";
import {transition} from "d3-transition";
const d3 = {
  select, transition
};

/**
    The default id accessor function.
    @private
*/
function tooltipId(d, i) {
  return d.id || `${i}`;
}

/**
    The default translate accessor function.
    @private
*/
function tooltipTranslate(d) {
  return [d.x, d.y];
}

/**
    @function tooltip
    @desc Creates HTML tooltips in the body of a webpage. If *data* is specified, immediately draws the tooltips based on the specified array and returns this generator. If *data* is not specified on instantiation, it can be passed/updated after instantiation using the [data](#tooltip.data) method.
    @param {Array} [data = []]
*/
export default function(data = []) {

  /**
      Sets styles for both enter and update.
      @private
  */
  function boxStyles(box) {
    box
      .style("background", background)
      .style(`${pre}border-radius`, borderRadius)
      .style("pointer-events", pointerEvents)
      .style("padding", padding)
      .style("width", width)
      .style("height", height)
      .style("border", function(d, i) {
        const b = d3.select(this).style("border");
        return b !== "0px none rgb(0, 0, 0)" ? b : border(d, i);
      })
      .style("top", function(d, i) {
        return `${translate(d, i)[1] - this.offsetHeight - offset(d, i)}px`;
      })
      .style("left", function(d, i) {
        return `${translate(d, i)[0] - this.offsetWidth / 2}px`;
      });
  }

  /**
      Fetches table contents given functions or values.
      @private
  */
  function cellContent(d) {
    if (typeof d === "function") {
      const datum = d3.select(this.parentNode.parentNode).datum();
      return d(datum, data.indexOf(datum));
    }
    else return d;
  }

  const pre = prefix();

  let background = constant("rgba(255, 255, 255, 0.75)"),
      body = accessor("body", ""),
      bodyStyle = {
        "font-size": "10px",
        "font-weight": "400"
      },
      border = constant("1px solid rgba(0, 0, 0, 0.1)"),
      borderRadius = constant("2px"),
      className = "d3plus-tooltip",
      duration = constant(200),
      footer = accessor("footer", ""),
      footerStyle = {
        "font-size": "10px",
        "font-weight": "400"
      },
      height = constant("auto"),
      id = tooltipId,
      offset = constant(5),
      padding = constant("5px"),
      pointerEvents = constant("auto"),
      tableStyle = {
        "border-spacing": "0",
        "width": "100%"
      },
      tbody = [],
      tbodyStyle = {
        "font-size": "10px",
        "text-align": "center"
      },
      thead = [],
      theadStyle = {
        "font-size": "10px",
        "font-weight": "600",
        "text-align": "center"
      },
      title = accessor("title", ""),
      titleStyle = {
        "font-size": "12px",
        "font-weight": "600"
      },
      translate = tooltipTranslate,
      width = constant("auto");

  /**
      The inner return object and draw function that gets assigned the public methods.
      @private
  */
  function tooltip(callback) {

    const tooltips = d3.select("body").selectAll(`.${className}`)
      .data(data, id);

    const enter = tooltips.enter().append("div")
      .attr("class", className)
      .style("position", "absolute")
      .style(`${pre}transform`, "scale(0)")
      .style(`${pre}transform-origin`, "50% 100%");

    const update = tooltips.merge(enter);

    /**
        Creates DIV elements with a unique class and styles.
        @private
    */
    function divElement(cat) {
      enter.append("div").attr("class", `d3plus-tooltip-${cat}`);
      const div = update.select(`.d3plus-tooltip-${cat}`).html(eval(cat));
      stylize(div, eval(`${cat}Style`));
    }

    divElement("title");
    divElement("body");

    const tableEnter = enter.append("table").attr("class", "d3plus-tooltip-table");
    const table = update.select(".d3plus-tooltip-table");
    stylize(table, tableStyle);

    tableEnter.append("thead").attr("class", "d3plus-tooltip-thead");
    const tableHead = update.select(".d3plus-tooltip-thead");
    stylize(tableHead, theadStyle);
    const th = tableHead.selectAll("th").data(thead);
    th.enter().append("th").merge(th).html(cellContent);
    th.exit().remove();

    tableEnter.append("tbody").attr("class", "d3plus-tooltip-tbody");
    const tableBody = update.select(".d3plus-tooltip-tbody");
    stylize(tableBody, tbodyStyle);
    const tr = tableBody.selectAll("tr").data(tbody);
    const trEnter = tr.enter().append("tr");
    tr.exit().remove();
    const trUpdate = tr.merge(trEnter);
    const td = trUpdate.selectAll("td").data((d) => d);
    td.enter().append("td").merge(td).html(cellContent);

    divElement("footer");

    enter.call(boxStyles);

    update
      .attr("id", (d, i) => `d3plus-tooltip-${id(d, i)}`)
      .transition().duration(duration)
        .style(`${pre}transform`, "scale(1)")
        .call(boxStyles);

    tooltips.exit()
      .transition().duration(duration)
      .style(`${pre}transform`, "scale(0)")
      .remove();

    if (callback) setTimeout(callback, 100);

    return tooltip;

  }

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.
      @param {Function|String} [*value* = "rgba(255, 255, 255, 0.75)"]
  */
  tooltip.background = function(_) {
    return arguments.length ? (background = typeof _ === "function" ? _ : constant(_), tooltip) : background;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.body || "";
}
  */
  tooltip.body = function(_) {
    return arguments.length ? (body = typeof _ === "function" ? _ : constant(_), tooltip) : body;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-size": "10px",
  "font-weight": "400"
}
  */
  tooltip.bodyStyle = function(_) {
    return arguments.length ? (bodyStyle = Object.assign(bodyStyle, _), tooltip) : bodyStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.
      @param {Function|String} [*value* = "1px solid rgba(0, 0, 0, 0.1)"]
  */
  tooltip.border = function(_) {
    return arguments.length ? (border = typeof _ === "function" ? _ : constant(_), tooltip) : border;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.
      @param {Function|String} [*value* = "2px"]
  */
  tooltip.borderRadius = function(_) {
    return arguments.length ? (borderRadius = typeof _ === "function" ? _ : constant(_), tooltip) : borderRadius;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.
      @param {String} [*value* = "d3plus-tooltip"]
  */
  tooltip.className = function(_) {
    return arguments.length ? (className = _, tooltip) : className;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the methods that correspond to the key/value pairs and returns this generator. If *value* is not specified, returns the current configuration.
      @param {Object} [*value*]
  */
  tooltip.config = function(_) {
    if (arguments.length) {
      for (const k in _) if ({}.hasOwnProperty.call(_, k)) tooltip[k](_[k]);
      return tooltip;
    }
    else {
      const config = {};
      for (const k in tooltip.prototype.constructor) if (k !== "config" && {}.hasOwnProperty.call(tooltip, k)) config[k] = tooltip[k]();
      return config;
    }
  };

  /**
      @memberof tooltip
      @desc If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.
      @param {Array} [*data* = []]
  */
  tooltip.data = function(_) {
    return arguments.length ? (data = _, tooltip) : data;
  };

  /**
      @memberof tooltip
      @desc If *ms* is specified, sets the duration accessor to the specified function or number and returns this generator. If *ms* is not specified, returns the current duration accessor.
      @param {Function|Number} [*ms* = 200]
  */
  tooltip.duration = function(_) {
    return arguments.length ? (duration = typeof _ === "function" ? _ : constant(_), tooltip) : duration;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.footer || "";
}
  */
  tooltip.footer = function(_) {
    return arguments.length ? (footer = typeof _ === "function" ? _ : constant(_), tooltip) : footer;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-size": "10px",
  "font-weight": "400"
}
  */
  tooltip.footerStyle = function(_) {
    return arguments.length ? (footerStyle = Object.assign(footerStyle, _), tooltip) : footerStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.
      @param {Function|String} [*value* = "auto"]
  */
  tooltip.height = function(_) {
    return arguments.length ? (height = typeof _ === "function" ? _ : constant(_), tooltip) : height;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d, i) {
  return d.id || "" + i;
}
  */
  tooltip.id = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), tooltip) : id;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the offset accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current offset accessor.
      @param {Function|String} [*value* = "5px"]
  */
  tooltip.offset = function(_) {
    return arguments.length ? (offset = typeof _ === "function" ? _ : constant(_), tooltip) : offset;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.
      @param {Function|String} [*value* = "5px"]
  */
  tooltip.padding = function(_) {
    return arguments.length ? (padding = typeof _ === "function" ? _ : constant(_), tooltip) : padding;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.
      @param {Function|String} [*value* = "auto"]
  */
  tooltip.pointerEvents = function(_) {
    return arguments.length ? (pointerEvents = typeof _ === "function" ? _ : constant(_), tooltip) : pointerEvents;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "border-spacing": "0",
  "width": "100%"
}
  */
  tooltip.tableStyle = function(_) {
    return arguments.length ? (tableStyle = Object.assign(tableStyle, _), tooltip) : tableStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.
      @param {Array} [*value* = []]
  */
  tooltip.tbody = function(_) {
    return arguments.length ? (tbody = _, tooltip) : tbody;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-size": "10px",
  "font-weight": "600",
  "text-align": "center"
}
  */
  tooltip.tbodyStyle = function(_) {
    return arguments.length ? (tbodyStyle = Object.assign(tbodyStyle, _), tooltip) : tbodyStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.
      @param {Array} [*value* = []]
  */
  tooltip.thead = function(_) {
    return arguments.length ? (thead = _, tooltip) : thead;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-size": "10px",
  "font-weight": "600",
  "text-align": "center"
}
  */
  tooltip.theadStyle = function(_) {
    return arguments.length ? (theadStyle = Object.assign(theadStyle, _), tooltip) : theadStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return d.title || "";
}
  */
  tooltip.title = function(_) {
    return arguments.length ? (title = typeof _ === "function" ? _ : constant(_), tooltip) : title;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.
      @param {Object} [*value*]
      @example <caption>default styles</caption>
{
  "font-size": "12px",
  "font-weight": "600"
}
  */
  tooltip.titleStyle = function(_) {
    return arguments.length ? (titleStyle = Object.assign(titleStyle, _), tooltip) : titleStyle;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the translate accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current translate accessor.
      @param {Function|Array} [*value*]
      @example <caption>default accessor</caption>
function value(d) {
  return [d.x, d.y];
}
  */
  tooltip.translate = function(_) {
    return arguments.length ? (translate = typeof _ === "function" ? _ : constant(_), tooltip) : translate;
  };

  /**
      @memberof tooltip
      @desc If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.
      @param {Function|String} [*value* = "auto"]
  */
  tooltip.width = function(_) {
    return arguments.length ? (width = typeof _ === "function" ? _ : constant(_), tooltip) : width;
  };

  return data.length ? tooltip() : tooltip;

}
