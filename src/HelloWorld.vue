<template>
  <div class="hello-world">{{name}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['api'],
  mounted() {
    console.log('HelloWorld mounted');
    console.log(this.$props.api);
  },
  data() {
    return {
      name: 'HelloWorld',
    };
  },
};
</script>

<style>
.hello-world {
  color: red;
}
</style>