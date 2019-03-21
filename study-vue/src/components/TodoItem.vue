<template>
  <li class="todo">
    <div class="id">ID: {{ id }}</div>
    <div class="todo">{{ todo }}</div>
    <button type="button" class="btn" @click="$emit('update', id)">更新</button>
    <i v-if="completed" class="completed">完了</i>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    todo: { type: String, required: true },
    completed: { type: Boolean, required: true }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  padding: 12px 12px 13px;
  list-style-type: none;

  + .todo {
    border-top: 1px solid #ccc;
  }
}
.id {
  font-size: 13px;
  color: #949494;
}
.todo {
  margin-bottom: 8px;
}
.completed {
  position: absolute;
  right: 0;
  top: 13px;
  border-radius: 2px;
  padding: 4px 6px 5px;
  line-height: 1;
  background: #f0f0f0;
  font-style: normal;
  font-size: 12px;
}
.btn {
  border-radius: 2px;
  border: none;
  padding: 4px 8px;
  border: 1px solid #006ee8;
  font-size: 12px;
  line-height: 1;
  color: #006ee8;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>