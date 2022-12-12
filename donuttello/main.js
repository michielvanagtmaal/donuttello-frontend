import './style.css'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader, Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Donut from "./Donut/Donut.js"

//const donut = new Donut(document.querySelector(".donut-canvas"));

const scene = new THREE.Scene();
const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
const canvas = document.getElementById('donut-canvas')

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true 
});
renderer.setSize(sizes.width, sizes.height);
//document.body.appendChild(renderer.domElement);

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

  icing.scale.set(6.5,6.5,6.5);
  icing.position.set(0, 0.1, 0);
  scene.add(icing);

loader2.load("/assets/lowpolydonut_icing_red.glb", (gltf) => {
  const icingRed = gltf.scene;

  icingRed.scale.set(0,0,0);
  icingRed.position.set(0, 0.1, 0);
  scene.add(icingRed);

loader2.load("/assets/lowpolydonut_icing_green.glb", (gltf) => {
    const icingGreen = gltf.scene;
  
    icingGreen.scale.set(0,0,0);
    icingGreen.position.set(0, 0.1, 0);
    scene.add(icingGreen);

loader2.load("/assets/lowpolydonut_icing_brown.glb", (gltf) => {
      const icingBrown = gltf.scene;
    
      icingBrown.scale.set(0,0,0);
      icingBrown.position.set(0, 0.1, 0);
      scene.add(icingBrown);

  

  var btnBlue = document.getElementById("btnBlue");
btnBlue.addEventListener("click", () => {
  console.log("clicked");
    icing.scale.set(6.5, 6.5, 6.5);
    icingRed.scale.set(0,0,0);
    icingGreen.scale.set(0,0,0);
    icingBrown.scale.set(0,0,0);
  });

  var btnRed = document.getElementById("btnRed");
  btnRed.addEventListener("click", () => {
    console.log("clicked");
      icing.scale.set(0, 0, 0);
      icingRed.scale.set(6.5,6.5,6.5);
      icingGreen.scale.set(0,0,0);
      icingBrown.scale.set(0,0,0);
    });

    var btnGreen = document.getElementById("btnGreen");
  btnGreen.addEventListener("click", () => {
    console.log("clicked");
      icing.scale.set(0, 0, 0);
      icingGreen.scale.set(6.5,6.5,6.5);
      icingRed.scale.set(0,0,0);
      icingBrown.scale.set(0,0,0);
    });


    var btnBrown = document.getElementById("btnBrown");
    btnBrown.addEventListener("click", () => {
      console.log("clicked");
        icing.scale.set(0, 0, 0);
        icingBrown.scale.set(6.5,6.5,6.5);
        icingRed.scale.set(0,0,0);
        icingGreen.scale.set(0,0,0);
      });

});
});
});
});





const loader3 = new GLTFLoader();

loader3.load("/assets/lowpolydonut_sprinkles.glb", (gltf) => {
  const sprinkles = gltf.scene;

  sprinkles.scale.set(0, 0, 0);
  sprinkles.position.set(0, 0.15, 0);
  // background color 
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