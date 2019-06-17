<template>
  <div class="records">
    <div class="container">
      <div class="m-auto">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th width="130">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="guest in guests" :key="guest.date">
              <td>{{ guest.date }}</td>
              <td>{{ guest.name }}</td>
              <td>{{ guest.email }}</td>
              <td>{{ guest.phone }}</td>
              <td>{{ guest.message }}</td>
              <td class="text-center">
                  <button @click="destroy(guest)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import home from '../components/home'

export default {
  name: 'records',
  created(){
      if (localStorage.getItem('guests')) {
      try {
        this.guests = JSON.parse(localStorage.getItem('guests')).reverse();
      } catch(e) {
        localStorage.removeItem('guests');
      }
    }
  },
  data(){
    return{
    }
  },
  methods: {
    //store data to local storage
    localData() {
        let parsed = JSON.stringify(guests)
        localStorage.setItem('guests', parsed);
    },
     
    clear() {
        this.savebtn = true
        this.updatebtn = false
        this.input.date = ''
        this.input.name = ''
        this.input.email = ''
        this.input.phone = ''
        this.input.message = ''
    },

    edit(guest) {
        this.savebtn = false
        this.updatebtn = true
        this.input.date = guest.date
        this.input.name = guest.name
        this.input.email = guest.email
        this.input.phone = guest.phone
        this.input.message = guest.message
    },

    /*update(val) {
        var myid = name - 1
        Object.assign(this.guests[myid], this.input)
        this.savebtn = true;
        this.clear()
        
        this.localData()
        
        swal('Updated', 'guest detail updated', 'warning')
  },*/

    destroy(guest) {
      var i = this.guests.indexOf(guest)
        this.guests.splice(i, 1)
        let parsed = JSON.stringify(this.guests);
        localStorage.setItem('guests', parsed);
        swal({
            title: 'Delete',
            text: 'Are you sure?',
            icon: 'error',
            buttons: true,
            dangerMode: true
        })
    }
  }
}
</script>

<style>
table {
  margin-top: 100px;
}
</style>
