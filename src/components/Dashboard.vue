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
    <List @clickItem="openModal" v-bind:items="store.notes" />
    <dialog :open="edit">
      <NoteForm
        :key="editNote"
        :editNote="editNote"
        @cancel="cancelNote"
        @save="saveNote"
      />
    </dialog>
  </div>
</template>

<script>
import List from './List.vue';
import Button from './Button.vue';
import { useNoteStore } from '../store';
import NoteForm from './NoteForm.vue';
export default {
  name: 'Dashboard',
  components: {
    List,
    Button,
    NoteForm,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      store: useNoteStore(),
      edit: false,
      editNote: null,
    };
  },
  methods: {
    openModal(note) {
      this.edit = true;
      this.editNote = Object.assign({}, note);
    },
    saveNote(note) {
      this.editNote = null;
      if (note.id) {
        this.store.updateNote(note);
      } else {
        this.store.addNote(note);
      }
      this.edit = false;
    },
    cancelNote() {
      this.editNote = null;
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
