<template>
  <div class="module-box">
    <div style="flex: 0 1 20%">
      <dv-border-box-8 style="width:100%;height:200px">
        <dv-digital-flop
          :config="digitalFlop"
          style="width:200px;height:50px;"
        />
        <button @click="ceshi">测试</button>
      </dv-border-box-8>
    </div>
    <div style="flex: 0 1 60%">
      <dv-border-box-9 style="width:100%;height:200px">
        <lineEchartVue></lineEchartVue>
      </dv-border-box-9>
    </div>
    <div style="flex: 0 1 20%">
      <dv-border-box-10 style="width:100%;height:200px">dv-border-box-3</dv-border-box-10>
    </div>
  </div>
</template>

<script>
import lineEchartVue from './lineEchart.vue';
export default {
  components: {
    lineEchartVue,
  },
  data() {
    return {
      digitalFlop: {
        number: [100],
        toFixed: 2,
        content: '{nt}个'
      },
    }
  },
  methods: {
    ceshi() {
      console.log(this.digitalFlop.number[0]);
      if (this.digitalFlop.number[0] === 100) {
        this.digitalFlop = {
          number: [999],
          toFixed: 2,
          content: '{nt}个'
        };
      } else {
        this.digitalFlop = {
          number: [100],
          toFixed: 2,
          content: '{nt}个'
        };
      }
    },
  },
}
</script>

<style>
</style>