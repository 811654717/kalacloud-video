<template>
  <div class="module-box">
    <div style="flex: 0 1 20%">
      <dv-border-box-1 style="width:100%;height:200px">
        <dv-capsule-chart
          :config="config"
          style="width:100%;height:200px"
        />
      </dv-border-box-1>
      <dv-border-box-2 style="width:100%;height:200px">dv-border-box-3</dv-border-box-2>
      <dv-border-box-3 style="width:100%;height:200px">
        <dv-water-level-pond
          :config="levelPond"
          style="width:100%;height:200px"
        />
      </dv-border-box-3>
    </div>
    <div style="flex: 0 1 60%">
      <dv-border-box-4 style="width:100%;height:600px">
        <dv-flyline-chart-enhanced
          :config="flylineChart"
          style="width:100%;height:100%;"
        />
      </dv-border-box-4>
    </div>
    <div style="flex: 0 1 20%">
      <dv-border-box-5 style="width:100%;height:200px">
        <capsuleChartVue
          style="width:100%;height:200px"
          :dataChart="dataChart"
          :colorsChart="colorsChart"
        ></capsuleChartVue>
      </dv-border-box-5>
      <dv-border-box-6 style="width:100%;height:400px">
        <dv-scroll-ranking-board
          :config="config"
          style="width:100%;height:400px"
          waitTime='2000'
        />
      </dv-border-box-6>
      <!-- <dv-border-box-7 style="width:100%;height:200px">dv-border-box-3</dv-border-box-7> -->
    </div>
  </div>
</template>

<script>
import capsuleChartVue from './capsuleChart.vue'

export default {
  components: {
    capsuleChartVue,
  },
  data() {
    return {
      dataChart: [
        { name: '标题1', value: 10.2 },
        { name: '标题2', value: 10.2 },
        { name: '标题3', value: 10.2 },
        { name: '标题4', value: 10.2 },
        { name: '标题5', value: 10.2 },
        { name: '标题6', value: 10.2 },
        { name: '标题7', value: 10.2 },
        { name: '标题8', value: 10.2 },
        { name: '标题9', value: 10.2 },
        { name: '标题10', value: 10.2 },
        { name: '标题11', value: 10.2 },
        { name: '标题12', value: 10.2 },
        { name: '标题13', value: 10.2 },
        { name: '标题14', value: 10.2 },
      ],
      colorsChart: [],
      config: {
        data: [{
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 67
        },
        {
          name: '漯河',
          value: 123
        },
        {
          name: '郑州',
          value: 55
        },
        {
          name: '西峡',
          value: 98
        }]
      },
      levelPond: {
        data: [66, 77, 50],
        waveNum: 4,
        colors: ['#0CC6FC', '#4BF11E'],
        waveOpacity: 0.2
      },
      flylineChart: {
        points: [
          {
            name: '郑州',
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },
            icon: {
              // src: '/img/flylineChart/mapCenterPoint.png',
              width: 30,
              height: 30
            },
            text: {
              // show: false,
              color: '#fb7293'
            }
          },
          {
            name: '新乡',
            coordinate: [0.52, 0.23]
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.29]
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35]
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47]
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54],
            halo: {
              show: true,
              color: '#37a2da'
            }
          },
          {
            name: '洛阳',
            coordinate: [0.36, 0.38]
          },
          {
            name: '周口',
            coordinate: [0.62, 0.55],
            halo: {
              show: true,
              color: '#8378ea'
            }
          },
          {
            name: '漯河',
            coordinate: [0.56, 0.56]
          },
          {
            name: '南阳',
            coordinate: [0.37, 0.66],
          },
          {
            name: '信阳',
            coordinate: [0.55, 0.81]
          },
          {
            name: '驻马店',
            coordinate: [0.55, 0.67]
          },
          {
            name: '济源',
            coordinate: [0.37, 0.29]
          },
          {
            name: '三门峡',
            coordinate: [0.20, 0.36]
          },
          {
            name: '商丘',
            coordinate: [0.76, 0.41]
          },
          {
            name: '鹤壁',
            coordinate: [0.59, 0.18]
          },
          {
            name: '濮阳',
            coordinate: [0.68, 0.17]
          },
          {
            name: '安阳',
            coordinate: [0.59, 0.10]
          }
        ],
        lines: [
          {
            source: '新乡',
            target: '郑州'
          },
          {
            source: '焦作',
            target: '郑州'
          },
          {
            source: '开封',
            target: '郑州'
          },
          {
            source: '周口',
            target: '郑州',
            color: '#fb7293',
            width: 2
          },
          {
            source: '南阳',
            target: '平顶山',
          },
          {
            source: '济源',
            target: '郑州'
          },
          {
            source: '三门峡',
            target: '平顶山'
          },
          {
            source: '商丘',
            target: '周口'
          },
          {
            source: '鹤壁',
            target: '郑州'
          },
          {
            source: '濮阳',
            target: '郑州'
          },
          {
            source: '安阳',
            target: '郑州'
          },
          {
            source: '许昌',
            target: '平顶山',
            color: '#37a2da'
          },
          {
            source: '平顶山',
            target: '郑州',
            color: '#fb7293',
            width: 4
          },
          {
            source: '洛阳',
            target: '平顶山',
            color: '#37a2da'
          },
          {
            source: '驻马店',
            target: '平顶山',
            color: '#8378ea'
          },
          {
            source: '信阳',
            target: '平顶山',
            color: '#8378ea'
          },
          {
            source: '漯河',
            target: '平顶山',
            color: '#8378ea'
          }
        ],
        icon: {
          show: true,
          // src: '/img/flylineChart/mapPoint.png'
        },
        text: {
          show: true,
        },
        k: 0.5,
        k: 0.5,
        flylineColor: "#FFF",
        orbitColor: "red",
        // bgImgUrl: '/img/flylineChart/map.jpg',
        // centerPointImg: {
        //   url: '/img/flylineChart/mapCenterPoint.png'
        // },
        // pointsImg: {
        //   url: '/img/flylineChart/mapPoint.png'
        // }
      },
    }
  }
}
</script>

<style>
</style>
