import React from "react";
import { Carousel, initMDB } from "mdb-ui-kit";

const Herosection = () => {
  initMDB({ Carousel });
  return (
    <div
      id="carouselMaterialStyle"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      data-mdb-carousel-init
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner rounded-5 shadow-4-strong">
        <div class="carousel-item active">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*G7xvMpKQzsJbXpl9BTKUXg.jpeg"
            class="d-block w-100"
            alt="Sunset Over the City"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Jump into learning for less</h5>
            <p>
              If you're new to LMS, we've got good news: We are providing
              courses for free to students
            </p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://www.chargebee.com/blog/wp-content/uploads/2021/07/Subscription-Learning-Chargebee-Blog.png"
            class="d-block w-100"
            alt="Canyon at Nigh"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Subscribe to the best of LMS</h5>
            <p>With Personal Plan, you get access to all the courses</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
            class="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Putting Theory into Practice: Engaging Activities</h5>
            <p>
              Interactive exercises and simulations Downloadable readings and
              presentations
            </p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Herosection;
