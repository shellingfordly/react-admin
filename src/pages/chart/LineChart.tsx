import ReactEcharts from 'echarts-for-react';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
};


export default function LineChart() {
  return (
    <ReactEcharts
      option={option}
      style={{ height: '500px', width: '100%' }}
      className={'react_for_echarts'}
    />
  );
}

