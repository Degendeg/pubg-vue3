<template>
  <div class="about">
    <a href="mailto:sebbed89@hotmail.com">Mail me</a>
  </div>
  <div class="container"></div>
</template>

<script>
import config from '../../conf/index.js'
import axios from '../helpers/axios'

export default {
  name: 'about',
  components: {},
  data () {
    return {
      numImages: 10
    };
  },
  methods: {
    loadImages () {
      const container = document.querySelector('.container');
      let i = 0;
      while (i < this.numImages) {
        axios._get(config.DOG_URL).then(dogs => {
          if (dogs) {
            const img = document.createElement('img');
            img.src = dogs.data.message
            container.appendChild(img);
          }
        })
        i++;
      }
    },
    loopImages () {
      var images = document.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        if (img.naturalWidth === 0) {
          img.src = '../public/cuteElda.jpg'
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        this.loadImages();
      }
    })
  },
  mounted () {
    setInterval(() => {
      this.loopImages()
    }, 5555);
    setTimeout(() => {
      this.loadImages();
    }, 333);
  }
};
</script>

<style>
.container {
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex;
  width: 200px;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  margin: 5px;
  min-width: 200px;
  height: 200px;
}
@media (min-width: 1024px) {
  .about {
    height: 10vh;
    display: flex;
    align-items: center;
  }
  .container {
    margin-top: 2vh;
    margin-left: 2vh;
    margin-right: auto;
    max-height: 10vh;
  }
}
</style>
