<template>
  <div>
    <div>
      <label>Take Note:</label>
      <textarea
        class="form-control"
        type="text"
        name="message"
        v-model="note.message"
      />
    </div>
    <div class="d-flex justify-content-end">
      <Button
        @clickButton="$emit('cancel')"
        @click="reset"
        className="btn-sm btn-secondary"
        type="button"
        name="Cancel"
      />
      <Button
        @clickButton="$emit('save', note)"
        @click="reset"
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
    editNote: Object,
  },
  data() {
    return {
      note: this.editNote || { message: '' },
    };
  },
  methods: {
    reset() {
      this.note = { message: '' };
    },
  },
};
</script>
