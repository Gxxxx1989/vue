<template>
  <div>
    <el-switch v-model="value">
    </el-switch>
    <el-pagination
        :hide-on-single-page="value"
        :total="5"
        layout="prev, pager, next">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      value: false
    }
  }
}
</script>

<style scoped>

</style>
