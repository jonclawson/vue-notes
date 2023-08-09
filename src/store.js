import { defineStore } from 'pinia';
import { IdbService } from './IdbService';
const schema = {
  stores: [
    {
      name: 'notes',
      keyPath: 'id',
      indexes: [{ key: 'message', name: 'message', unique: false }],
    },
  ],
};
const db = new IdbService(
  'notetaker',
  schema,
  [{ id: 1, message: 'Hello' }],
  1
);

export const useNoteStore = defineStore('notes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    getNotes() {
      db.getAll('notes').subscribe((notes) => {
        this.notes = notes;
      });
    },
    addNote(payload) {
      if (!payload.id) {
        payload.id = (this.notes[this.notes.length - 1]?.id || 0) + 1;
      }
      db.add([payload], 'notes').subscribe((r) => {
        this.notes.push(payload);
      });
    },
    updateNote(payload) {
      const i = this.notes.findIndex((n) => n.id == payload.id);

      db.put(payload, 'notes').subscribe((r) =>
        this.notes.splice(i, 1, payload)
      );
    },
    removeNote(payload) {
      console.log(this.notes);
      const i = this.notes.findIndex((n) => n.id == payload.id);

      db.delete(payload.id, 'notes').subscribe((r) => this.notes.splice(i, 1));
    },
  },
});
