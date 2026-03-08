import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { CiStar } from "react-icons/ci";
import { MdOutlineFormatQuote } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Section from "@/components/ui/Section";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import styles from "@/styles/Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    title: "Absolutely changed my living room",
    text: "The furniture quality is incredible. Every detail feels premium, elegant, and thoughtfully designed. My clients also loved the modern aesthetic and comfort.",
    highlight: "Premium quality",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Home Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    title: "Luxury feel with real comfort",
    text: "I was looking for furniture that looked expensive but also felt truly comfortable. This brand delivered both. The sofa and chairs became the centerpiece of my home.",
    highlight: "Luxury comfort",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    title: "Minimal, stylish, unforgettable",
    text: "What impressed me most is how clean and timeless the design language is. It fits perfectly into modern spaces and instantly upgrades the atmosphere.",
    highlight: "Modern elegance",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Studio Founder",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    title: "Clients keep asking where it’s from",
    text: "We used these pieces in a client project and immediately got questions about where the furniture came from. That says everything about the visual impact.",
    highlight: "Client favorite",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Lifestyle Blogger",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    title: "A perfect blend of art and function",
    text: "These pieces are not just furniture, they feel like design statements. Beautiful finishing, soft tones, and a cozy atmosphere all in one collection.",
    highlight: "Artistic touch",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Section title="What Our Customers Feel Inside Their Spaces" />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.sliderWrap}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={900}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.2,
              scale: 0.88,
              slideShadows: false,
            }}
            className={styles.swiper}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                <motion.article
                  className={styles.card}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className={styles.topGlow} />

                  <div className={styles.cardTop}>
                    <div className={styles.avatarWrap}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.avatar}
                      />
                      <motion.div
                        className={styles.avatarRing}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>

                    <div className={styles.personInfo}>
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>

                    <motion.div
                      className={styles.quoteIcon}
                      animate={{
                        y: [0, -6, 0],
                        rotate: [0, -6, 6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MdOutlineFormatQuote size={24} />
                    </motion.div>
                  </div>

                  <div className={styles.badge}>{item.highlight}</div>

                  <h4 className={styles.cardTitle}>{item.title}</h4>

                  <p className={styles.text}>{item.text}</p>

                  <div className={styles.bottom}>
                    <div className={styles.stars}>
                      {[...Array(item.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.6, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: 0.25 + i * 0.08 + index * 0.03,
                            duration: 0.35,
                          }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.16, 1],
                            }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              delay: i * 0.12,
                            }}
                          >
                            <CiStar
                              size={18}
                              className={styles.star}
                              fill="currentColor"
                            />
                          </motion.div>
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      className={styles.arrowBtn}
                      whileHover={{ x: 3, y: -3 }}
                      transition={{ duration: 0.25 }}
                    >
                      <GoArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  <motion.div
                    className={styles.progressLine}
                    animate={{ scaleX: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
