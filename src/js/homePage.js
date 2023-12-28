import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "HomePage",
    data() {
        return {
            postLists : {},
            categoryLists : {},
            searchKey : "",
            tokenStatus : false ,
        };
    },
    computed: {
        ...mapGetters(['storageToken','storageUser'])
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
        getAllPost() {
            axios.get("http://localhost:8000/api/allPostList").then((response) => {
                for (let i = 0; i < response.data.posts.length; i++) {
                    if (response.data.posts[i].image != null) {
                        response.data.posts[i].image = `http://localhost:8000/postImage/${response.data.posts[i].image}`;
                    } else {
                        response.data.posts[i].image = `http://localhost:8000/defaultImage/default.png`;
                    }
                }
                this.postLists = response.data.posts;
                
            });
        },
        getCategory(){
            axios.get("http://127.0.0.1:8000/api/allCategory").then((response) => {
                this.categoryLists = response.data.categories ;
            }).catch((error) => {
                console.log(error);
            });
        },
        search(){
            let search = {
                key : this.searchKey,
            }
           axios.post('http://127.0.0.1:8000/api/post/search',search).then((response)=>{
            console.log(response.data.searchData);
            for (let i = 0; i < response.data.searchData.length; i++) {
                if (response.data.searchData[i].image != null) {
                    response.data.searchData[i].image = `http://localhost:8000/postImage/${response.data.searchData[i].image}`;
                } else {
                    response.data.searchData[i].image = `http://localhost:8000/defaultImage/default.png`;
                }
            }
            this.postLists = response.data.searchData;
           });
        },
        categorySearch(searchKey){
          let search = {
            key : searchKey,
          };
          axios.post('http://localhost:8000/api/category/search',search).then((response) => {
            for (let i = 0; i < response.data.result.length; i++) {
                if (response.data.result[i].image != null) {
                    response.data.result[i].image = `http://localhost:8000/postImage/${response.data.result[i].image}`;
                } else {
                    response.data.result[i].image = `http://localhost:8000/defaultImage/default.png`;
                }
            }
            this.postLists = response.data.result;
          }).catch((error) => {console.log(error)});
        },
        newsDetail(id) {
            this.$router.push({
                name : 'newsDetails',
                query : {
                    newsId : id,
                },
            })
        },
        checkToken (){
            if(this.storageToken !== null && this.storageToken !== undefined && this.storageToken !== ''){
                this.tokenStatus = true;
            }else{
                this.tokenStatus = false;
            }
        }
    },
    mounted() {
        this.checkToken();
        this.getAllPost();
        this.getCategory();
    },
};
