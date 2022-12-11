import './style.css'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader, Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Donut from "./Donut/Donut.js"

const donut = new Donut(document.querySelector(".donut-canvas"));

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


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// add directional light

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);


const geometry = new THREE.BoxGeometry( 0.17, 0.007, 0.12 );
const material = new THREE.MeshBasicMaterial( { map: clientTexture } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(-0.1, 0.265, -0.197);
cube.rotation.x = -0.2;
cube.rotation.y = 0.2;
scene.add( cube );






const loader = new GLTFLoader();

loader.load("/assets/lowpolydonut_dough.glb", (gltf) => {
  const dough = gltf.scene;
  dough.scale.set(7, 7, 7);
  dough.position.set(0, 0.13, 0);
  scene.add(dough);
});

const loader2 = new GLTFLoader();

loader2.load("/assets/lowpolydonut_icing_blue.glb", (gltf) => {
  const icing = gltf.scene;
  icing.scale.set(7.35, 7.35, 7.35);
  icing.position.set(0, 0.15, 0);
  scene.add(icing);
 

});

const loader3 = new GLTFLoader();

loader3.load("/assets/lowpolydonut_sprinkles.glb", (gltf) => {
  const sprinkles = gltf.scene;
  sprinkles.scale.set(9.5, 7.5, 9.5);
  sprinkles.position.set(0, 0.22, 0);
  // background color 
  renderer.setClearColor(0xFF98C9, 1);
  scene.add(sprinkles);



});


camera.lookAt(scene.position);


camera.position.z = 5;
camera.position.y = 4;
camera.lookAt(scene.position);



function animate() {
  

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();