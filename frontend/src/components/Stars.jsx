/* eslint-disable react/no-unknown-property */
import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Preload } from "@react-three/drei";
import {
  RiReactjsFill,
  RiNextjsFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiJavaFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiSpringboot,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiSass,
  SiPython,
  SiGithub,
  SiGit,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
import PropTypes from "prop-types";

// Lista de iconos con tamaños y colores específicos
const iconsRI = [
  { icon: RiReactjsFill, size: 35, color: "#61DAFB" },
  { icon: RiNextjsFill, size: 35, color: "#ffffff" },
  { icon: RiJavascriptFill, size: 35, color: "#F7DF1E" },
  { icon: RiNodejsFill, size: 35, color: "#339933" },
  { icon: RiJavaFill, size: 35, color: "#007396" },
  { icon: RiTailwindCssFill, size: 35, color: "#38B2AC" },
];

const iconsSI = [
  { icon: SiSpringboot, size: 35, color: "#6DB33F" },
  { icon: SiPhp, size: 40, color: "#777BB4" },
  { icon: SiMysql, size: 40, color: "#4479A1" },
  { icon: SiMongodb, size: 40, color: "#47A248" },
  { icon: SiCss3, size: 30, color: "#1572B6" },
  { icon: SiHtml5, size: 40, color: "#E34F26" },
  { icon: SiSass, size: 40, color: "#CC6699" },
  { icon: SiPython, size: 35, color: "#3776AB" },
  { icon: SiGithub, size: 40, color: "#181717" },
  { icon: SiGit, size: 40, color: "#F05032" },
  { icon: SiFigma, size: 40, color: "#F24E1E" },
  { icon: SiTypescript, size: 30, color: "#3178C6" },
];

const TechnologySphere = ({ Icon, size, color, position }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <Html center>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}>
        <Icon style={{ color, fontSize: `${size}px` }} />
      </div>
    </Html>
  </group>
);

TechnologySphere.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// Función para generar posiciones en una esfera utilizando el método de Fibonacci
const fibonacciSphere = (samples, radius) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // ángulo de oro en radianes

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
};

const TechnologySpheres = () => {
  const groupRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.1); // Control de velocidad
  const positions = fibonacciSphere(iconsRI.length + iconsSI.length, 3.0);

  // Ajuste la velocidad de rotación en función del desplazamiento del scroll
  const handleScroll = (event) => {
    setRotationSpeed(event.deltaY * 0.0005); // Aumenta o disminuye la velocidad según el scroll
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll); // Detecta el desplazamiento
    return () => {
      window.removeEventListener("wheel", handleScroll); // Limpia el evento
    };
  }, []);

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * rotationSpeed; // Aplica la rotación con la velocidad ajustada
  });

  return (
    <group ref={groupRef}>
      {iconsRI.concat(iconsSI).map((iconObj, index) => {
        const position = positions[index];
        return (
          <React.Fragment key={index}>
            <TechnologySphere
              Icon={iconObj.icon}
              size={iconObj.size}
              color={iconObj.color}
              position={position}
            />
          </React.Fragment>
        );
      })}
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-[100%] lg:w-1/2 h-[500px] relative z-10'>
      {" "}
      {/* Controlas el tamaño del Canvas */}
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <group rotation={[0, 0, Math.PI / 4]}>
            <TechnologySpheres />
          </group>
        </Suspense>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
