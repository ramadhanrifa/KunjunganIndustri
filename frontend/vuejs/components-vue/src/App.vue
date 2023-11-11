<template>
  <div class="row-service">
  <card v-for="item in data" :title="item.title" :description="item.description">
    <p>{{ item.date }}</p>
  </card>
    <!-- <card-service title="this a title" description="and this a description"></card-service> -->
  </div>
   <MyBtn id="btn-1" name="btn-1"></MyBtn>
   <!-- <MyBtn id="btn-2" name="btn-2"></MyBtn> -->
   <!-- cuman ganti id sama name doang -->
</template>
<script>
import Card from '@/components/my-components/card.vue'
export default {
  components:{
    Card,
    'card-service': Card
    // ada dua cara yaitu langsung Card dan pake alias seperti 'card-service':Card
  },
  // components merupakan tempat yang akan kita registrasikan variabel dari import
  data(){
    return{
      data: [
        {
        title: 'title 1',
        description: 'description 1',
        date: '31 Oktober',
      },{
        title: 'title 2',
        description: 'description 2',
        date: '1 November',
      },
    
    ]
    }
  }
}
</script>

<style>
  .row-service {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  .btn-service-global {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    background-color: #33ca1f;
    padding:15px 20px;
    border: none;
    border-radius: 5px;
}

</style>
