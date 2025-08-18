import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, EffectCoverflow, Keyboard } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./testimonial.css"; // custom css

// Dummy testimonial data – replace with your actual data or fetch from API
const TESTIMONIALS = [
  {
    id: 1,
    name: "Aarav Shah",
    role: "Full‑Stack Developer",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 5,
    text:
      "Super clean UI component! Implementation was quick and performance stayed buttery smooth even with many slides.",
  },
  {
    id: 2,
    name: "Kiara Patel",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 5,
    text:
      "Loved the autoplay with pause‑on‑hover. Also accessible out of the box – keyboard and ARIA done right.",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 4,
    text:
      "Coverflow effect makes the testimonials pop without being distracting. Easy to restyle with Tailwind.",
  },
  {
    id: 4,
    name: "Sara Khan",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 5,
    text:
      "We plugged our CMS data in and it just worked. No jank, even on mobile.",
  },
  {
    id: 5,
    name: "Devang Joshi",
    role: "Founder, DevWorks",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 5,
    text:
      "Navigation arrows + pagination dots are a great combo. Code is tiny and production‑ready.",
  },
  {
    id: 6,
    name: "Nisha Raval",
    role: "QA Engineer",
    avatar: "https://i.pravatar.cc/120?img=67",
    rating: 4,
    text:
      "Tested on low‑end Android; still smooth thanks to Swiper's virtualized rendering.",
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="stars" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < value ? "filled" : "empty"}`}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialCarousel({
  testimonials = TESTIMONIALS,
  autoPlayDelay = 2500,
  className = "",
}) {
  return (
    <section className={`testimonial-section ${className}`}>
      <div className="testimonial-container">
        <header className="testimonial-header">
          <div>
            <p className="testimonial-subtitle">What Students Say</p>
            <h2 className="testimonial-title">Testimonials</h2>
          </div>

         
        </header>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, A11y, EffectCoverflow, Keyboard]}
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
          centeredSlides
          grabCursor
          loop
          speed={650}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: autoPlayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ nextEl: ".ts-next", prevEl: ".ts-prev" }}
          pagination={{ clickable: true, el: ".ts-dots" }}
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.3, spaceBetween: 14 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="testimonial-slide">
              <article className="testimonial-card">
                <div className="testimonial-user">
                  <img src={t.avatar} alt={`${t.name} avatar`} className="testimonial-avatar" />
                  <div>
                    <h3 className="testimonial-name">{t.name}</h3>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  <Stars value={t.rating} />
                </div>
                <p className="testimonial-text">{t.text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ts-dots"></div>
      </div>
    </section>
  );
}