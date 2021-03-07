<template>
  <q-page class="constrain q-pa-md">
    <q-card class="card-post" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/e4/4a/33/e44a333e6f9f5ace4e62c2733ad704fc.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            class="text-bold" >Marco Polo</q-item-label>
          <q-item-label caption>
            Italie, Rome
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-card-section>
        <div>Gouden Brug</div>
        <div class="text-caption text-grey">Juni 12 10:30AM</div>
      </q-card-section>
    </q-card>
    

  </q-page>
</template>
<script>
export default {
  name: 'PageHome'
}
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px

</style>