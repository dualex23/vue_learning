<template>
  <div>
        <h3>User Form Component</h3>

        <form>
            
            <div class="input-group mb-3" v-for="(key, value) in list[0]" :key="key.id">
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
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            
        }
    }
}
</script>

<style>

</style>