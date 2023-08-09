<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="item in items"
    >
      <Button @clickButton="() => $emit('clickItem', item)"
        >{{ item.id }} {{ item.message }}
      </Button>

      <span>
        <Button
          @clickButton="() => $emit('clickItem', item)"
          className="btn-sm btn-warning"
        >
          <Pencil />
        </Button>
        <Button
          @clickButton="() => removeNote(item)"
          className="btn-sm btn-danger"
          type="button"
        >
          X</Button
        >
      </span>
    </li>
  </ul>
</template>

<script>
import { useNoteStore } from '../store';
import Button from './Button.vue';
import Pencil from './Pencil.vue';
export default {
  name: 'List',
  components: {
    Button,
    Pencil,
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
