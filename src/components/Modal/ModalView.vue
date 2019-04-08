<template>
  <div class="modal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5><slot name="modal-header"></slot></h5>
        </div>
        <div class="modal-body">
          <slot name="modal-text"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-foot"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  color: #333;
  display: table;
  transition: opacity .3s ease;
  .modal-dialog {
    display: table-cell;
    vertical-align: middle;
    .modal-content {
      width: 400px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: $white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      .modal-header {
        border-bottom: 1px solid $lightgrey;
        .modal-header h5 {
          margin-top: 20px;
          color: $darkgrey;
        }
      }
      .modal-body {
        margin: 20px 0;
        font-size: 0.9rem;
      }
      .modal-footer {
        text-align: center;
        button {
          padding: 5px 15px;
          color: $white;
          background: $blue;
          width: 80px;
          height: 30px;
          border: 0 none;
          cursor: pointer;
          margin: 10px;
        }
        button:focus {
          outline: none;
        }
        button:hover {
          background-color: $blue;
          opacity: 0.8;
          transition: background 0.2s ease;
          color: $white;
        }
      }
    }
  }
}
</style>
