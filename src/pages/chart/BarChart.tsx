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
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)'
    }
  }]
};

export default function BarChart() {
  return (
    <ReactEcharts
      option={option}
      style={{ height: '500px', width: '100%' }}
      className={'react_for_echarts'}
    />
  );
}

