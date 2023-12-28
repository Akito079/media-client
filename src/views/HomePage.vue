<template>
  <div class="d-flex align-items-center gap-3 justify-content-center py-3">
    <button class="btn btn-sm btn-danger" @click="home()">Home</button>
    <button class="btn btn-sm bg-dark text-white" @click="login()" v-if="!tokenStatus">
      Login
    </button>
    <button class="btn btn-sm bg-dark text-white" @click="logout()" v-if="tokenStatus">
      Logout
    </button>
  </div>
  <!-- Whats New Start -->
  <section class="whats-news-area pt-50 pb-20">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-3 col-md-3">
              <div class="section-tittle mb-30">
                <h3>Whats New</h3>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="properties__button">
                <!--Nav Button  -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      href="#"
                      @click="categorySearch()"
                      >All</a
                    >
                    <a
                      class="nav-item nav-link"
                      :id="categoryLists.id"
                      href="#"
                      @click="categorySearch(category.title)"
                      v-for="(category, id) in categoryLists"
                      :key="id"
                      >{{ category.title }}</a
                    >
                  </div>
                </nav>
                <!--End Nav Button  -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="offset-9 position-relative col-3 my-5">
                <label
                  for=""
                  class="position-absolute top-50 translate-middle-y start-0 ms-2"
                  ><i class="fas fa-search"></i
                ></label>
                <input
                  type="text"
                  name=""
                  class="form-control px-5 rounded-3"
                  id=""
                  v-model="searchKey"
                  @keyup.enter="search()"
                />
              </div>
              <!-- Nav Card -->
              <div class="tab-content" id="nav-tabContent">
                <!-- card one -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="whats-news-caption">
                    <span class="" v-if="tokenStatus == false">
                      <p class="text-danger fs-4 opacity-75 text-center">You are not authenticated to acces data</p>
                    </span>
                   <div class="" v-else>
                    <div class="row">
                    <div
                      v-if="postLists.length === 0"
                      class="d-flex justify-content-center align-items-center"
                      style="height: 400px"
                    >
                      <h2>There is no data</h2>
                    </div>
                    <div
                      v-else
                      class="col-lg-6 col-md-6"
                      v-for="post in postLists"
                      :key="post.id"
                    >
                      <div
                        class="single-what-news mb-100"
                        @click="newsDetail(post.id)"
                      >
                        <div class="what-img">
                          <img
                            :src="post.image"
                            class="img-thumbnail object-fit-cover rounded mx-auto d-block"
                            style="height: 500px"
                            alt=""
                          />
                        </div>
                        <div class="what-cap">
                          <span class="color1">{{
                            post.category_title
                          }}</span>
                          <h4>
                            <a href="">{{ post.title }}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  
                </div>
                   </div>
                  </div>
                </div>
              </div>
              <!-- End Nav Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Whats New End -->

  <!--Start pagination -->
  <!-- <div class="pagination-area pb-45 text-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-start">
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow roted"></span
                  ></a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="details.html">01</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">02</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">03</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow right-arrow"></span
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- End pagination  -->
</template>
<script src="../js/homePage.js"></script>
