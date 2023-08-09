import { defineStore } from 'pinia';

export const useNoteStore = defineStore('notes', {
  state: () => {
    return {
      notes: [{ id: 1, message: 'Hello' }],
    };
  },
  actions: {
    addNote(payload) {
      if (!payload.id) {
        payload.id = (this.notes[this.notes.length - 1]?.id || 0) + 1;
      }
      this.notes.push(payload);
    },
    updateNote(payload) {
      const i = this.notes.findIndex((n) => n.id == payload.id);
      this.notes.splice(i, 1, payload);
    },
    removeNote(payload) {
      console.log(this.notes);
      const i = this.notes.findIndex((n) => n.id == payload.id);
      this.notes.splice(i, 1);
    },
  },
});
