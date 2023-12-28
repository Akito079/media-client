<template>
<div class="d-flex align-items-center gap-3 justify-content-center py-3">
    <button class="btn btn-sm btn-danger" @click="home()" >Home</button>
    <button class="btn btn-sm bg-dark text-white" @click="login()" v-if="!tokenStatus">
  Login
</button>
<button class="btn btn-sm bg-dark text-white" @click="logout()" v-if="tokenStatus">
  Logout
</button>  
</div>
  <main>
      <!-- About US Start -->
      <div class="about-area">
          <div class="container">
                  <!-- Hot Aimated News Tittle-->
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="trending-tittle">
                              <strong>Trending now</strong>
                              <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                              
                          </div>
                      </div>
                  </div>
                 <div class="row">
                      <div class="col-lg-8">
                          <!-- Trending Tittle -->
                          <div class="about-right mb-90">
                              <div class="about-img">
                                  <img :src="posts.image" alt="">
                              </div>
                              <div class="section-tittle mb-30 pt-30">
                                  <h3>{{posts.title}}</h3>
                              </div>
                              <div class="about-prea">
                                  <p class="about-pera1 mb-25">
                                     {{ posts.description }}</p>
                              </div> 
                              <div class="social-share pt-30">
                                  <div class="section-tittle">
                                      <ul class="">
                                          <li><i class="fs-5 text-danger fa-solid fa-eye"></i>{{viewCount}}</li>
                                          <li><i class="fs-5 text-danger fa-solid fa-thumbs-up"></i>20</li>
                                          <li><i class="fs-5 text-danger fa-solid fa-comment"></i>3</li>
                                          <li><i class="fs-5 text-danger fa-solid fa-share"></i>5</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <!-- From -->
                          <div class="row">
                              <div class="col-lg-8">   
                                      <div class="form-group my-5">
                                          <button type="submit" @click="back()" class="button button-contactForm boxed-btn">back</button>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <!-- Section Tittle -->
                          <div class="section-tittle mb-40">
                              <h3>Follow Us</h3>
                          </div>
                          <!-- Flow Socail -->
                          <div class="single-follow mb-45">
                              <div class="single-box">
                                  <div class="follow-us d-flex align-items-center">
                                      <div class="follow-social">
                                          <a href="#"><img src="assets/img/news/icon-fb.png" alt=""></a>
                                      </div>
                                      <div class="follow-count">  
                                          <span>8,045</span>
                                          <p>Fans</p>
                                      </div>
                                  </div> 
                                  <div class="follow-us d-flex align-items-center">
                                      <div class="follow-social">
                                          <a href="#"><img src="assets/img/news/icon-tw.png" alt=""></a>
                                      </div>
                                      <div class="follow-count">
                                          <span>8,045</span>
                                          <p>Fans</p>
                                      </div>
                                  </div>
                                      <div class="follow-us d-flex align-items-center">
                                      <div class="follow-social">
                                          <a href="#"><img src="assets/img/news/icon-ins.png" alt=""></a>
                                      </div>
                                      <div class="follow-count">
                                          <span>8,045</span>
                                          <p>Fans</p>
                                      </div>
                                  </div>
                                  <div class="follow-us d-flex align-items-center">
                                      <div class="follow-social">
                                          <a href="#"><img src="assets/img/news/icon-yo.png" alt=""></a>
                                      </div>
                                      <div class="follow-count">
                                          <span>8,045</span>
                                          <p>Fans</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- New Poster -->
                          <div class="news-poster d-none d-lg-block">
                              <img src="assets/img/news/news_card.jpg" alt="">
                          </div>
                      </div>
                 </div>
          </div>
      </div>
      <!-- About US End -->
  </main>
</template>
<script src="../js/newsDetail.js"></script>
