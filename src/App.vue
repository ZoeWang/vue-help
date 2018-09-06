<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import vHead from '@/components/common/header'
export default {
  name: 'App',
  components: {
    vHead
  }
}
</script>

<style lang="less">
#app {
  font-family: PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
*,body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,table,th,td,form,fieldset,legend,input,textarea,button,select,img {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
}
body {
    color: #333;
    -webkit-text-size-adjust: none;
    background-color: #f7f7f7;;
}

img,fieldset {
    border: 0;
}
ul,ol {
    list-style: none;
}
h1,h2,h3,h4,h5,h6{
    font-weight:normal;
}
em,address,i {
    font-style: normal;
}
a {
    color: #333;
    text-decoration: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}


.clearfix() {
  &:before,
  &:after {
    content: " "; 
    display: table; 
  }
  &:after {
    clear: both;
  }
}
.clearfix{
  .clearfix() 
}

@media screen and (min-width: 768px) {
    body,input,textarea,select,button,table {
        font-size: 14px;
        line-height: 1.5em;
    }
}
</style>
