import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center min-h-screen bg-gray-900">
      <h1 className="text-3xl text-indigo-300">HELLO</h1>
    </div>
  );
};

export default App;
