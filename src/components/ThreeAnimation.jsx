import React, {  useRef} from "react";
import * as THREE from "three";
import { Canvas, extend, useLoader, useFrame } from "@react-three/fiber";
import { Effects, OrbitControls, OrthographicCamera, Sparkles, Cloud, Edges } from '@react-three/drei'
import { UnrealBloomPass } from "three-stdlib";
import logo from "../images/icon.png"
// import logo from "@images/code-and-play-logo.png";

extend({ UnrealBloomPass })

const CanvasAnimation = () => {
    const repeatX = 1;
    const repeatY = 1;
    const base = useLoader(THREE.TextureLoader, logo);
    base.wrapS = THREE.RepeatWrapping;
    base.wrapT = THREE.RepeatWrapping;
    base.repeat.set(repeatX, repeatY);

    const orbitControlRef = useRef(null)
    // const directionalLightRef = useRef(null)

    // useFrame((state)=> {
    //     if (!!orbitControlRef.current) {
    //     const {x ,y } = state.mouse
    //     orbitControlRef.current.setAzimuthalAngle( - x* (Math.PI/2))
    //     orbitControlRef.current.setPolarAngle(y/3 * Math.PI /6 + Math.PI/2.5)
    //     }
    // })


    return (
        <Canvas shadows gl={{ antialias: false }}>
            <color  args={["#202030"]} />
            <mesh scale={1.5}>
                <boxGeometry args={[1,1,1]} />
                {/* <meshPhysicalMaterial/> */}
                <meshPhysicalMaterial map={base} />
                <Edges
                    scale={1.1}
                    threshold={2}
                    color="#000000"
                />
            </mesh>

            {/* lights */}
            <OrbitControls  enableZoom={false} />
            <OrthographicCamera makeDefault far={500} near={0.1} position={[-10, 2, -10]} zoom={100}  />
            {/* <ambientLight color="red" /> */}
            <directionalLight color="red" intensity={1} position={[-10, -10, -10]} />
            <directionalLight color="purple" intensity={1} position={[10, 10, 10]} />
            {/* <hemisphereLight intensity={1} color={"red"} groundColor={"blue"} /> */}

            <Sparkles count={200} scale={[20, 20, 10]} size={1} speed={0.01} />
            <fog attach={"fog"} args={["#202030", 5, 25]} />

            <Cloud
                opacity={0.1}
                speed={0.1}
                width={30}
                depth={0.1}
                segments={40}
            />

            <Effects disableGamma>
                <unrealBloomPass threshold={1} strength={2.0} radius={0.5} />
            </Effects>
        </Canvas>
    )
}

export default CanvasAnimation