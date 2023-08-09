<template>
  <button
    @click="$emit('clickButton')"
    v-bind:class="'btn ' + className"
    v-bind:type="type"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    type: String,
    className: String,
  },
};
</script>
