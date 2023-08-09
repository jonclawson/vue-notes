<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="item in items"
    >
      <Button @clickButton="() => $emit('clickItem', item)" 
        >{{ item.id }} {{ item.message }}
      </Button>
      <Button
        @clickButton="() => removeNote(item)"
        className="btn-sm btn-danger"
        name="x"
        type="button"
      />
    </li>
  </ul>
</template>

<script>
import { useNoteStore } from '../store';
import Button from './Button.vue';
export default {
  name: 'List',
  components: {
    Button,
  },
  props: {
    items: Object,
  },
  data() {
    return {
      store: useNoteStore(),
    };
  },
  methods: {
    removeNote(note) {
      this.store.removeNote(note);
    },
  },
};
</script>
