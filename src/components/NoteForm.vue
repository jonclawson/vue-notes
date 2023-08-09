<template>
  <div>
    <div>
      <label>Take Note:</label>
      <input
        class="form-control"
        type="text"
        name="message"
        v-model="note.message"
      />
    </div>
    <div class="d-flex justify-content-end">
      <Button
        @clickButton="$emit('cancel')"
        className="btn-sm btn-secondary"
        type="button"
        name="Cancel"
      />
      <Button
        @clickButton="$emit('save', note)"
        @click="save"
        className="btn-sm btn-danger"
        type="button"
        name="Save"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    noteId: Number,
  },
  data() {
    return {
      note: { message: '' },
    };
  },
  methods: {
    save() {
      this.note = {message: ''}
    }
  }
};
</script>
