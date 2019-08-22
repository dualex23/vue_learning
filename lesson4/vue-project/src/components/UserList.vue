<template>
    <div>
      <h3>User List Component</h3>
        
        <table class="table table_blur">
            <caption>{{ showTitle }}</caption>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
            <tr v-for="(user, index) in list" :key="user.id">
              <td>{{ index + 1 }}</td>
              <td><img :src="user.picture || avatarLink" :alt="fullName(user) || 'Заглушка' " /></td>
              <td>{{ user.firstName | capitalize }}</td>
              <td>{{ user.lastName | capitalize }}</td>
              <td>{{ user.email }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    computed: {
        showTitle(){
            return 'Всего человек: ' + ' ' + this.list.length;
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        fullName(user) {
            return user.firstName + ' ' + user.secondName;
        }
    }
}
</script>

<style>
td img {
    width: 50px;
}
</style>