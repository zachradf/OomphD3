export const optionData = {};

optionData.options0 = {
  childTextSize: 10,
  color: d3.scaleOrdinal(d3.schemeCategory10),
  diameter: 600,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 800,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  onHover: false,
  opacity: 0.75,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: false,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
};

optionData.options19 = {
  childTextSize: 10,
  color: 'green',
  colorScale: 'blue',
  diameter: 400,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 800,
  height: 600,
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  //onHover: true,
  opacity: 1,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  relativeNodeSize: false,
  showCategories: true,
  showLabels: true,
  sortBy: 'y asc',
  stack: true,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  xLine: true,
  yLine: true,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
  xTickFrequency: 30,
  yTickFrequency: 30,
  xTickLength: 600,
  yTickLength: 800,
  xTickExtension: 0,
  yTickExtension: 0,
  xTickOpacity: 1,
  yTickOpacity: 0.1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
};

optionData.options2 = {
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 800,
  height: 600,
  radius: 10.5,
  color: 'red',
  showCategories: true,
  diameter: 400,
  fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  // onHover: true,
  overlay: true,
  opacity: 1,
  stack: false,
  sortBy: 'y asc',
  xLine: false,
  yLine: false,
  textAnchor: 'middle',
  childTextSize: 10,
  // xAxisPosition: 500,
  // yAxisPosition: 500,
  xTickFrequency: 10,
  yTickFrequency: 10,
  xTickLength: 600,
  yTickLength: 800,
  xTickExtension: 0,
  yTickExtension: 0,
  xTickOpacity: 1,
  yTickOpacity: 1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
};

optionData.options3 = {
  childTextSize: 10,
  parentTextSize: 12,
  textAnchor: 'middle',
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 800,
  height: 600,
  colorScale: d3.interpolateRdYlBu, // use a diverging color scale
  fillColor: '#1f77b4', // color used to fill the area chart
  xLabel: 'X Axis Label',
  yLabel: 'Y Axis Label',
  outerRadius: 200,
  innerRadius: 150,
  overlay: false,
  onHover: false,
  // color: d3.scaleOrdinal(d3.schemeCategory10),
  color: 'red',
  nodeWidth: 10,
  nodePadding: 1,
  strokeColor: '#000000',
  radius: 10,
  yLine: true,
  xLine: true,
  xTickFrequency: 10,
  yTickFrequency: 10,
  xTickLength: 10,
  yTickLength: 10,
  xTickExtension: 1,
  yTickExtension: 1,
  xTickOpacity: 0.21,
  yTickOpacity: 0.1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
  xAxisOpacity: 1,
  yAxisOpacity: 1,

};

optionData.options4 = {
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 900,
  height: 800,
  opacity: 0.75,
  onHover: false,
  radius: 200,
  color: 'blue',
  showLabels: true,
  diameter: 6,
  stack: false,
  // fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  fillColor: 'red',
  strokeColor: 'blue',
  xLabel: 'xLabel',
  yLabel: 'yLabel',
  xLine: true,
  yLine: true,
  xAxisPosition: 0,
  colorScale: 'red',
  overlay: false,
  // colorScheme: d3.schemeCategory10,
};

optionData.options5 = {
  width: 900,
  height: 600,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  color: 'steelblue',
  fillColor: 'steelblue',
  // onHover: true,
  overlay: false,
  diameter: 600,
  opacity: 0.5,
  stack: true,
};

optionData.waterfall = {
  width: 600,
  height: 400,
  margin: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50,
  },
  color: 'steelblue',
  positiveColor: 'green',
  negativeColor: 'red',
  overlay: false,
};

optionData.funnelChart = {
  width: 800,
  height: 400,
  margin: {
    top: 20, right: 20, bottom: 30, left: 100,
  },
  colors: ['steelblue', 'grey'],
  overlay: false,
  onHover: false,
  nodeWidth: 10,
  nodePadding: 1,
  padding: 2,
  strokeColor: '#000000',
  radius: 10,
  yLine: true,
  xLine: true,
  xTickFrequency: 10,
  yTickFrequency: 10,
  xTickLength: 10,
  yTickLength: 10,
  xTickExtension: 1,
  yTickExtension: 1,
  xTickOpacity: 0.21,
  yTickOpacity: 0.1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
  xAxisOpacity: 1,
  yAxisOpacity: 1,
};

