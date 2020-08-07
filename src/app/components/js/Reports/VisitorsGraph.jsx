import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "../../css/Reports.scss";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "6th Aug",
    value: "200"
  },
  {
    label: "5th Aug",
    value: "290"
  },
  {
    label: "4th Aug",
    value: "100"
  },
  {
    label: "3rd Aug",
    value: "190"
  },
  {
    label: "2nd Aug",
    value: "115"
  },
  {
    label: "1st Aug",
    value: "210"
  },
  {
    label: "31st July",
    value: "30"
  },
  {
    label: "30th July",
    value: "30"
  },
  {
    label: "29th July",
    value: "300"
  },
  {
    label: "28th July",
    value: "200"
  }
];

const chartConfigs = {
  type: "column2d", // The chart type
  width: "80%",
  height: "450", 
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Number Of Visitors of last 10 Days",
      //Set the chart subcaption
    //   subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Date",
      yAxisName: "No. Of Visitors",
      numberSuffix: "",
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

export default function VisitorsGraph() {
  return (
    <ReactFC {...chartConfigs} />
  );
}
