<template>
  <div class="module-box">
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height:50px;" />
    </div>
    <div style="flex: 0 1 40%">
      <div class="t-flex">
        <dv-decoration-8 style="height:50px;flex: 0 1 40%" />
        <div style="flex: 0 1 20%;">
          <dv-decoration-11 style="width:100%;height:50px;">数据中心</dv-decoration-11>
        </div>
        <dv-decoration-8
          :reverse="true"
          style="height:50px;flex: 0 1 40%"
        />
      </div>
    </div>
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height:50px;transform: rotateY(180deg)" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>