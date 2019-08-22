<template>
    <div>
        <user-list 
            :list="users"
        ></user-list>
    </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
    components: {
        'user-list': UserList
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