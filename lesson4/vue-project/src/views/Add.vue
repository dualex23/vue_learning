<template>
  <div class="add">
    <user-form
      :list="users"
      ></user-form>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        'user-form': UserForm
    },
    data: function(){
        return {
            users: []
        }
    },
    mounted() {
        console.log('Данные подгружены');
        this.loadData()
    },
    methods: {
        loadData: function(){
            axios.get('http://localhost:3000/users')
                .then(response => response.data)
                .then(response => {
                    console.log(response)
                    this.users = response
                    })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style>

</style>
