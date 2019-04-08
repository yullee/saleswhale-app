<template>
  <section class="navigation-top">
    <div class="title">
      <!-- current page icon -->
      <custom-icon class="icons" :icon-class="icon" />
      <!-- current page title -->
      <typography xs="md-auto" sm="lg-auto" bold="bold">{{ title }}</typography>
    </div>
    <!-- create new team button -->
    <div class="custom-button">
      <custom-button xs="sm-button" sm="md-button" :click="addTeam">
        <div class="button">
          <custom-icon class="button-icon" icon-class="shape.svg" />
          <typography class="info" xs="smallest-auto" sm="xxs-auto" white="white" bold="bold">
            {{ newTeam }}
          </typography>
        </div>
      </custom-button>
    </div>
    <modal-view v-if="show" @close="show = false">
      <template slot="modal-header" class="modal-header">
        <typography xs="sm-auto" sm="md-auto" bold="bold">Create New Team</typography>
      </template>
      <template slot="modal-text">
        <form method="POST" class="simple-form">
          <div>
            <typography xs="xs-auto" sm="sm-auto" class="input-title">Team name </typography>
            <br><br>
            <input type="text" name="name" id="name" v-model="name"
              autofocus required
            >
            <br><br>
          </div>
          <div>
            <typography xs="xs-auto" sm="sm-auto" class="input-title">Description </typography>
            <br><br>
            <textarea name="desc" id="desc" rows="5" v-model="description" required></textarea>
          </div>
        </form>
      </template>
      <template slot="modal-foot">
        <button type="submit" :disabled="!myInput" :class="[{disabled: !myInput}]"
            @click="save"
          class="btn btn-secondary" data-dismiss="modal">Save</button>
          <button type="button" @click.prevent="close"
          class="btn btn-secondary" data-dismiss="modal">Close</button>
      </template>
    </modal-view>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import customButton from '@/components/UI/Button/Button.vue';
import modalView from '@/components/Modal/ModalView.vue';

export default {
  components: {
    customButton,
    modalView,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      teams(state) {
        return state.teams;
      },
    }),
  },
  methods: {
    ...mapActions({
      setTeams: 'setTeams',
    }),
    status() {
      if (this.name && this.description) this.myInput = true;
      else this.myInput = false;
    },
    addTeam() {
      this.show = true;
    },
    close() {
      this.show = false;
      this.clear();
    },
    save() {
      // save new team data and post it to Firebase
      this.show = false;
      const data = {
        campaigns_count: 0,
        created_at: '9 April 2019',
        description: this.description,
        id: this.teams.length + 1,
        image: 'https://seeklogo.net/wp-content/uploads/2015/09/google-favicon-vector-400x400.png',
        is_archived: false,
        is_favorited: false,
        leads_count: 0,
        name: this.name,
      };
      this.$http.post('https://saleswhale-app.firebaseio.com/teams.json', data).then((res) => {
        if (res.status === 200) this.notified();
      });
      this.clear();
    },
    clear() {
      this.name = '',
      this.description = '';
    },
    notified() {
      this.$notify({
        group: 'foo',
        title: 'Successful',
        text: 'New team is created.',
      });
    },
  },
  data() {
    return {
      newTeam: 'CREATE NEW TEAM',
      show: false,
      error: false,
      myInput: false,
      name: '',
      description: '',
    };
  },
  watch: {
    name: 'status',
    description: 'status',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.navigation-top {
  display: flex;
  flex-direction: row;
  flex-basis: 85px;
  background: $white;
  justify-content: space-between;
  flex-wrap: wrap; // wrap into a next line
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    .icons {
      margin: 0px 10px;
    }
  }
  .custom-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 38px;
    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      .button-icon {
        display: flex;
        align-items: center;
        width: 16px;
        margin: 0px 10px;
      }
      .info {
        margin: 0px 10px;
      }
    }
  }
  .simple-form {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 0.9rem;
  }
  .simple-form input, .simple-form textarea {
    margin: 0 .25rem;
    min-width: 125px;
    border: 1px solid #eee;
    border-left: 3px solid;
    transition: border-color .5s ease-out;
    outline: 0;
    width: 80%;
    font-size: 1.0rem;
  }
  .simple-form input:focus,
  .simple-form input:hover,
  .simple-form textarea:focus,
  .simple-form textarea:hover {
    outline: 0;
  }
  .simple-form input:required {
    border-left-color: $blue;
  }
  .simple-form textarea:required {
    border-left-color: $blue;
  }
  .simple-form input:invalid {
    border-left-color: $error;
  }
  .simple-form textarea:invalid {
    border-left-color: $error;
  }
  .disabled {
    background: $lightgrey !important;
    color: $white !important;
  }
}


// 600px wide or less
@media screen and (max-width: 600px){
  .navigation-top {
    display: flex;
    max-height: 200px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .title {
      margin-left: 0px;
      .icons {
        margin: 0px 10px;
      }
    }
    .custom-button {
      margin-right: 0px;
    }
  }
}
</style>