optionData.polarChart = {
  width: 600,
  height: 600,
  margin: {
    top: 20, right: 20, bottom: 20, left: 20,
  },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
  innerRadius: 50,
  outerRadius: 250,
  overlay: false,
};

optionData.radarChart = {
  width: 500,
  height: 500,
  margin: {
    top: 50, right: 50, bottom: 50, left: 50,
  },
  colors: ['#1f77b4', '#2ca02c'],
  maxValue: 100, // maybe should be calculated from data
  levels: 5, // maybe should be calculated from data
  overlay: false,
};

optionData.gauge = {
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 300,
  height: 300,
  majorTicks: 5,
  minorTicks: 4,
  startAngle: -Math.PI / 1.25,
  endAngle: Math.PI / 1.25,
  pointerColor: 'red',
  majorTickColor: 'black',
  minorTickColor: 'black',
  interval: 2000,
  pointerWidth: 10,
  overlay: false,
};

optionData.optionsForceDirected = {
  width: 600,
  height: 600,
  //   color: d3.scaleOrdinal(d3.schemeCategory10),
  linkDistance: 50, // TODO look into linkdistance
  chargeStrength: -200, // TODO look into chargeStrength
};

optionData.options1 = {
  childTextSize: 10,
  color: 'red',
  colorScale: 'red',
  diameter: 600,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 600,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  // onHover: true,
  opacity: 1,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: true,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
};

optionData.options13 = {
  childTextSize: 10,
  color: 'blue',
  colorScale: 'red',
  diameter: 600,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 600,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  // onHover: true,
  opacity: 0.75,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: true,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  // xAxisPosition: 200,
  xLabel: 'xLabel',
  xLine: true,
  // yAxisPosition: 100,
  yLabel: 'yLabel',
  yLine: true,
  xTickFrequency: 30,
  yTickFrequency: 30,
  xTickLength: 600,
  yTickLength: 800,
  xTickExtension: 0,
  yTickExtension: 0,
  xTickOpacity: 1,
  yTickOpacity: 0.1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
};

optionData.options14 = {
  childTextSize: 10,
  color: 'green',
  colorScale: 'red',
  diameter: 600,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 800,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  onHover: false,
  opacity: 0.75,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: false,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
};

optionData.options15 = {
  childTextSize: 10,
  color: 'green',
  colorScale: 'red',
  diameter: 400,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 600,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  onHover: false,
  opacity: 1,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  // relativeNodeSize: true,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: false,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xLabel: 'xLabel',
  xLine: false,
  yLine: false,
  yLabel: 'yLabel',
};

optionData.options16 = {
  childTextSize: 10,
  color: 'green',
  colorScale: 'red',
  diameter: 400,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  height: 600,
  hoverColor: 'blue',
  innerRadius: 180,
  interval: 2000,
  levels: 5, // maybe should be calculated from data
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red', // maybe should be d3 color scale
  maxValue: 100, // maybe should be calculated from data
  minColor: 'blue',
  minorTickColor: 'black',
  minorTicks: 4,
  nodeRadius: 15,
  onHover: false,
  opacity: 0.75,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 250,
  relativeNodeSize: false,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: false,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
};

optionData.options17 = {
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 900,
  height: 800,
  opacity: 0.75,
  onHover: false,
  radius: 200,
  color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'], // color scheme for the bars
  showLabels: true,
  diameter: 6,
  stack: false,
  // fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  fillColor: 'red',
  strokeColor: 'blue',
  xLabel: 'xLabel',
  yLabel: 'yLabel',
  colorScale: 'red',
  overlay: false,
  // colorScheme: d3.schemeCategory10,
};

optionData.options18 = {
  margin: {
    top: 20, right: 20, bottom: 30, left: 40,
  },
  width: 1600,
  height: 900,
  radius: 50.5,
  color: d3.scaleOrdinal(d3.schemeCategory10),
  showCategories: true,
  diameter: 100,
  fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  overlay: true,
  opacity: 1,
  onHover: false,
  stack: false,
};
