<template>
  <div>
        <h3>User Form Component</h3>

        <form>
            
            <div class="input-group mb-3" v-for="(key, value) in user">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">{{value}}</span>
                </div>
                <input type="text" class="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1" :value="key">
            </div>

        </form>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            user: {
                id: 1,
                firstName: "Александр",
                secondName: "Дудинский",
                middleName: "Александрович",
                avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png" 
            }
        }
    }
}
</script>

<style>

</style>