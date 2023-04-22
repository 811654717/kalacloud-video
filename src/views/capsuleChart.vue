<template>
  <div>
    <dv-capsule-chart :config="config" style="width:100%;height:200px" />
  </div>
</template>
<script>
export default {
  props: {
    colorsChart: {
      type: Array,
      default: ()=> [
        '#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'
      ],
    },
    dataChart: {
      type: Array,
      default: ()=> [
        {
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
        },
        {
          name: '南阳1',
          value: 167
        },
        {
          name: '周口1',
          value: 67
        },
        {
          name: '漯河1',
          value: 123
        },
        {
          name: '郑州1',
          value: 55
        },
        {
          name: '西峡1',
          value: 98
        }
      ],
    }
  },
  data() {
    return {
      config: {
        data: this.dataChart,
        unit: "单位/元",
        colors: this.colorsChart,
        showValue: true,
      },
    }
  }
}
</script>
