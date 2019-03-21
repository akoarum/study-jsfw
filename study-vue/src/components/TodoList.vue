<template>
  <ul class="todos">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :todo="todo.todo"
      :completed="todo.completed"
      @update="toggleTodo"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  components: { TodoItem },
  props: {
    todos: { type: Array, required: true },
    toggleTodo: { type: Function, required: true }
  }
}
</script>

<style lang="scss" scoped>
.todos {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>