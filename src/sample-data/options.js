export const optionData = {};

optionData.options0 = {
  barWidth: 10,
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
  levels: 5,
  linkColor: 'black',
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  maxColor: 'red',
  maxValue: 100,
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
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  yLabel: 'yLabel',
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
};
optionData.options1 = {
  barWidth: -30,
  childTextSize: 10,
  color: 'red',
  colorScale: 'red',
  diameter: 600,
  endAngle: Math.PI / 1.25,
  fillColor: 'blue',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  gradient: true,
  gradientAxis: 'x',
  gradientColor: ['red', 'yellow'],
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
  xLabelColor: 'red',
  xLabelFontSize: 10,
  xLabelFontFamily: 'sans-serif',
  xLabelFontWeight: 'normal',
  xLabelOffsetX: 10,
  xLabelOffsetY: 10,
  xLabelRotation: 0,
  xLine: true,
  xTickExtension: 1,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 0.21,
  xAxisColor: 'red',
  xAxisPosition: -1,
  yLabel: 'yLabel',
  yLabelColor: 'blue',
  yLabelFontSize: 10,
  yLabelFontFamily: 'sans-serif',
  yLabelFontWeight: 'normal',
  yLabelOffsetX: 10,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: true,
  yTickExtension: 1,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.1,
  yAxisColor: 'blue',
  yAxisPosition: 880,
};

optionData.options2 = {
  barWidth: 10,
  childTextSize: 5,
  color: 'red',
  diameter: 400,
  fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  fontColor: 'blue',
  height: 600,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  opacity: 0.61,
  overlay: true,
  parentTextSize: 10,
  radius: 10.5,
  showCategories: true,
  sortBy: 'y asc',
  stack: false,
  textAnchor: 'middle',
  width: 800,
  xLine: false,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: 10,
  xLabelRotation: 90,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLabel: 'yLabel',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: false,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
};

optionData.options5 = {
  barWidth: 10,
  color: 'steelblue',
  diameter: 600,
  fillColor: 'steelblue',
  height: 600,
  margin: {
    bottom: 30,
    left: 40,
    right: 20,
    top: 20,
  },
  opacity: 0.5,
  overlay: false,
  stack: true,
  width: 900,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
};

optionData.options3 = {
  childTextSize: 10,
  color: 'red',
  colorScale: 'red',
  diameter: 600,
  duration: 500,
  endAngle: Math.PI / 1.25,
  fillColor: 'red',
  fontFamily: 'sans-seriff',
  fontWeight: 'normal',
  gradient: false,
  gradientAxis: 'x',
  gradientColor: ['red', 'yellow'],
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
  onHover: true,
  opacity: 0.75,
  outerRadius: 200,
  overlay: true,
  padding: 0.1,
  parentTextSize: 12,
  pointerColor: 'red',
  pointerWidth: 10,
  radius: 10,
  relativeNode: true,
  showCategories: true,
  showLabels: true,
  sortBy: 'value',
  stack: false,
  startAngle: -Math.PI / 1.25,
  strokeColor: 'blue',
  textAnchor: 'middle',
  textColor: 'white',
  width: 900,
  xAxisPosition: -1,
  xLabel: 'xLabel',
  xLine: true,
  yAxisPosition: 880,
  barWidth: -30,
  yLabel: 'yLabel',
  yLine: false,
  xTickFrequency: 30,
  yTickFrequency: 30,
  xTickLength: 600,
  yTickLength: 900,
  xTickExtension: -580,
  yTickExtension: 880,
  xTickOpacity: 1,
  yTickOpacity: 1,
  xAxisColor: 'red',
  yAxisColor: 'blue',
  yLabelOffsetX: 0,
  yLabelOffsetY: 0,
  xLabelOffsetX: 0,
  xLabelOffsetY: 0,
  xLabelColor: 'red',
  yLabelColor: 'blue',
  xLabelFontSize: 10,
  yLabelFontSize: 10,
  xLabelFontWeight: 'normal',
  yLabelFontWeight: 'normal',
  xLabelFontFamily: 'sans-serif',
  yLabelFontFamily: 'sans-serif',
  xLabelRotation: 0,
  yLabelRotation: 0,
};

optionData.options4 = {
  barWidth: 10,
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
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  yLabel: 'yLabel',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
};

optionData.options5 = {
  barWidth: 10,
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
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  yLine: false,
  yLabel: 'yLabel',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
};
optionData.options6 = {
  barWidth: 10,
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
  onHover: true,
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
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  yLabel: 'yLabel',
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
};

