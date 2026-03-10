import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Database, SquareLibrary, Code } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faNodeJs,
  faJs,
  faJava,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function OrbitAnimation() {
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= ROTATION ONLY ================= */

      gsap.to(outerRef.current, {
        rotation: 360,
        duration: 22,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(middleRef.current, {
        rotation: -360,
        duration: 16,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(innerRef.current, {
        rotation: 360,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(centerRef.current, {
        rotation: -360,
        duration: 45,
        ease: "linear",
        repeat: -1,
      });

      gsap.utils.toArray(".orbit-icon").forEach((icon) => {
        gsap.to(icon, {
          rotation: -360,
          duration: 22,
          ease: "linear",
          repeat: -1,
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto flex items-center justify-center">

      {/* OUTER ORBIT */}
      <div
        ref={outerRef}
        className="absolute w-72 h-72 rounded-full border-2 border-dashed border-white/30"
      >
        <OrbitIcon icon={<FontAwesomeIcon icon={faHtml5} />} top="2%" left="70%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faJava} />} top="20%" left="2%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faGithub} />} top="73%" left="88%" />
        <OrbitIcon icon={<Code />} top="82%" left="10%" />
      </div>

      {/* MIDDLE ORBIT */}
      <div
        ref={middleRef}
        className="absolute w-56 h-56 rounded-full border border-dashed border-white/30"
      >
        <OrbitIcon icon={<FontAwesomeIcon icon={faJs} />} top="10%" left="10%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faCss3Alt} />} top="82%" left="78%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faNodeJs} />} top="80%" left="12%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faReact} />} top="12%" left="84%" />
      </div>

      {/* INNER ORBIT */}
      <div
        ref={innerRef}
        className="absolute w-36 h-36 rounded-full border border-dashed border-white/40"
      >
        <OrbitIcon icon={<Database />} top="5%" left="20%" />
        <OrbitIcon icon={<SquareLibrary />} top="70%" left="5%" />
        <OrbitIcon icon={<FontAwesomeIcon icon={faPython} />} top="55%" left="88%" />
      </div>

      {/* CENTER */}
      <div
        ref={centerRef}
        className="absolute w-12 h-12 rounded-full border border-dashed border-white/40"
      />
    </div>
  );
}

/* ================= ICON ================= */

function OrbitIcon({ icon, top, left }) {
  return (
    <div
      className="orbit-icon absolute text-white/80 text-lg hover:scale-110 transition-transform duration-300 will-change-transform"
      style={{ top, left }}
    >
      {icon}
    </div>
  );
}
