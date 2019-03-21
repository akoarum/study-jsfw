<template>
  <div class="form">
    <input type="text" v-model="value" class="input"  />
    <button type="button" class="btn" @click="onClick">追加</button>
  </div>
</template>

<script>
export default {
  props: {
    addTodo: { type: Function, required: true }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onClick() {
      this.addTodo(this.value)
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 16px 18px 18px;
  background: #f9f9f9;
}
.input {
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 8px 10px 7px;
  width: 100%;
  font-size: 15px;
  outline: none;
  transition: border 0.5s ease;

  &:focus {
    border-color: #006ee8;
  }
}
.btn {
  margin-top: 12px;
  border-radius: 3px;
  border: none;
  padding: 6px 16px;
  background: #006ee8;
  font-size: 14px;
  line-height: 1;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: #1063bf;
  }
}
</style>