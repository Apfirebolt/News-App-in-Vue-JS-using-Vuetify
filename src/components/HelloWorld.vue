<template>
  <div class="hello">
    <h1 class="h1 text-danger">A news Application in Tailwind {{ url}} <v-icon>home</v-icon>
      <v-icon>mood</v-icon></h1>
    <v-btn>Something</v-btn>

    <v-toolbar height="300" width="300" :color="red"></v-toolbar>

    <v-card
            class="mx-auto"
            max-width="344"
            outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
          <v-list-item-subtitle>{{ url }} Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
                tile
                size="80"
                color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
      <v-card
              height="400"
              width="256"
              class="mx-auto"
      >
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Application
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
                  dense
                  nav
          >
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
            >

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

    <v-toolbar-items>
      <v-btn text>Link 1</v-btn>
      <v-btn text>Link 2</v-btn>
      <v-btn text>Link 3</v-btn>
    </v-toolbar-items>

    <v-btn icon>

    </v-btn>
    <v-btn icon>
      <v-icon>mdi-delete-circle</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      url: process.env.VUE_APP_URL,
      red: 'red',
      name: 'Amit Prafulla',
      items: [
        {
          title: 'Harry Potter',
        },
        {
          title: 'Game of Thrones'
        },
        {
          title: 'Lord of the Rings'
        }
      ]
    }
  },
  props: {
    msg: String
  },
  created() {
    console.log('Contents of process env file : ', );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
