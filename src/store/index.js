export const storage = {
    state: {
      allTodos: [],
      completedTodos: [],
      inCompletedTodos: []
    },
    getters: {
        getAllTodos(state) {
            return state.allTodos;
        },
        getCompletedTodos(state) {
            return state.allTodos.filter(x => x.todo_status === true);
        },
        getIncompleteTodos(state) {
            return state.allTodos.filter(x => x.todo_status === false);
        }
    },
    mutations: {
      addToTodoList(state, payload) {
        state.allTodos.push(payload);
      },
      completeATask(state, payload) {
          state.allTodos[payload].todo_status = true
      },
      removeTask(state, payload) {
          state.allTodos.splice(payload, 1);
      },
      updateTask(state, payload) {
        state.allTodos[payload.id].todo_title = payload.title
        state.allTodos[payload.id].edit = false
      },
      editTask(state, payload) {
          state.allTodos[payload].edit = true;
      },
      clearCompleted(state) {
          for(let i=0; i<state.allTodos.length; i++) {
              if(state.allTodos[i].todo_status === true) {
                  state.allTodos.splice(i, 1);
              }
          }
      }
    }
}

