

<template>
  <section class="shop-section section-b-space">
    <h1>Shop Here</h1>
    <div class="container">
      <div class="row">
        <div class="col-xxl-3 col-xl-4">
          <div class="shop-filter sticky">
            <div class="shop-filter-block">
              <div class="shop-mobile-back">
                <button>
                  Close
                  <i class="ri-close-fill"></i>
                </button>
              </div>
              <div class="shop-filter-box">
                <div class="accordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                      >
                        <span>Categories</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <div class="search-box">
                          <input
                            type="search"
                            name="text"
                            placeholder="Search items..."
                          />
                          <i
                            class="iconsax search-icon"
                            data-icon="search-normal-2"
                          ></i>
                        </div>
                        <ul class="categories-box">
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Categories"
                              checked
                            />
                            <label for="Categories"
                              >all categories <span>(54)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Furniture"
                            />
                            <label for="Furniture"
                              >furniture <span>(12)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Accessories"
                            />
                            <label for="Accessories"
                              >accessories <span>(36)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Clothes"
                            />
                            <label for="Clothes"
                              >clothes <span>(30)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Electronic"
                            />
                            <label for="Electronic"
                              >electronic <span>(21)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Bag"
                            />
                            <label for="Bag">bag <span>(10)</span></label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Vegetable"
                            />
                            <label for="Vegetable"
                              >vegetable <span>(9)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="Watches"
                            />
                            <label for="Watches"
                              >watches <span>(50)</span></label
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayFour-collapseFour"
                      >
                        <span>Highlight</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayFour-collapseFour"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <ul class="highlight-box">
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="seller"
                            />
                            <label for="seller"
                              >best seller <span>(45)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="arrivals"
                            />
                            <label for="arrivals"
                              >new arrivals <span>(15)</span></label
                            >
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="sale"
                            />
                            <label for="sale">sale <span>(32)</span></label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="all-items"
                            />
                            <label for="all-items"
                              >hot items <span>(35)</span></label
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                      >
                        <span>Price</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <div class="range-wrapper">
                          <div class="wrapper">
                            <div class="slider">
                              <div class="progress"></div>
                            </div>
                            <div class="range-input">
                              <input
                                type="range"
                                class="range-min"
                                min="0"
                                max="10000"
                                value="2500"
                                step="100"
                              />
                              <input
                                type="range"
                                class="range-max"
                                min="0"
                                max="10000"
                                value="7500"
                                step="100"
                              />
                            </div>
                            <div class="price-input">
                              <div class="field">
                                <input
                                  type="number"
                                  class="input-min"
                                  value="2500"
                                  disabled
                                />
                              </div>
                              <span class="separator">
                                <i class="ri-subtract-line"></i>
                              </span>
                              <div class="field">
                                <input
                                  type="number"
                                  class="input-max"
                                  value="7500"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                      >
                        <span>Color</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <ul class="color-filter">
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color"
                            />
                            <label for="color">
                              <span
                                class="color"
                                style="background-color: #94c4ff"
                              ></span>
                              Navy blue
                              <span class="number">(29)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color1"
                            />
                            <label for="color1">
                              <span
                                class="color"
                                style="background-color: #c5aff6"
                              ></span>
                              Light purple <span class="number">(24)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color2"
                            />
                            <label for="color2">
                              <span
                                class="color"
                                style="background-color: #fbe8bf"
                              ></span>
                              Golden yellow <span class="number">(10)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color3"
                            />
                            <label for="color3">
                              <span
                                class="color"
                                style="background-color: #b2ebd6"
                              ></span>
                              Greene green <span class="number">(39)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color4"
                            />
                            <label for="color4">
                              <span
                                class="color"
                                style="background-color: #cdb69b"
                              ></span>
                              Browne
                              <span class="number">(5)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color5"
                            />
                            <label for="color5">
                              <span
                                class="color"
                                style="background-color: #ffbfbf"
                              ></span>
                              Orange
                              <span class="number">(45)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color6"
                            />
                            <label for="color6">
                              <span
                                class="color"
                                style="background-color: #fbc6ea"
                              ></span>
                              Baby pink
                              <span class="number">(3)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color7"
                            />
                            <label for="color7">
                              <span
                                class="color"
                                style="background-color: #dbe793"
                              ></span>
                              Dark Green <span class="number">(32)</span>
                            </label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                              id="color8"
                            />
                            <label for="color8">
                              <span
                                class="color"
                                style="background-color: #ffc38d"
                              ></span>
                              Orange olive <span class="number">(21)</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayFive-collapseFive"
                      >
                        <span>Availability</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayFive-collapseFive"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <ul class="availability-box">
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="in-stock"
                            />
                            <label for="in-stock">in stock</label>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="radio"
                              name="text"
                              id="out-stock"
                            />
                            <label for="out-stock">out of stock</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStaySeven-collapseSeven"
                      >
                        <span>Rating</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStaySeven-collapseSeven"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <ul class="rating-box">
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                            />
                            <div>
                              <ul class="rating">
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li><h3>5 & up</h3></li>
                              </ul>
                              <span>(31)</span>
                            </div>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                            />
                            <div>
                              <ul class="rating">
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li><h3>4 & up</h3></li>
                              </ul>
                              <span>(39)</span>
                            </div>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                            />
                            <div>
                              <ul class="rating">
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li><h3>3 & up</h3></li>
                              </ul>
                              <span>(35)</span>
                            </div>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                            />
                            <div>
                              <ul class="rating">
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li><h3>2 & up</h3></li>
                              </ul>
                              <span>(22)</span>
                            </div>
                          </li>
                          <li>
                            <input
                              class="checkbox_animated"
                              type="checkbox"
                              name="text"
                            />
                            <div>
                              <ul class="rating">
                                <li>
                                  <i class="ri-star-fill"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li>
                                  <i class="ri-star-line"></i>
                                </li>
                                <li><h3>1 & up</h3></li>
                              </ul>
                              <span>(18)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStaySix-collapseSix"
                      >
                        <span>Tags</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStaySix-collapseSix"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body px-0 pb-0">
                        <ul class="tag-box">
                          
                          
                          <li>
                            <a href="#!">electronic</a>
                          </li>
                          <li>
                            <a href="#!">watches</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="shop-banner-box">
                    <div class="swiper shop-offer-banner">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/1.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/2.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/3.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/4.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/5.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/6.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src="/assets/images/shop-page/7.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="shop-banner">
                      <h3>
                        Subscribe & Get Free Shipping on Your Next Order
                        <img
                          src="/assets/svg/icon/like.svg"
                          class="img-fluid"
                          alt=""
                        />
                      </h3>
                      <form class="news-latter-form">
                        <input type="email" placeholder="Enter email" />
                        <span>
                          <img
                            src="/assets/svg/icon/right-arrow.svg"
                            alt=""
                          />
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-9 col-xl-8">
          <div class="categories-items sticky">
            <div class="filter-content">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <button class="filter-button theme-btn btn">
                  <i class="ri-equalizer-2-line"></i> Filter Menu
                </button>
                <span>Showing 1-8 of 52 results</span>
              </div>
              <div class="right-menu">
                <div>
                  <div class="filter-option-grid d-lg-flex d-none">
                    <button class="btn filter-box nav-link">
                      <svg>
                        <use
                          href="/assets/svg/sprite_icon.svg#grid"
                        ></use>
                      </svg>
                    </button>
                    <button class="btn filter-box nav-link">
                      <svg>
                        <use
                          href="/assets/svg/sprite_icon.svg#list-view"
                        ></use>
                      </svg>
                    </button>
                  </div>
                  <ul class="shop-sorting">
                    <li>
                      <label>Sort:</label>
                      <select class="form-select">
                        <option selected disabled>Default sorting</option>
                        <option value="1">popularity</option>
                        <option value="2">average rating</option>
                        <option value="3">price: low to high</option>
                        <option value="4">price: high to low</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="recent-box">
              <h4>Filter:</h4>
              <ul>
                
                <li>
                  <a href="#!">Watches <i class="ri-close-line"></i></a>
                </li>
                
                <li>
                  <a href="#!">New Arrivals <i class="ri-close-line"></i></a>
                </li>
                <li>
                  <a href="#!">$4000 - $6600 <i class="ri-close-line"></i></a>
                </li>
                <li>
                  <button class="btn">
                    Clear all <i class="ri-delete-bin-5-line"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="product-tab-content">
              <div
                class="row-cols-md-3 row-cols-2 grid-section view-option row g-3 g-xl-4"
              >
                <ProductCard
                   v-for="product in products"
                   :key="product.id"
                   :product="product"
                 />

                
              </div>
            </div>
            <div class="text-center">
              <button id="loadMoreBtn" class="btn btn-load-more theme-btn">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

