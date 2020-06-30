<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h2>{{ item.name }}</h2>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>{{ item.version }}</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              Ещё какая-то важная информация о пакете
            </slot>
          </div>
          <button class="btn-outline danger" @click="$emit('close')">
            <i class="fas fa-times-circle">Close</i
            ><span>Big red button =)</span>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["item"],
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h2 {
  margin-top: 0;
  color: #42b983;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  animation: 3s slidein;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* Button */
.btn-outline {
  font-weight: bold;
  background-color: #ffffff;
  border-style: solid;
  border-width: 3px;
  padding: 0;
  outline: 0;
  display: inline-flex;
  overflow: hidden;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.btn-outline i,
.btn-outline span {
  width: 100%;
  display: block;
  padding: 0.7rem;
  margin: 0;
  box-sizing: border-box;
  flex-shrink: 0;
}
.btn-outline i {
  margin-left: -100%;
  transition: margin-left 300ms ease-in-out;
}
.btn-outline:hover {
  color: #ffffff;
  background-color: #404040;
}
.btn-outline:hover i {
  margin-left: 0;
}
.btn-outline.danger {
  color: #ff2323;
  border-color: #ff2323;
}
.btn-outline.danger:hover {
  color: #ffffff;
  background-color: #ff2323;
}
.btn-outline.danger:focus {
  box-shadow: 0 0 0 0.3rem rgba(255, 35, 35, 0.7);
}
</style>
