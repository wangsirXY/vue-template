<template>
  <div>HomePage</div>
</template>

<script lang="ts">
export default {
  props: [],
  data() {
    return {
      name: "HomePage",
    };
  },
  methods: {},
  computed: {},
  watch: {
    name(newVal, oldVal) {
      console.log(oldVal, "-", newVal);
    },
    // 要侦听的属性名: {
    //   immediate: true, // 立即执行
    //   deep: true, // 深度侦听复杂类型内变化
    //   handler(newVal, oldVal) {},
    // },
  },
  components: {},
};
</script>

<style lang="less" scoped></style>