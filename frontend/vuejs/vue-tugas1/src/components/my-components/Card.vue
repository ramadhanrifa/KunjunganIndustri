<template>
  <div class="card-service">
    <img :src="topic" alt="furniture" class="item">
    <div class="main">
      <h4>Shift the overall look and feel by adding these wonderful touches to furniture in your home.</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem culpa deleniti autem rerum quaerat sint. Reiciendis quia illo consectetur, corrupti facere dolor id vel quaerat.</p>
      <div class="profil">
        <img :src="profile" alt="akun" class="akun">
        <div class="second">
          <strong>{{ name }}</strong>
          <p>{{ date }}</p>
        </div>
        <img src="@/assets/redo.png" alt="redo" class="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'date', 'topic', 'profile'] // Use 'topic' and 'profile' as props
}
</script>



<style scoped>
    .card-service{
        display: flex;
        text-align: start;
        min-height: 210px;
        padding: 30px 20px 20px 30px;
        box-shadow: 15px 15px 5px 15px rgba(0, 0, 0, 0.05);
        background: white;
        transition: all 0.5s ease;
        margin: 10px 10px;
        width: 40rem;
    }
    .item{
        height: 200px;
        width: 200px;
    }
    .main{
        margin-left: 30px;
    }
    .card-service main h4{
    font-size: 18px;
    line-height: 30px;
    color: #343b4e;
  }
  .card-service main p{
    font-weight: 400;
    color: #827f8d;
    margin: 0 0 10px 0;
  }
  .card-service p{
    font-weight: 400;
    color: #827f8d;
    margin: 0 0 10px 0;
  }
  .profil{
    margin-top: 20px;
    display: flex;
  }
  .second{
    margin-left: 10px;
  }
  .logo{
    margin-left: auto;
    border: #343b4e solid 1px;
    background-color: #827f8d;
    border-radius: 100%;
    width: 25px;
    height: 25px;
  }
  .akun{
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

</style>