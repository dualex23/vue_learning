<template>
  <div class="add">
    <user-form></user-form>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        'user-form': UserForm
    },
    data: function(){
        return {
            
        }
    }
}
</script>

<style>

</style>
