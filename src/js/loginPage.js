import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name : 'LoginPage',
    data () {
      return {
        userData : {
          email : '',
          password : '',
        },
        userStatus : false,
      }
    },
    computed: {
     ...mapGetters(['storageToken','storageUser']),
    },
    methods: {
      home () {
        this.$router.push({
          name : 'home',
        })
      },
      login(){
      
        axios.post('http://localhost:8000/api/user/login',this.userData).then((response)=>{
          if(response.data.token === null){
            this.userStatus = true;
          }else{
            this.userStatus = false;
           this.$store.dispatch('setToken',response.data.token);
           this.$store.dispatch('setUserData',response.data.user);
           this.home();
          }
        }).catch((error)=>{
          console.log(error);
        })
      },
     
    },
}
