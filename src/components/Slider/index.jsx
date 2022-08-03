import { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const slides = [
  "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 2000);
  });

  return (
    <div className={styles.sliderContainer}>
      <img src={slides[currentSlide]} alt="slide" />
      <button>{"<"}</button>
      <button>{">"}</button>
    </div>
  );
}

export default Slider;
