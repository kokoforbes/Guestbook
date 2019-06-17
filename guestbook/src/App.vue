<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Guestbook</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact><i class="fas fa-home"></i>Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/records" exact><i class="fas fa-clipboard"></i>Records</router-link>
          </li>
        </ul>
      </div>
    </nav> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  overflow-y: smooth;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
}
.navbar-brand {
    font-family:'Cookie', cursive;
    font-weight: bold;
    font-size:28px;
}

ul li {
  font-size: 18px;
}

.router-link-active{
  color: #00FA9A !important;
}

</style>
