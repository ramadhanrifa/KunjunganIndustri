
import Service from '../components/Beranda/Service.vue';

<template>
    <div class="container">
        <Beranda :data="DataHome"></Beranda>
        <Service :data="DataService"></Service>
        <Portofolio :data="DataPortofolio"></Portofolio>
        <Blog :data="DataBlog"></Blog>
    </div>
</template>

<script>
import Beranda from '@/components/Beranda/Beranda.vue';
import Service from '@/components/Beranda/Service.vue';
import Portofolio from '@/components/Beranda/Portofolio.vue';
import Blog from '@/components/Beranda/Blog.vue';

import {Get} from '@/Api/index.js';

export default{
  components:{
    Beranda,
    Service,
    Portofolio,
    Blog
  },
  data() {
    return {
        DataHome: [],
        DataService:[],
        DataPortofolio:[],
        DataBlog: [],
    }
  },
  async created(){
    // api untuk home
    const response = await Get('http://localhost:9000/api/home');
    this.DataHome = response.data;
    // console.log(this.DataHome)
    // api untuk service
    const responseService = await Get('http://localhost:9000/api/services');
    this.DataService = responseService.data.data;
    // api untuk portofolio
    const responsePortofolio = await Get('http://localhost:9000/api/portfolio');
    this.DataPortofolio = responsePortofolio.data.data;
    // api untuk blog
    const responseBlog = await Get('http://localhost:9000/api/blog');
    this.DataBlog = responseBlog.data.data
  },
}
</script>