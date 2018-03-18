import './styles.css';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
import * as TWEEN from 'tween.js';
import { MaplePart, dispose } from './maple';
import { Soil } from './soil';
import { RootPart } from './roots';
import { Lighting } from './lighting';
import { Time } from './time';

function rotateAndTilt(x, y) {
  return new THREE.Euler(x * Math.PI / 180, y * Math.PI / 180, 0, 'YXZ');
}


function Stars() {
  this.group = new THREE.Group();
  var material = new THREE.MeshStandardMaterial( {emissive: 0xffffee, emissiveIntensity: 1, color: 0x000000 });
  var starField = new THREE.Geometry();
  for (var i = 0; i < 500; i++) {
    var radius = .05;//Math.random()*.005 + .005;
    var geometry = new THREE.SphereGeometry(radius, 2, 2 );
    var distance = 5 + Math.random()*30;
    geometry.translate(distance, distance, distance);
    var star = new THREE.Mesh( geometry );
    star.quaternion.setFromEuler(rotateAndTilt(Math.random() * 360, Math.random() * 360));
    star.updateMatrix();
    starField.merge(star.geometry, star.matrix);
  }
  var bufferGeo = new THREE.BufferGeometry();
  bufferGeo.fromGeometry(starField);
  this.group.add(new THREE.Mesh(bufferGeo, material));
}

$(document).ready(function() {
  var growthStart = true;
  // document.getElementById('hideMessage').addEventListener( 'click', function() {
  //   growthStart = true;
  //   document.getElementById('welcome').style.display = 'none';
  // });

  var time = new Time();
  time.setRate(1);
  // document.getElementById("timeRate").oninput = function() {
  //   time.setRate(document.getElementById("timeRate").value);
  // };

  // var geometry = new Geometry();
  // geometry.init();

  var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  renderer.setSize( window.innerWidth, window.innerHeight);
  // renderer.shadowMapEnabled = true;\
  console.log("hey");
  console.log(renderer.domElement);
  document.body.appendChild( renderer.domElement);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, .3, 2.5);
  camera.lookAt(new THREE.Vector3(0, 5, 0));

  var scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );


  var lighting = new Lighting();
  scene.add(lighting.group);

  var stars = new Stars();
  scene.add(stars.group);

  var maple = new MaplePart(undefined, "trunk");
  scene.add(maple.group);

  var soil = new Soil();
  scene.add(soil.group);

  var roots = new RootPart(undefined);
  roots.group.rotation.x = Math.PI;
  scene.add(roots.group);


  $("#resetIcon").click(function() {
    scene.remove(maple.group);
    dispose(maple.group);

    maple = new MaplePart(undefined, "trunk");
    scene.add(maple.group);

    scene.remove(roots.group);
    dispose(roots.group);

    roots = new RootPart(undefined);
    roots.group.rotation.x = Math.PI;
    scene.add(roots.group);
  });

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
    soil.update(time);
    if (growthStart) maple.update(time);
    if (growthStart) roots.update(time);
    lighting.update(time);
    renderer.render(scene, camera);
    // lastTime = Date.now();
  }
  animate();
});
