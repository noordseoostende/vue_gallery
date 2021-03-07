<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar>
        <q-btn
          to="/camera"
          
          icon="eva-video-outline"
          size="18px"
          flat
          round
          dense
        /><!-- class="large-screen-only" -->

        <q-toolbar-title 
          class="text-grand-hotel"
        >
          Gallery
        </q-toolbar-title>
          <q-btn
          to="/"
          
          icon="eva-home-outline"
          size="18px"
          flat
          round
          dense
        /><!-- class="large-screen-only" -->
      </q-toolbar>
    </q-header>

    <q-footer
      class="bg-white "
      bordered
    >
    <!-- small-screen-only -->
        
          <q-tabs
            class="text-grey-10"
            active-color="primary"
            indicator-color="transparent"
          >
        <q-route-tab
          to="/"
          icon="eva-home-outline"
        />
        <q-route-tab
          to="/camera"
          icon="eva-video-outline"
        />
      </q-tabs>
        
      </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>




export default {
  name: 'MainLayout',
  
  data () {
    return {
      
    }
  }
}
</script>
<style lang="sass">
  .q-toolbar__title
    text-align: center
    font-size: 30px
  .q-footer
    .q-tab-size: 30px
</style>