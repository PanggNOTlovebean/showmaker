<template>
  <div>
    <el-select
      calss="select-bar"
      v-model="value"
      @change="chartChange"
      placeholder="请选择"
    >
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
import { Shape, Util, registShape } from "@antv/g2";
export default {
  name: "WorldCloud",
  data() {
    return {
      chart: null,
      data: [],
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
      console.log("change");
      this.data = res1[this.value];
      this.chart.source(this.data);
      this.chart.render();
    },
    test() {
      var Util = G2.Util;
      var Shape = G2.Shape;
      // 获取文字样式
      function getTextAttrs(cfg) {
        var textAttrs = Util.mix(
          true,
          {},
          {
            fillOpacity: cfg.opacity,
            fontSize: cfg.size,
            rotate: cfg.origin._origin.rotate,
            text: cfg.origin._origin.text,
            textAlign: "center",
            fill: cfg.color,
            textBaseline: "Alphabetic",
          },
          cfg.style
        );
        return textAttrs;
      }
      // 给point注册一个词云的shape
      registShape("point", "cloud", {
        drawShape: function (cfg, container) {
          cfg.points = this.parsePoints(cfg.points);
          var attrs = getTextAttrs(cfg);
          // 给容器添加text类型的shape
          // 坐标仍然是原来的坐标
          // 文字样式为通过getTextAttrs方法获取的样式
          var shape = container.addShape("text", {
            attrs: Util.mix(attrs, {
              x: cfg.points[0].x,
              y: cfg.points[0].y,
            }),
          });
          return shape;
        },
      });

      var chart = new G2.Chart({
        id: "container",
        // canvas的宽高需要和布局宽高一致
        width: 1000,
        height: 500,
        plotCfg: {
          margin: 0,
        },
      });
      chart.source(texts);
      chart.coord().reflect();
      chart
        .point()
        .position("name*value")
        .color("CornflowerBlue")
        .shape("cloud")
        .tooltip("value*category");
      chart.render();
      this.chart = chart;
    },
  },
  mounted() {
    this.data = res1[this.value];
    // this.test();
  },
};
</script>

<style>
.el-input__inner {
  border: 0px !important;
  text-align: center;
}
</style>