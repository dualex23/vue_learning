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

// var users = [
//     {
//         id: 0,
//         firstName: "Александр",
//         secondName: "Македонский",
//         middleName: "Цезаревич",
//         avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png"
//     },
//     {
//         id: 1,
//         firstName: "Максим",
//         secondName: "Авросский",
//         middleName: "Наимович",
//         avatar: ""
//     },
//     {
//         id: 2,
//         firstName: "Платон",
//         secondName: "Планетный",
//         middleName: "Меркурович",
//         avatar: "https://s017.radikal.ru/i427/1303/35/85bea17b0018.gif"
//     },
//     {
//         id: 3,
//         firstName: "Карл",
//         secondName: "Фиджеральд",
//         middleName: "Карлович",
//         avatar: ""
//     },
//     {
//         id: 4,
//         firstName: "Морис",
//         secondName: "Бирюза",
//         middleName: "Агапович",
//         avatar: ""
//     }
// ];

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