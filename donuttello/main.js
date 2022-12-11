import './style.css'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader, Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 1;
controls.autoRotatespeed = 30;
controls.autoRotate = true;


const textureloaderClient = new THREE.TextureLoader();
const clientTexture = textureloaderClient.load('public/assets/images/donuttello_grid.png');

// add ambient light


const ambientLight = new THREE.AmbientLight(0xffffff, 1);
ambientLight.position.set(1, -1, 1);
scene.add(ambientLight);


const geometry = new THREE.BoxGeometry( 0.17, 0.007, 0.12 );
const material = new THREE.MeshBasicMaterial( { map: clientTexture } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 0.15, 0);
scene.add( cube );






const loader = new GLTFLoader();


loader.load("/assets/donut.glb", (gltf) => {
  const huitfois = gltf.scene;
  huitfois.scale.set(2.3, 2.3, 2.3);
  huitfois.position.set(0, 0.15, 0);
  scene.add(huitfois);
  scene.background = new THREE.Color( 0xffffff );

});

camera.lookAt(scene.position);


camera.position.z = 1;
camera.position.y = 1;
camera.lookAt(scene.position);



function animate() {
  

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();