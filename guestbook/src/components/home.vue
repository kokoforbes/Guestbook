<template>
  <div class="home">
    <div class="container">
      <div class="row">
          <div class="col-md-6 m-auto">
            <form>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" data-date-format="MM-DD-YYYY" v-model="input.date" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="input.name" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="input.email" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" v-model="input.phone" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control" v-model="input.message"></textarea>
                </div>
                <div class="float-right">
                  <button v-if="savebtn" @click.prevent="addGuest" class="btn btn-primary">Save</button>
                  <button v-if="updatebtn" @click.prevent="update(input.date)" class="btn btn-warning">Update</button>
                  <button @click.prevent="clear" class="btn btn-info">Clear</button>
                </div>  
            </form>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      guests : [],
      savebtn: true,
      updatebtn: false,
      input: {
          date: '',
          name: '',
          email: '',
          phone: '',
          message: ''
      },
      guests: [
            { date: '2019-05-02', name: 'Lord Baelish', email: 'baelish@gmail.com', phone: '080675554666', message: 'leaving kings landing'},
            { date: '2019-05-03', name: 'Jon Snow', email: 'jonsnowing@gmail.com', phone: '07067656668', message: 'Im off to castle black'},
            { date: '2019-05-04', name: 'Arya Stark', email: 'aglname@gmail.com', phone: '08067678667', message: 'not today' },
            { date: '2019-05-08', name: 'Dany taegaryan', email: 'tagaeryan@yahoo.com', phone: '08023656666', message: 'dracarys' },
            { date: '2019-05-09', name: 'Sansa stark', email: 'sanstark@hotmail.com', phone: '0803486667', message: 'im the queen in the north' },
            { date: '2019-05-10', name: 'Jamie Lannister', email: 'sisterlover@yahoo.com', phone: '08023553527', message: 'I love my sister' }
        ]
    }
  },
  
  mounted(){
      if (localStorage.getItem('guests')) {
      try {
        this.guests = JSON.parse(localStorage.getItem('guests'));
      } catch(e) {
        localStorage.removeItem('guests');
      }
    }
  },

  methods: {
    //store data to local storage
    localData() {
        let parsed = JSON.stringify(this.guests);
        localStorage.setItem('guests', parsed);
    },
     
    addGuest() {

      if(this.input.date.trim().length == 0) {
        return;
      }
    this.guests.push({
          date: this.input.date,
          name: this.input.name,
          email: this.input.email,
          phone: this.input.phone,
          message: this.input.message,
        });
        this.clear();
        this.localData()
        swal('Added', 'new guest added', 'success')
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

    update(val) {
        /*var myid = name - 1
        Object.assign(this.guests[myid], this.input)*/
        this.savebtn = true;
        this.clear()
        
        this.localData()
        
        swal('Updated', 'guest detail updated', 'warning')
    },

    destroy(guest) {
      var i = this.guests.indexOf(guest)
        this.guests.splice(i, 1)
        this.localData()
        swal({
            title: 'Delete',
            text: 'Are you sure',
            icon: 'error',
            buttons: true,
            dangerMode: true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
 
  background: url('../assets/formbg.jpg') no-repeat center;
  height: 100vh;
}


form{
   margin-top: 100px;
   padding: 50px 15px;
   background: white;
   border-radius: 10px;
   opacity: .9;
}

table{
  margin-top: 170px;
}
</style>
