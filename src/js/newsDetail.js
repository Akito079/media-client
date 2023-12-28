import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name : 'Newdetail',
  data () {
    return {
      postId: 0,
      posts  : {},
      tokenStatus : false ,
      viewCount : 0,
    }
  },
  computed: {
    ...mapGetters(['storageToken','storageUser']),
  },
  methods: {
    home(){
      this.$router.push({
          name : 'home'
      })
  },
  login(){
    this.$router.push({
      name : 'login'
  })
  },
  logout(){
    this.$store.dispatch('setToken',null);
    this.$store.dispatch('setUserData',null);
    this.$router.push({
     name : 'login'
    })
 },
    postDetail (id) {
       id = {
        postId  : this.postId,
      }
      axios.post('http://localhost:8000/api/post/details',id).then((response) => {
            if (response.data.posts.image != null) {
                response.data.posts.image = `http://localhost:8000/postImage/${response.data.posts.image}`;
            } else {
                response.data.posts.image = `http://localhost:8000/defaultImage/default.png`;
            }
        this.posts = response.data.posts;
        // console.log(this.posts);
      }).catch((error) => {console.log(error)});
    },
    back(){
      history.back();
    },
    checkToken (){
      if(this.storageToken !== null && this.storageToken !== undefined && this.storageToken !== ''){
          this.tokenStatus = true;
      }else{
          this.tokenStatus = false;
      }
  },
  viewcountLoad(){
    let data = {
      'user_id' : this.storageUser.id,
      'post_id' : this.$route.query.newsId,
    }
    axios.post("http://localhost:8000/api/post/actionLog",data).then((response)=>{
      this.viewCount = response.data.posts.length;
    });
  }
  },
  
 mounted () {
  this.viewcountLoad();
  this.checkToken();
  this.postId = this.$route.query.newsId;
  this.postDetail(this.postId);
 }
}