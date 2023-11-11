<template>
  <div class="row-service">
    <card v-for="item in data" :name="item.name" :date="item.date" :topic="item.topic" :profile="item.profile"></card>
  </div>
  
</template>

<script>
  import Card from '@/components/my-components/Card.vue'
  export default{
    components:{
      Card
    },
    data(){
      return{
        data: [
          {
            name: 'Rifa Fachri Ramadhan',
            date: '1 November 2023',
            topic: '@/assets/furniture.jpeg',
            profile: '@/assets/profile.png',
          },
        ]
      }
    }
  }
</script>