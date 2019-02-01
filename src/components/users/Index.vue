<template>
    <layout-admin>
        <v-toolbar flat color="white" class="elevation-1">
            <v-toolbar-title>Usuarios</v-toolbar-title>
                <v-spacer></v-spacer>
                <create @create="desserts.push($event)"/>
         </v-toolbar>
         <v-data-table
           :headers="headers"
           :items="desserts"
           class="elevation-1"
         >
           <template slot="items" slot-scope="props">
             <td>{{ props.item.name }}</td>
             <td class="text-xs-right">{{ props.item.last_name }}</td>
             <td class="text-xs-right">{{ props.item.email }}</td>
             <td class="text-xs-right">{{ props.item.carbs }}</td>
             <td class="text-xs-right">{{ props.item.protein }}</td>
             <td class="justify-center layout px-0">
               <v-icon
                 small
                 class="mr-2"
                 @click="editItem(props.item)"
               >
                 edit
               </v-icon>
               <v-icon
                 small
                 @click="deleteItem(props.item)"
               >
                 delete
               </v-icon>
             </td>
           </template>
           <template slot="no-data">
             <v-btn color="primary" @click="initialize">Reset</v-btn>
           </template>
         </v-data-table>
</layout-admin>
</template>

<script>
import LayoutAdmin from '@/layouts/Admin.vue'
import Create from './Create.vue'

export default {
    name: 'Index',
    components: {
        LayoutAdmin,
        Create
    },
    data: () => ({
       dialog: false,
       headers: [
         {
           text: 'Dessert (100g serving)',
           align: 'left',
           sortable: false,
           value: 'name'
         },
         { text: 'Calories', value: 'calories' },
         { text: 'Fat (g)', value: 'fat' },
         { text: 'Carbs (g)', value: 'carbs' },
         { text: 'Protein (g)', value: 'protein' },
         { text: 'Actions', value: 'name', sortable: false }
       ],
       desserts: [],
       editedIndex: -1,
       editedItem: {
         name: '',
         calories: 0,
         fat: 0,
         carbs: 0,
         protein: 0
       },
       defaultItem: {
         name: '',
         calories: 0,
         fat: 0,
         carbs: 0,
         protein: 0
       }
     }),

     computed: {
       formTitle () {
         return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
       }
     },

     watch: {
       dialog (val) {
         val || this.close()
       }
     },

     created() {
       this.initialize()
     },

     methods: {
       initialize () {

         axios.get('users')
         .then(resp => {
             this.desserts = resp.data
         })
       },

       editItem (item) {
         this.editedIndex = this.desserts.indexOf(item)
         this.editedItem = Object.assign({}, item)
         this.dialog = true
       },

       deleteItem (item) {
         const index = this.desserts.indexOf(item)
         confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
       },

       close () {
         this.dialog = false
         setTimeout(() => {
           this.editedItem = Object.assign({}, this.defaultItem)
           this.editedIndex = -1
         }, 300)
       },

       save(item) {
           console.log('save parent',item)
           this.desserts.push(item)
         // if (this.editedIndex > -1) {
         //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
         // } else {
         //   this.desserts.push(this.editedItem)
         // }
         this.close()
       }
     }
}
</script>
