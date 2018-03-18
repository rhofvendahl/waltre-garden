import './styles.css';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
import * as TWEEN from 'tween.js';
import { MaplePart} from './maple';
import { Soil } from './soil';
import { RootPart } from './roots';
import { Time } from './time';


$(document).ready(function() {
  var growthStart = true;

  var time = new Time();
  time.setRate(1);

  var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, .3, 2.5);
  camera.lookAt(new THREE.Vector3(0, 5, 0));

  var scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xdbf4ff );

  var directional = new THREE.DirectionalLight( 0xfffed3, 1);
  directional.castShadow = true;
  directional.position.set( 0, 10, 0 );
  scene.add(directional);

  var ambient = new THREE.AmbientLight(0x606060, 4);
  scene.add(ambient);

  var maple = new MaplePart(undefined, "trunk");
  scene.add(maple.group);

  var soil = new Soil();
  scene.add(soil.group);

  var roots = new RootPart(undefined);
  roots.group.rotation.x = Math.PI;
  scene.add(roots.group);

  var controls = new OrbitControls(camera,  renderer.domElement);
  controls.addEventListener('change', function() {renderer.render(scene, camera);});

  time.update();
  maple.update(time);
  roots.update(time);

  function animate() {
    time.update();
    requestAnimationFrame(animate);
    scene.rotation.y += .002 * time.timeRate;
    TWEEN.update();
    if (growthStart) maple.update(time);
    if (growthStart) roots.update(time);
    renderer.render(scene, camera);
  }
  animate();
});
