<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar class="constrain">
        <q-btn
          to="/camera"
          class="large-screen-only q-mr-sm"
          icon="eva-video-outline"
          size="18px"
          flat
          round
          dense
        /><!-- class="large-screen-only" -->
        <q-separator
        class="large-screen-only"
          vertical
          spaced
        />
        <q-toolbar-title 
          class="text-grand-hotel"
        >
          Gallery
        </q-toolbar-title>
          <q-btn
          to="/"
          class="large-screen-only"
          icon="eva-home-outline"
          size="18px"
          flat
          round
          dense
        /><!-- class="large-screen-only" -->
      </q-toolbar>
    </q-header>

    <q-footer
      class="small-screen-only bg-white "
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

    <q-page-container class="bg-blue-grey-2">
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

  


.q-toolbar
  @media (min-width: $breakpoint-sm-min)
  height: 77px
  .q-toolbar__title
    font-size: 30px
    @media (max-width: $breakpoint-xs-max)
    text-align: center
  .q-footer
    .q-tab-size: 30px
</style>