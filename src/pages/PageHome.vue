<template>
  <q-page class="constrain q-pa-md">

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md"
      bordered
      flat
    >
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
            {{ post.location }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        :src="post.imageUrl"
      />
      <q-card-section>
        <div>{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
      </q-card-section>
    </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="48px">
            <img src="https://i.pinimg.com/originals/e4/4a/33/e44a333e6f9f5ace4e62c2733ad704fc.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            class="text-bold" >Marco_Polo</q-item-label>
          <q-item-label caption>
            Marco Polo
          </q-item-label>
        </q-item-section>
      </q-item>
      </div>
    </div>
    
    

  </q-page>
</template>
<script>
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Gouden Brug',
          date: 1615118834244,
          location: 'Italie, Rome',
          imageUrl: 'https://i.pinimg.com/236x/00/b0/58/00b058d7a8d5212bb4b4b526f922f814.jpg'

        },
        {
          id: 2,
          caption: 'Gouden Brug',
          date: 1615118834244,
          location: 'Italie, Rome',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'

        },
        {
          id: 3,
          caption: 'Gouden Brug',
          date: 1615118834244,
          location: 'Italie, Rome',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'

        },
        {
          id: 4,
          caption: 'Gouden Brug',
          date: 1615118834244,
          location: 'Italie, Rome',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'

        }
      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px

</style>