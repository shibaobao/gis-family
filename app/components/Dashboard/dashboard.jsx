require('../../map/china.js')
import React from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import StaticInfo from '../constant/StaticInfo.jsx';

echarts.registerTheme('dark');

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    this.geoCoordMap = StaticInfo.geoCoordMap;
    this.HFData =  StaticInfo.HFData;
  }

  convertData (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = this.geoCoordMap[dataItem[0].name];
      var toCoord = this.geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord]
        });
      }
    }
    return res;
  }

  getOtion(){
    var series = [], self = this;
    series.push({
      name: ' Top10',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: '#46bee9',
          width: 0,
          curveness: 0.2
        }
      },
      data: this.convertData(this.HFData)
    },
    {
      name: ' Top10',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: this.planePath,
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: '#46bee9',
          width: 1,
          opacity: 0.4,
          curveness: 0.2
        }
      },
      data: this.convertData(this.HFData)
    },
    {
      name: ' Top10',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
            color: '#a6c84c',
        }
      },
      data: this.HFData.map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: self.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    }
  );

  var option = {
    backgroundColor: '#404a59',
    title : {
      text: '看看大家都在哪呢？',
      left: 'center',
      top: '35',
      textStyle : {
        color: '#fff',
        fontSize: "26"
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: function (params) {
        console.log(params)
        var fromName = params.data.fromName, toName = params.data.toName;
        return "从" + fromName + "到" + toName + ", 需要飞行2个小时。" + "</br>";
      }
    },
    geo: {
      map: 'china',
      zoom: 2,
      center: [117.29,32.0581],
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#404a59'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: series
    };
    return option;
  }

render() {
  return (
    <div>
      <ReactEcharts
        option={this.getOtion()}
        style={{height: '800px'}}
        />
    </div>
  );
  }
}
