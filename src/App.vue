<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>



  .activetodo {
    text-decoration: line-through!important;
  }

.form-custom-design:focus {
  box-shadow: none;
  border-color: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  outline: rgba(0,0,0,0.12) auto 5px ;
}

.form-custom-design {
  height: calc(2.5em + 0.75rem + 2px)!important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 0;
  padding-left: 35px!important;
}

.input-data:after {
  position: absolute;
  content: "\25bc";
  top: 20px;
  right: 0px;
  font-size: 12px;
  left: 10px;
}

  .card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 0;
  }

  .btn-style {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    position: absolute;
    width: 28px;
  }

  .btn-style::after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
  }

  .btn-style-status-complete {
    padding: .15rem .40rem!important;
  }

  .border-li:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  li {
    list-style-type: none;
  }

button.btn-style:focus {
  outline: 0!important;
}

.cursor-pointer {
  cursor: pointer;
}

.btn-style-status-complete .fa-check {
  color: green;
}

.activebtn {
  border: 1px solid !important;
  padding: 2px 5px!important;
}
</style>