optionData.options7 = {
  barWidth: 10,
  color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'], // color scheme for the bars
  colorScale: 'red',
  diameter: 6,
  fillColor: 'red',
  height: 800,
  margin: {
    bottom: 30, left: 40, right: 20, top: 20,
  },
  onHover: false,
  opacity: 0.75,
  overlay: false,
  radius: 200,
  showLabels: true,
  stack: false,
  strokeColor: 'blue',
  width: 900,
  xLabel: 'xLabel',
  xFontColor: 'red',
  xFontFamily: 'gothic',
  xFontOpacity: 1,
  xFontSize: 10,
  xFontStyle: 'italic',
  xFontWeight: 'bold',
  xLabelFontColor: 'blue',
  xLabelFontFamily: 'sans-serif',
  xLabelFontWeight: 'bold',
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xLine: true,
  xAxisColor: 'red',
  xAxisOpacity: 1,
  xAxisPosition: -1,
  xTextAnchor: 'start',
  xTickExtension: 1,
  xTickFrequency: 10,
  xTickLength: 10,
  yFontColor: 'blue',
  yFontFamily: 'sans-serif',
  yFontOpacity: 1,
  yFontSize: 10,
  yFontStyle: 'italic',
  yFontWeight: 'bold',
  yLabel: 'yLabel',
  yLabelFontColor: 'red',
  yLabelFontFamily: 'gothic',
  yLabelFontWeight: 'bold',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: true,
  yAxisColor: 'purple',
  yAxisOpacity: 1,
  yAxisPosition: 880,
  yTickExtension: 1,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 1,
};

optionData.options8 = {
  barWidth: 10,
  color: d3.scaleOrdinal(d3.schemeCategory10),
  diameter: 100,
  fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  height: 900,
  margin: {
    bottom: 30,
    left: 40,
    right: 20,
    top: 20,
  },
  onHover: false,
  opacity: 1,
  overlay: true,
  radius: 50.5,
  showCategories: true,
  stack: false,
  textAnchor: 'middle',
  textColor: 'white',
  width: 1600,
  xLabel: 'xLabel',
  xFontColor: 'red',
  xFontFamily: 'gothic',
  xFontOpacity: 1,
  xFontSize: 10,
  xFontStyle: 'italic',
  xFontWeight: 'bold',
  xLabelFontColor: 'blue',
  xLabelFontFamily: 'sans-serif',
  xLabelFontWeight: 'bold',
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xLine: true,
  xAxisColor: 'red',
  xAxisOpacity: 1,
  xAxisPosition: -1,
  xTextAnchor: 'start',
  xTickExtension: 1,
  xTickFrequency: 10,
  xTickLength: 10,
  yFontColor: 'blue',
  yFontFamily: 'sans-serif',
  yFontOpacity: 1,
  yFontSize: 10,
  yFontStyle: 'italic',
  yFontWeight: 'bold',
  yLabel: 'yLabel',
  yLabelFontColor: 'red',
  yLabelFontFamily: 'gothic',
  yLabelFontWeight: 'bold',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: true,
  yAxisColor: 'purple',
  yAxisOpacity: 1,
  yAxisPosition: 880,
  yTickExtension: 1,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 1,
};

