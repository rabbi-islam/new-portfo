/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
	const computer = useGLTF("./desktop_pc/scene.glb");

	return (
		<mesh>
			<hemisphereLight intensity={2} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={10}
				castShadow
				shadow-mapSize={1024}
			/>
			{/* <ambientLight intensity={1.5} /> */}
			<pointLight intensity={5} />
			<primitive
				object={computer.scene}
				scale={0.75}
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

Computers.propTypes = {
	isMobile: PropTypes.bool,
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			gl={{ preserveDrawingBuffer: true, alpha: true }}
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
