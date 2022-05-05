<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>

    <el-container>
      <el-aside>
        <Aside/>
      </el-aside>
      <el-container>
        <el-main>
          <Content/>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Header, Aside,Content,Footer
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {},

};
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  height: 100%;
}
</style>
