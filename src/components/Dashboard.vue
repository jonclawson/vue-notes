<template>
  <div class="mt-3">
    <h1 class="display-6">
      {{ msg }}
      <Button
        @clickButton="openModal"
        name="+"
        className=" btn-warning btn-lg rounded-pill"
        type="button"
      />
    </h1>
    <List v-bind:items="store.notes" />
    <dialog :open="edit">
      <div>
        <div>
          <label>Take Note:</label>
          <input
            class="form-control"
            type="text"
            name="message"
            v-model="message"
          />
        </div>
        <div class="d-flex justify-content-end">
          <Button
            @clickButton="() => cancelNote(message)"
            className="btn-sm btn-secondary"
            type="button"
            name="Cancel"
          />
          <Button
            @clickButton="() => saveNote(message)"
            className="btn-sm btn-danger"
            type="button"
            name="Save"
          />
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import List from './List.vue';
import Button from './Button.vue';
import { useNoteStore } from '../store';

export default {
  name: 'Dashboard',
  components: {
    List,
    Button,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      store: useNoteStore(),
      edit: false,
      message: '',
    };
  },
  methods: {
    openModal() {
      this.edit = true;
    },
    saveNote(message) {
      const id = this.store.notes[this.store.notes.length - 1]?.id || 1;
      this.store.addNote({ id, message });
      this.message = '';
      this.edit = false;
    },
    cancelNote() {
      this.message = '';
      this.edit = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
dialog[open] {
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: block;
  background-color: transparent;
}
dialog[open] > div {
  padding: 14px;
  position: relative;
  min-width: 300px;
  min-height: 100px;
  display: block;
  background-color: white;
  border-radius: 20px;
  border: 1px solid;
  border-color: lightgrey;
}
</style>
