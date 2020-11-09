<template>
  <div>
    <el-select calss='select-bar' v-model="value" @change="chartChange" placeholder="请选择">
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>
    <div id="container" />
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      chart: null,
      data: [
        
      ],
      options: [
        {
          label: "主要指数",
          options: [
            {
              value: "上证指数",
              label: "上证指数",
            },
            {
              value: "深证成指",
              label: "深证成指",
            },
            {
              value: "中小板指",
              label: "中小板指",
            },
            {
              value: "创业板指",
              label: "创业板指",
            },
          ],
        },
        {
          label: "热门概念",
          options: [
            {
              value: "芯片",
              label: "芯片",
            },
            {
              value: "白酒",
              label: "白酒",
            },

            {
              value: "区块链",
              label: "区块链",
            },
            {
              value: "医药制造",
              label: "医药制造",
            },
            {
              value: "数字货币",
              label: "数字货币",
            },
            {
              value: "蚂蚁金服",
              label: "蚂蚁金服",
            },
            {
              value: "工业互联网",
              label: "工业互联网",
            },
          ],
        },
      ],
      value: "上证指数",
    };
  },

  methods: {
    chartChange() {
      this.data = res1[this.value];
      this.chart.source(this.data)
      this.chart.render()
    },
    test() {
      const chart = new G2.Chart({
        container: "container",
        autoFit: true,
        width:1000
      });
      chart.source(this.data);

      chart.scale("value", {
        nice: true,
      });
      chart.tooltip({
        showMarkers: false,
        shared: true,
      });
      chart
        .interval()
        .position("name*value")
        .color("type")
        .adjust([
          {
            type: "dodge",
            marginRatio: 0,
          },
        ]);
      this.chart = chart;
      this.chart.render();
    },
  },
  mounted() {
    this.data=res1[this.value]
    this.test();
  },
};
</script>

<style>
.el-input__inner {
    border: 0px !important;
    text-align:center;
}
</style>