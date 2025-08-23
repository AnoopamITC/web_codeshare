import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, EffectCoverflow, Keyboard } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./testimonial.css"; // custom css
import i from '@/assets/images/img1.png'
import i2 from '@/assets/images/img2.png'
import i3 from '@/assets/images/img3.png'
import st1 from '@/assets/images/st1.jpg';
import st2 from '@/assets/images/st2.jpg';
import st3 from '@/assets/images/st3.jpg';
import st4 from '@/assets/images/st4.jpg';
// Dummy testimonial data – replace with your actual data or fetch from API
const TESTIMONIALS = [
  {
    id: 1,
    name: "Aarav Shah",
    role: "Full‑Stack Developer",
    avatar: st3,
    rating: 5,
    text:
      "Super clean UI component! Implementation was quick and performance stayed buttery smooth even with many slides.",
  },
  {
    id: 2,
    name: "Kusum Paliwal",
    role: "AI",
     avatar: st4,
    rating: 5,
    text:
      "Loved the autoplay with pause‑on‑hover. Also accessible out of the box – keyboard and ARIA done right.",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "Office 365",
 avatar: st2,
     rating: 4,
    text:
      "Coverflow effect makes the testimonials pop without being distracting. Easy to restyle with Tailwind.",
  },
  {
    id: 4,
    name: "Kusum Paliwal",
    role: "Tally",
 avatar: st4,
     rating: 5,
    text:
      "We plugged our CMS data in and it just worked. No jank, even on mobile.",
  },
  {
    id: 5,
    name: "Devang Joshi",
    role: "Cyber Security",
 avatar: st2,
     rating: 5,
    text:
      "Navigation arrows + pagination dots are a great combo. Code is tiny and production‑ready.",
  },
  {
    id: 6,
    name: "Krupa Patel",
    role: "Multimedia",
     avatar: st1,
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
          <div className="r-title">
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
            768: { slidesPerView: 1, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
          }}
          className="testimonial-swiper"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="testimonial-card">
                <img src={t.avatar} alt={t.name} className="testimonial-img" />
                <h4>{t.role}</h4>
                <Stars value={t.rating} />
                <p className="testimonial-text">“{t.text}”</p>
                <h3 className="testimonial-name">~ {t.name}</h3>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ts-dots"></div>
      </div>
    </section>
  );
}