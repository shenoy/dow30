import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

const average = data => {
  return _.round(_.sum(data) / data.length);
};

const Chart = props => {
  return (
    <div>
      <div>DAY 1 : {props.data[0]}</div>
      <div>DAY 100 : {props.data[99]}</div>

      <Sparklines height={100} width={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average {average(props.data)}</div>
    </div>
  );
};

export default Chart;
