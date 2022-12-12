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



// add texture
const textureloaderClient = new THREE.TextureLoader();
const clientTexture = textureloaderClient.load('public/assets/images/logo.png');

// add ambient light


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// add directional light

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);


const geometry2 = new THREE.BoxGeometry( 0.18, 0.007, 0.11 );
const material2 = new THREE.MeshBasicMaterial( { map: clientTexture } );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.set(-0.1, 0.199, -0.197);
cube2.rotation.x = -0.2;
cube2.rotation.y = -9;
scene.add( cube2 );


// make a green cube
const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
var material = new THREE.MeshLambertMaterial({color: 0xFF0000});
const cube = new THREE.Mesh( geometry, material );
cube.position.set(-0.1, 0.299, -0.197);
scene.add( cube );


const loader = new GLTFLoader();

loader.load("/assets/lowpolydonut_dough.glb", (gltf) => {
  const dough = gltf.scene;
  dough.scale.set(7, 7, 7);
  dough.position.set(0, 0.07, 0);
  scene.add(dough);
});

const loader2 = new GLTFLoader();

loader2.load("/assets/lowpolydonut_icing_blue.glb", (gltf) => {
  const icing = gltf.scene;

  icing.scale.set(6.5, 6.5, 6.5);
  icing.position.set(0, 0.1, 0);
  scene.add(icing);
 

});

// change color of mesh
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("clicked");
    cube.material.visible = false;
    cube.material.color.setHex( 0xcf4f8f );});



const loader3 = new GLTFLoader();

loader3.load("/assets/lowpolydonut_sprinkles.glb", (gltf) => {
  const sprinkles = gltf.scene;

  sprinkles.scale.set(0, 0, 0);
  sprinkles.position.set(0, 0.15, 0);
  // background color 
  renderer.setClearColor(0xFF98C9, 1);
  scene.add(sprinkles);


var btnSprinkles = document.getElementById("btnSprinkles");
btnSprinkles.addEventListener("click", () => {
  console.log("clicked");
    sprinkles.scale.set(9.1, 9.1, 9.1);
  });

});









camera.lookAt(scene.position);


camera.position.z = 7;
camera.position.y = 4.5;
camera.lookAt(scene.position);






function animate() {
  

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();