import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './ThreeScene.css';

interface ThreeSceneProps {
	className?: string;
}

function ThreeScene({ className = '' }: ThreeSceneProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const sceneRef = useRef<THREE.Scene | null>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
	const frameId = useRef<number | null>(null);
	const scrollY = useRef(0);
	const [isLoaded, setIsLoaded] = useState(false);

	// Refs para objetos 3D
	const meshesRef = useRef<THREE.Object3D[]>([]);
	const particlesRef = useRef<THREE.Points | null>(null);
	const lightsRef = useRef<THREE.Light[]>([]);

	useEffect(() => {
		if (!containerRef.current) return;

		// Crear canvas personalizado
		const canvas = document.createElement('canvas');
		canvas.style.position = 'absolute';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.style.zIndex = '10';
		canvas.style.pointerEvents = 'none';
		containerRef.current.appendChild(canvas);
		canvasRef.current = canvas;

		// Obtener dimensiones del contenedor
		const containerRect = containerRef.current.getBoundingClientRect();
		const containerWidth = containerRect.width || window.innerWidth;
		const containerHeight = containerRect.height || window.innerHeight;

		// Configuración de la escena Three.js
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			containerWidth / containerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true,
		});

		renderer.setSize(containerWidth, containerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0); // Fondo transparente

		// Guardar referencias
		sceneRef.current = scene;
		rendererRef.current = renderer;
		cameraRef.current = camera;

		// Crear geometrías espectaculares
		createSpectacularGeometries(scene);
		createParticleSystem(scene);
		createDynamicLights(scene);

		// Posicionar cámara
		camera.position.z = 8;

		setIsLoaded(true);

		// Manejar resize
		const handleResize = () => {
			if (!camera || !renderer || !containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const width = rect.width || window.innerWidth;
			const height = rect.height || window.innerHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (frameId.current) {
				cancelAnimationFrame(frameId.current);
			}
			if (canvas && containerRef.current) {
				containerRef.current.removeChild(canvas);
			}
			renderer.dispose();
		};
	}, []);

	const createSpectacularGeometries = (scene: THREE.Scene) => {
		const meshes: THREE.Object3D[] = [];

		// 1. Cubo holográfico rotante con wireframe
		const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
		const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
		const cubeMaterial = new THREE.LineBasicMaterial({
			color: 0x00ff88,
			transparent: true,
			opacity: 0.8,
		});
		const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeMaterial);
		cubeWireframe.position.set(-4, 2, 0);
		scene.add(cubeWireframe);
		meshes.push(cubeWireframe);

		// 2. Esfera con material brillante
		const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
		const sphereMaterial = new THREE.MeshPhongMaterial({
			color: 0xff3366,
			transparent: true,
			opacity: 0.7,
			shininess: 100,
			wireframe: true,
		});
		const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphere.position.set(4, -1, 0);
		scene.add(sphere);
		meshes.push(sphere);

		// 3. Torus knot hipnótico
		const torusGeometry = new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16);
		const torusMaterial = new THREE.MeshPhongMaterial({
			color: 0x3366ff,
			transparent: true,
			opacity: 0.6,
			wireframe: true,
		});
		const torus = new THREE.Mesh(torusGeometry, torusMaterial);
		torus.position.set(0, -3, 0);
		scene.add(torus);
		meshes.push(torus);

		// 4. Octahedron cristalino
		const octaGeometry = new THREE.OctahedronGeometry(1);
		const octaEdges = new THREE.EdgesGeometry(octaGeometry);
		const octaMaterial = new THREE.LineBasicMaterial({
			color: 0xffaa00,
			transparent: true,
			opacity: 0.9,
		});
		const octaWireframe = new THREE.LineSegments(octaEdges, octaMaterial);
		octaWireframe.position.set(-2, -1, 3);
		scene.add(octaWireframe);
		meshes.push(octaWireframe);

		// 5. Icosahedron energético
		const icoGeometry = new THREE.IcosahedronGeometry(0.8, 1);
		const icoMaterial = new THREE.MeshPhongMaterial({
			color: 0xaa00ff,
			transparent: true,
			opacity: 0.8,
			wireframe: true,
		});
		const ico = new THREE.Mesh(icoGeometry, icoMaterial);
		ico.position.set(3, 2, -2);
		scene.add(ico);
		meshes.push(ico);

		// 6. Dodecahedron místico
		const dodecaGeometry = new THREE.DodecahedronGeometry(0.7);
		const dodecaMaterial = new THREE.MeshPhongMaterial({
			color: 0x00aaff,
			transparent: true,
			opacity: 0.7,
			wireframe: true,
		});
		const dodeca = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
		dodeca.position.set(-3, 0, -1);
		scene.add(dodeca);
		meshes.push(dodeca);

		meshesRef.current = meshes;
	};

	const createParticleSystem = (scene: THREE.Scene) => {
		const particleCount = 2000;
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);
		const sizes = new Float32Array(particleCount);

		for (let i = 0; i < particleCount; i++) {
			// Posiciones aleatorias en una esfera
			const radius = 15;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);

			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);

			// Colores vibrantes basados en posición
			const hue = (positions[i * 3] + positions[i * 3 + 1]) * 0.01;
			const color = new THREE.Color().setHSL(hue, 1, 0.7);
			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;

			// Tamaños variables
			sizes[i] = Math.random() * 5 + 1;
		}

		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		);
		particleGeometry.setAttribute(
			'color',
			new THREE.BufferAttribute(colors, 3)
		);
		particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

		const particleMaterial = new THREE.PointsMaterial({
			size: 0.1,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);
		particlesRef.current = particles;
	};

	const createDynamicLights = (scene: THREE.Scene) => {
		const lights: THREE.Light[] = [];

		// Luz ambiental suave
		const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
		scene.add(ambientLight);
		lights.push(ambientLight);

		// Luz direccional principal
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight.position.set(10, 10, 5);
		scene.add(directionalLight);
		lights.push(directionalLight);

		// Luces de colores que se mueven
		const colors = [0xff0066, 0x0066ff, 0x66ff00, 0xff6600, 0x6600ff, 0x00ffff];

		colors.forEach((color, index) => {
			const pointLight = new THREE.PointLight(color, 1, 20);
			pointLight.position.set(
				Math.cos(index * 2) * 5,
				Math.sin(index * 3) * 3,
				Math.cos(index * 1.5) * 4
			);
			scene.add(pointLight);
			lights.push(pointLight);
		});

		lightsRef.current = lights;
	};

	useEffect(() => {
		const handleScroll = () => {
			scrollY.current = window.scrollY;
		};

		const animate = () => {
			frameId.current = requestAnimationFrame(animate);

			if (!sceneRef.current || !rendererRef.current || !cameraRef.current)
				return;

			const time = Date.now() * 0.001;
			const scroll = scrollY.current * 0.001; // Incrementar sensibilidad al scroll

			// Animar cámara basado en scroll - movimiento más dramático
			cameraRef.current.position.x = Math.sin(scroll * 2) * 3;
			cameraRef.current.position.y = Math.cos(scroll * 1.5) * 2;
			cameraRef.current.position.z = 8 + Math.sin(scroll) * 2;
			cameraRef.current.rotation.z = scroll * 0.2;

			// Animar geometrías con efectos espectaculares
			meshesRef.current.forEach((mesh, index) => {
				// Rotación múltiple más rápida
				mesh.rotation.x += 0.02 + index * 0.005;
				mesh.rotation.y += 0.015 + index * 0.007;
				mesh.rotation.z += 0.01 + index * 0.003;

				// Movimiento orbital basado en scroll
				mesh.position.x += Math.sin(time + index + scroll * 5) * 0.02;
				mesh.position.y += Math.cos(time * 1.5 + index + scroll * 3) * 0.02;
				mesh.position.z += Math.sin(time * 0.5 + index + scroll * 2) * 0.02;

				// Efectos de escala pulsante más pronunciados
				const scale = 1 + Math.sin(time * 3 + index + scroll * 10) * 0.3;
				mesh.scale.setScalar(scale);

				// Cambio de color dinámico basado en tiempo y scroll
				if (
					mesh instanceof THREE.Mesh &&
					mesh.material instanceof THREE.MeshPhongMaterial
				) {
					const hue = (time * 0.2 + index * 0.3 + scroll * 5) % 1;
					mesh.material.color.setHSL(hue, 1, 0.7);
				} else if (
					mesh instanceof THREE.LineSegments &&
					mesh.material instanceof THREE.LineBasicMaterial
				) {
					const hue = (time * 0.15 + index * 0.25 + scroll * 4) % 1;
					mesh.material.color.setHSL(hue, 1, 0.8);
				}
			});

			// Animar partículas de forma espectacular
			if (particlesRef.current) {
				// Rotación compleja del sistema de partículas
				particlesRef.current.rotation.x += 0.003;
				particlesRef.current.rotation.y += 0.005;
				particlesRef.current.rotation.z += 0.002;

				// Mover partículas individualmente
				const positions = particlesRef.current.geometry.attributes.position
					.array as Float32Array;
				const colors = particlesRef.current.geometry.attributes.color
					.array as Float32Array;

				for (let i = 0; i < positions.length; i += 3) {
					// Movimiento ondulatorio
					positions[i] += Math.sin(time * 2 + i * 0.1 + scroll * 10) * 0.02;
					positions[i + 1] +=
						Math.cos(time * 1.5 + i * 0.05 + scroll * 8) * 0.015;
					positions[i + 2] += Math.sin(time + i * 0.02 + scroll * 6) * 0.01;

					// Cambio de color dinámico
					const hue = (time * 0.1 + i * 0.001 + scroll * 2) % 1;
					const color = new THREE.Color().setHSL(hue, 1, 0.7);
					colors[i] = color.r;
					colors[i + 1] = color.g;
					colors[i + 2] = color.b;
				}

				particlesRef.current.geometry.attributes.position.needsUpdate = true;
				particlesRef.current.geometry.attributes.color.needsUpdate = true;
			}

			// Animar luces de forma dramática
			lightsRef.current.forEach((light, index) => {
				if (light instanceof THREE.PointLight) {
					// Movimiento orbital complejo
					const radius = 6 + index;
					light.position.x =
						Math.cos(time * 0.5 + index * 2 + scroll * 3) * radius;
					light.position.y =
						Math.sin(time * 0.7 + index * 1.5 + scroll * 2) * (radius * 0.7);
					light.position.z =
						Math.cos(time * 0.3 + index + scroll) * (radius * 0.5);

					// Intensidad pulsante basada en scroll
					light.intensity =
						0.8 + Math.sin(scroll * 15 + time * 2 + index) * 0.5;

					// Cambio de color
					const hue = (time * 0.1 + index * 0.2 + scroll * 3) % 1;
					light.color.setHSL(hue, 1, 0.6);
				}
			});

			rendererRef.current.render(sceneRef.current, cameraRef.current);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		animate();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (frameId.current) {
				cancelAnimationFrame(frameId.current);
			}
		};
	}, [isLoaded]);

	const generateParticles = () => {
		return Array.from({ length: 30 }, (_, index) => (
			<div
				key={`css-particle-${index}`}
				className={`particle particle--${index % 5}`}
				style={{
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animationDelay: `${Math.random() * 5}s`,
				}}
			/>
		));
	};

	return (
		<div
			ref={containerRef}
			className={`three-scene ${
				isLoaded ? 'three-scene--loaded' : ''
			} ${className}`}>
			{/* Fondo gradient animado */}
			<div className='three-scene__background' />

			{/* Partículas CSS adicionales */}
			<div className='three-scene__particles'>{generateParticles()}</div>

			{/* Efectos de luz CSS */}
			<div className='three-scene__lights'>
				<div className='light light--spotlight' />
				<div className='light light--ambient' />
				<div className='light light--point' />
			</div>

			{/* Ondas de energía */}
			<div className='three-scene__energy-waves'>
				<div className='energy-wave energy-wave--1' />
				<div className='energy-wave energy-wave--2' />
				<div className='energy-wave energy-wave--3' />
			</div>

			{/* Texto flotante con efecto de dispersión */}
			<div className='three-scene__floating-text'>
				<h1 className='floating-title'>
					{'EXPERIENCIA 3D'.split('').map((char, index) => (
						<span
							key={index}
							className='floating-char'
							style={{ animationDelay: `${index * 0.1}s` }}>
							{char === ' ' ? '\u00A0' : char}
						</span>
					))}
				</h1>
				<p className='floating-subtitle'>
					Scroll para explorar dimensiones infinitas con Three.js
				</p>
			</div>
		</div>
	);
}

export default ThreeScene;
