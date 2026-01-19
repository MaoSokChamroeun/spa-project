// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Carousel = () => {
//   return (
//     <div className="w-full relative">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         loop={true}
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="pb-16"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex items-center justify-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 1
//             </span>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex items-center justify-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 2
//             </span>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex items-center justify-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 3
//             </span>
//           </div>
//         </SwiperSlide>

//         {/* Navigation Buttons */}
//         <div className="absolute inset-y-1/2 left-5 z-10 -translate-y-1/2">
//           <button className="swiper-button-prev w-12 h-12 border border-indigo-600 rounded-full flex items-center justify-center group hover:bg-indigo-600 transition">
//             <svg className="w-5 h-5 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 16 16">
//               <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>

//         <div className="absolute inset-y-1/2 right-5 z-10 -translate-y-1/2">
//           <button className="swiper-button-next w-12 h-12 border border-indigo-600 rounded-full flex items-center justify-center group hover:bg-indigo-600 transition">
//             <svg className="w-5 h-5 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 16 16">
//               <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