optionData.options9 = {
  barWidth: 10,
  color: d3.scaleOrdinal(d3.schemeCategory10),
  diameter: 100,
  fillColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
  height: 900,
  margin: {
    bottom: 30,
    left: 40,
    right: 20,
    top: 20,
  },
  onHover: false,
  opacity: 1,
  overlay: true,
  radius: 50.5,
  showCategories: true,
  stack: false,
  textAnchor: 'middle',
  textColor: 'white',
  width: 1600,
  xLabel: 'xLabel',
  xFontColor: 'red',
  xFontFamily: 'gothic',
  xFontOpacity: 1,
  xFontSize: 10,
  xFontStyle: 'italic',
  xFontWeight: 'bold',
  xLabelFontColor: 'blue',
  xLabelFontFamily: 'sans-serif',
  xLabelFontWeight: 'bold',
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xLine: true,
  xAxisColor: 'red',
  xAxisOpacity: 1,
  xAxisPosition: -1,
  xTextAnchor: 'start',
  xTickExtension: 1,
  xTickFrequency: 10,
  xTickLength: 10,
  yFontColor: 'blue',
  yFontFamily: 'sans-serif',
  yFontOpacity: 1,
  yFontSize: 10,
  yFontStyle: 'italic',
  yFontWeight: 'bold',
  yLabel: 'yLabel',
  yLabelFontColor: 'red',
  yLabelFontFamily: 'gothic',
  yLabelFontWeight: 'bold',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: true,
  yAxisColor: 'purple',
  yAxisOpacity: 1,
  yAxisPosition: 880,
  yTickExtension: 1,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 1,
};
optionData.options10 = {
  barWidth: 10,
  bubble: true,
  bubbleOpacity: 0.7,
  chargeStrength: 0.01,
  fontSize: (d) => Math.sqrt(d.value) * 2,
  height: 2600,
  maxRadius: 100,
  width: 2800,
  xLabel: 'xLabel',
  xFontColor: 'red',
  xFontFamily: 'gothic',
  xFontOpacity: 1,
  xFontSize: 10,
  xFontStyle: 'italic',
  xFontWeight: 'bold',
  xLabelFontColor: 'blue',
  xLabelFontFamily: 'sans-serif',
  xLabelFontWeight: 'bold',
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xLine: true,
  xAxisColor: 'red',
  xAxisOpacity: 1,
  xAxisPosition: -1,
  xTextAnchor: 'start',
  xTickExtension: 1,
  xTickFrequency: 10,
  xTickLength: 10,
  yFontColor: 'blue',
  yFontFamily: 'sans-serif',
  yFontOpacity: 1,
  yFontSize: 10,
  yFontStyle: 'italic',
  yFontWeight: 'bold',
  yLabel: 'yLabel',
  yLabelFontColor: 'red',
  yLabelFontFamily: 'gothic',
  yLabelFontWeight: 'bold',
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yLine: true,
  yAxisColor: 'purple',
  yAxisOpacity: 1,
  yAxisPosition: 880,
  yTickExtension: 1,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 1,
};

optionData.waterfall = {
  barWidth: 10,
  color: 'steelblue',
  height: 400,
  margin: {
    bottom: 30,
    left: 50,
    right: 20,
    top: 20,
  },
  negativeColor: 'red',
  overlay: false,
  positiveColor: 'green',
  width: 600,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xDomain: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  yAxisColor: 'purple',
  yAxisPosition: 0,
  yDomain: [0, 100],
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
};

optionData.funnelChart = {
  barWidth: 10,
  colors: ['steelblue', 'grey'],
  height: 400,
  margin: {
    bottom: 30,
    left: 100,
    right: 20,
    top: 20,
  },
  nodePadding: 1,
  nodeWidth: 10,
  onHover: false,
  overlay: false,
  padding: 2,
  radius: 10,
  strokeColor: '#000000',
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLine: true,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLine: true,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
};

optionData.polarChart = {
  barWidth: 10,
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
  height: 600,
  innerRadius: 50,
  margin: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  },
  outerRadius: 250,
  overlay: false,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  width: 600,
};

optionData.radarChart = {
  barWidth: 10,
  colors: ['#1f77b4', '#2ca02c'],
  height: 500,
  levels: 5, // maybe should be calculated from data
  margin: {
    bottom: 50,
    left: 50,
    right: 50,
    top: 50,
  },
  maxValue: 100, // maybe should be calculated from data
  overlay: false,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  width: 600,
};

optionData.gauge = {
  height: 300,
  interval: 2000,
  majorTickColor: 'black',
  majorTicks: 5,
  margin: {
    bottom: 30,
    left: 40,
    right: 20,
    top: 20,
  },
  minorTickColor: 'black',
  minorTicks: 4,
  overlay: false,
  pointerColor: 'red',
  pointerWidth: 10,
  startAngle: -Math.PI / 1.25,
  endAngle: Math.PI / 1.25,
  width: 300,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  barWidth: 10,
};

optionData.optionsForceDirected = {
  chargeStrength: -200,
  height: 600,
  linkDistance: 50,
  width: 600,
  xTickExtension: 0,
  xTickFrequency: 10,
  xTickLength: 10,
  xTickOpacity: 1,
  xAxisColor: 'red',
  xAxisPosition: -1,
  xLabelOffsetX: 0,
  xLabelOffsetY: -50,
  xLabelRotation: 90,
  yTickExtension: 100,
  yTickFrequency: 10,
  yTickLength: 10,
  yTickOpacity: 0.55,
  yAxisColor: 'blue',
  yAxisPosition: 880,
  yLabelOffsetX: 0,
  yLabelOffsetY: 50,
  yLabelRotation: 0,
  barWidth: 10,
};
