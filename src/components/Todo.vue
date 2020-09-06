<template>
  <div class="container">
    <div class="container">
        <div class="row justify-content-md-center">
            <h1 class="text-center w-100 mt-5 mb-5 display-1" style="color: #EDDFE1; font-weight: 600;">todos</h1>
            
            <div class="col-md-6 col-md-offset-3 px-0 mx-0 align-baseline align-bottom h-100">
                <form class="w-100 align-baseline align-bottom" @submit.prevent="createTodo">
                    <div class="form-group w-100" :class="{ 'input-data': allTodo.length>0}">
                        <input 
                          type="text" 
                          class="form-control w-100 form-custom-design" 
                          placeholder="What needs to be done? " 
                          v-model="todoList.todo_title"
                        />
                    </div>
                </form>
            </div>

        </div>
    
        <div class="row justify-content-md-center mb-5" v-if="allTodo.length>0">
            <div class="col-md-6 card" style="margin-top: -15px;">
            <ul class="mt-3 pl-1">
                
                <div v-if="activeTodo===true">
                <li v-for="(todo,index) in activeList" :key="todo.index"  class="pt-3 pb-3 border-li w-100" @mouseover="showByIndex = index" @mouseout="showByIndex = null">
                    
                    <div class="row" v-if="todo.edit===false">
                        <div class="col-md-1">

                            <div v-if="todo.todo_status===true">
                                <button
                                    class="btn-style btn-style-status-complete"   
                                >
                                <i class="fas fa-check"></i>
                                </button>
                            </div>
                            <button 
                              class="btn-style" 
                              v-if="todo.todo_status===false" 
                              @click="complete(index, todo.todo_status)"
                            ></button>
                        </div>
                        <div class="col-md-10">
                            <span @click="Edit(index, todo.todo_title)" v-if="todo.edit===false" :class="{ 'activetodo' : todo.todo_status === true }">
                                {{ todo.todo_title }}
                            </span> 
                        </div>

                        <div class="col-md-1">
                            <span 
                              @click="Delete(index)" 
                              style="font-size: 15px!important; color: red; font-weight: 700;" 
                              v-show="showByIndex === index"
                              class="cursor-pointer"
                            >x
                            </span>
                        </div>
                    </div>    
                    
                    <form class="w-100" v-if="todo.edit===true" @submit="updateTodo">
                        <input type="text" class="form-control w-100" v-model="editedTodo[index]">
                    </form>
                                  
                </li>
                </div>

                <div v-if="completedTodo===true">
                  <li v-for="(todo,index) in completed" :key="todo.index" class="pt-3 pb-3 border-li w-100" @mouseover="showByIndex = index" @mouseout="showByIndex = null">
                            
                      <div class="row" v-if="todo.edit===false">
                          <div class="col-md-1">

                              <!-- <input v-if="todo.todo_status===true" type="checkbox" class="form-check-input btn-style btn-style-status-complete" value="true"> -->
                            <div v-if="todo.todo_status===true">
                                <button
                                    class="btn-style btn-style-status-complete"   
                                >
                                <i class="fas fa-check"></i>
                                </button>
                            </div>

                              <button 
                                class="btn-style" 
                                v-if="todo.todo_status===false"
                                @click="complete(index, todo.todo_status)"
                              >
                              </button>
                          </div>
                          <div class="col-md-10">
                              <span @click="Edit(index, todo.todo_title)" v-if="todo.edit==0" :class="{ 'activetodo' : todo.todo_status == 1 }">
                                  {{ todo.todo_title }}
                              </span> 
                          </div>

                          <div class="col-md-1">
                              <span 
                                @click="Delete(index)" 
                                style="font-size: 15px!important; color: red; font-weight: 700;" 
                                v-show="showByIndex === index"
                                class="cursor-pointer"
                              >
                              x
                              </span>
                          </div>
                      </div>    
                      
                      <form class="w-100" v-if="todo.edit===true" @submit="updateTodo">
                          <input type="text" class="form-control w-100" v-model="editedTodo[index]">
                      </form>

                  </li>
                </div>

                <div v-if="activeTodo===false && completedTodo===false">
                  <li v-for="(todo,index) in allTodo" :key="todo.index"  class="pt-3 pb-3 border-li w-100" @mouseover="showByIndex = index" @mouseout="showByIndex = null">
                      
                      <div class="row" v-if="todo.edit===false">
                          <div class="col-md-1">
                              <!-- <input v-if="todo.todo_status===true" type="checkbox" class="form-check-input btn-style btn-style-status-complete" value="true"> -->
                                <div v-if="todo.todo_status===true">
                                    <button
                                        class="btn-style btn-style-status-complete"   
                                    >
                                    <i class="fas fa-check"></i>
                                    </button>
                                </div>

                              <button 
                                class="btn-style" 
                                v-if="todo.todo_status===false" 
                                @click="complete(index, todo.todo_status)"
                              >
                              </button>
                          </div>
                          <div class="col-md-10">
                              <span @click="Edit(index, todo.todo_title)" :class="{ 'activetodo' : todo.todo_status === true }">
                                  {{ todo.todo_title }}
                              </span> 
                          </div>

                          <div class="col-md-1">
                              <span @click="Delete(index)" class="cursor-pointer" style="font-size: 15px!important; color: red; font-weight: 700;" v-show="showByIndex === index">x</span>
                          </div> 
                      </div>   
                      
                      <form class="w-100" v-if="todo.edit===true" @submit.prevent="updateTodo(index)">
                          <input type="text" class="form-control w-100" v-model="editedTodo[index]">
                      </form>
                            
                  </li>
                </div>
                
            </ul>
            

            <hr class="w-100">
            <div class="d-flex justify-content-around w-100">
                <div>
                    <p class="mt-1">{{ itemnumber }} items left</p>
                </div>
                <div>
                    <button class="btn-sm btn btn-default d-inline-block shadow-none" :class="{ 'activebtn': activeall}" @click="all">All</button>
                </div>
                <div>
                    <button class="btn-sm btn btn-default d-inline-block shadow-none" :class="{ 'activebtn': activeactive}" @click="toActiveTodo">Active</button>
                </div>
                <div>
                    <button class="btn-sm btn btn-default d-inline-block shadow-none" :class="{ 'activebtn': activecomplete}" @click="toCompletedTodo">Completed</button>
                </div>
                <div v-if="completedTodo===true">
                    <button class="btn-sm btn btn-default d-inline-block shadow-none" @click="clear">Clear All</button>
                </div>
            </div>
            <hr class="w-100">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
          todoList: {
              todo_title: '', 
              todo_status: false, 
              edit: false 
          },
          todoEdit: '',
          editedTodo: [],
          idchange: null,
          checkedTodo: null,
          completedTodo: false,
          activeTodo: false,
          totalTodos: 0,
          showByIndex: null,
          itemnumber: 0,
          activeall: true,
          activeactive: false,
          activecomplete: false
      }
    },
    methods: {
        createTodo() {
          this.$store.commit('addToTodoList', this.todoList);

          this.todoList = {
            todo_title: '', 
            todo_status: false, 
            edit: false 
          };

          this.itemnumber = this.allTodo.length
        },

        Delete(index) {
            this.$store.commit('removeTask', index);
            this.itemnumber = this.allTodo.length;
        },

        Edit(id, title) {
          this.$store.commit('editTask', id);
          this.editedTodo[id] = title;
        },

        updateTodo(index) 
        {
          let payload = {
            id: index,
            title: this.editedTodo[index]
          }
          this.$store.commit('updateTask', payload);
        },
        
        complete(id, status) {
          this.$store.commit('completeATask', id);
          this.$store.getters.allTodos;
          console.log(status);
        },
        
        getCompletedTask() {
           this.$store.getters.getCompletedTodos;
        },
        
        toActiveTodo() {
            this.activeTodo = true
            this.completedTodo = false
            this.itemnumber = this.activeList.length

            this.activeall = false;
            this.activeactive = true;
            this.activecomplete = false;
        },
        
        toCompletedTodo() {
            const self = this;
            self.activeTodo = false;
            self.completedTodo = true;
            self.itemnumber = self.completed.length;

            this.activeall = false;
            this.activeactive = false;
            this.activecomplete = true;
        },
        
        all() {
            const self = this
            self.activeTodo = false
            self.completedTodo = false
            self.itemnumber = self.allTodo.length
            this.activeall = true;
            this.activeactive = false;
            this.activecomplete = false;
        },
        
        clear() {
          this.$store.commit('clearCompleted');
          this.itemnumber = this.completed.length;
        },
        
        mouseOver() {
            this.mouseOverTik = !this.mouseOverTik
        }
    },

    mounted() {
        this.itemnumber = this.allTodo.length;
    },
    computed: {
        allTodo() {
          return this.$store.getters.getAllTodos
        },
        completed() {
          return this.$store.getters.getCompletedTodos
        },
        activeList() {
          return this.$store.getters.getIncompleteTodos
        }
    }
}
</script>
