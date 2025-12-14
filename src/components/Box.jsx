import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Box = () => {
  // 01 : Basics
  //   useGSAP(() => {
  // 	gsap.to('#blue-box',{
  //     scale:1.5,
  //     rotation:360,
  //     repeat:-1,
  //     yoyo:true,
  //     color:'red',
  //     duration:2,
  //     borderRadius:'50%',
  //     ease:'power1.inOut',
  //   })
  // },[]); // <-- scope is for selector text (optional)

  // 02 : Timeline
  // const timeline = gsap.timeline({
  //   repeat: -1,
  //   repeatDelay: 1,
  //   yoyo: true,
  // });
  // useGSAP(() => {
  //   timeline
  //     .to("#blue-box", {
  //       x: 300,
  //       scale: 1.5,
  //       rotation: 360,
  //       duration: 2,
  //       borderRadius: "50%",
  //       ease: "power1.inOut",
  //     })
  //     .to("#yellow-box", {
  //       y: -150,
  //       scale: 0.5,
  //       rotation: -360,
  //       duration: 2,
  //       borderRadius: "20%",
  //       ease: "power1.inOut",
  //     })
  //     .to("#green-box", {
  //       x: -300,
  //       y: -150,
  //       scale: 2,
  //       rotation: 180,
  //       duration: 2,
  //       borderRadius: "10%",
  //       ease: "power1.inOut",
  //     });
  // }, []);

  // 03 : Stagger
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     y: -100,
  //     scale: 1.2,
  //     rotation: 360,
  //     duration: 2,
  //     borderRadius: "50%",
  //     yoyo: true,
  //     repeat: -1,
  //     stagger: {
  //       each: 0.3,
  //       ease: "power1.inOut",
  //     },
  //     boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Adding glow effect
  //     ease: "power1.inOut",
  //   });
  // }, []); // <-- scope is for selector text (optional)

  // 04 ScrollTrigger
  // gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef();

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray(".box", scrollRef.current);
  //     boxes.forEach((box, index) => {
  //       gsap.to(box, {
  //         x: 150 * (boxes.indexOf(box) + 5),
  //         rotation: 360,
  //         borderRadius: "50%",
  //         scale: 1.2,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: "bottom bottom",
  //           end: "top 20%",
  //           scrub: true,
  //         },
  //         ease: "power1.inOut",
  //       });
  //     });
  //   },
  //   {
  //     scope: scrollRef,
  //   }
  // );

  // 05 text animation
  useGSAP(()=>{
    gsap.to('#text',{
      ease:'power1.inOut',
      opacity:1,
      y:0,
      stagger:0.1
    })
  },[])

  return (
    <>
      {/* 01 */}
      <div className="p-20 flex justify-center items-center min-h-screen gap-10 flex-col">
        <h1 id="text" className=" text-3xl opacity-0 translate-y-10">
          GSAP TEXT
        </h1>
        <div
          id="blue-box"
          className="w-20 box h-20 bg-red-500 rounded-lg"
        ></div>
        <div
          id="yellow-box"
          className="w-20 box h-20 bg-yellow-500 rounded-lg"
        ></div>
        <div
          id="green-box"
          className="w-20 box h-20 bg-green-500 rounded-lg"
        ></div>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="px-4 py-2 bg-cyan-400 rounded-md text-black font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Play/Pause
        </button>
      </div>
      {/* 02 */}
      <div className="p-20 flex justify-center items-center min-h-screen gap-10 flex-col">
        <div
          id="blue-box"
          className="w-20 box h-20 bg-red-500 rounded-lg"
        ></div>
        <div
          id="yellow-box"
          className="w-20 box h-20 bg-yellow-500 rounded-lg"
        ></div>
        <div
          id="green-box"
          className="w-20 box h-20 bg-green-500 rounded-lg"
        ></div>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="px-4 py-2 bg-cyan-400 rounded-md text-black font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Play/Pause
        </button>
      </div>
      {/* 03 */}
      <div
        ref={scrollRef}
        className="p-20 flex justify-center items-center min-h-screen gap-10 flex-col"
      >
        <div
          id="blue-box"
          className="w-20 box h-20 bg-red-500 rounded-lg"
        ></div>
        <div
          id="yellow-box"
          className="w-20 box h-20 bg-yellow-500 rounded-lg"
        ></div>
        <div
          id="green-box"
          className="w-20 box h-20 bg-green-500 rounded-lg"
        ></div>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="px-4 py-2 bg-cyan-400 rounded-md text-black font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Play/Pause
        </button>
      </div>
      {/* 04 */}
      <div className="p-20 flex justify-center items-center min-h-screen gap-10 flex-col">
        <div
          id="blue-box"
          className="w-20 box h-20 bg-red-500 rounded-lg"
        ></div>
        <div
          id="yellow-box"
          className="w-20 box h-20 bg-yellow-500 rounded-lg"
        ></div>
        <div
          id="green-box"
          className="w-20 box h-20 bg-green-500 rounded-lg"
        ></div>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="px-4 py-2 bg-cyan-400 rounded-md text-black font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Play/Pause
        </button>
      </div>
      {/* 05 */}
      <div className="p-20 flex justify-center items-center min-h-screen gap-10 flex-col">
        <div
          id="blue-box"
          className="w-20 box h-20 bg-red-500 rounded-lg"
        ></div>
        <div
          id="yellow-box"
          className="w-20 box h-20 bg-yellow-500 rounded-lg"
        ></div>
        <div
          id="green-box"
          className="w-20 box h-20 bg-green-500 rounded-lg"
        ></div>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="px-4 py-2 bg-cyan-400 rounded-md text-black font-bold hover:bg-cyan-600 cursor-pointer"
        >
          Play/Pause
        </button>
      </div>
    </>
  );
};

export default Box;
