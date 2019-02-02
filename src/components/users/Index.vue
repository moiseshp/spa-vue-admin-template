<template>
    <layout-admin>
        <v-toolbar flat color="white" class="elevation-1">
            <v-toolbar-title>Usuarios</v-toolbar-title>
            <v-spacer></v-spacer>
            <create @store="desserts.unshift($event)"/>
        </v-toolbar>
        <v-data-table :headers="headers" :items="desserts"class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.last_name }}</td>
                <td>{{ props.item.email }}</td>
                <td class="justify-center layout">
                    <edit :uuid="props.item.uuid"
                        @update="Object.assign(desserts[desserts.indexOf(props.item)],$event)"/>
                    <destroy :uuid="props.item.uuid"/>
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </layout-admin>
</template>

<script>
import LayoutAdmin from '@/layouts/Admin'
import Create from './Create'
import Edit from './Edit'
import Destroy from './Destroy'

export default {
    name: 'Index',
    components: {
        LayoutAdmin,
        Create,
        Edit,
        Destroy,
    },
    data: () => ({
        dialog: false,
        headers: [
            { text: 'Name', value: 'name' },
            { text: 'Last Name', value: 'last_name' },
            { text: 'Email', value: 'email' },
            { text: 'Actions', value: 'name', sortable: false, align: 'center' }
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
