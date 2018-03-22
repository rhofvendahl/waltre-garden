import './styles.css';
// import * as THREE from 'three';
// var OrbitControls = require('three-orbit-controls')(THREE);
// import * as TWEEN from 'tween.js';
// import { MaplePart} from './maple';
// import { Soil } from './soil';
// import { Time } from './time';
// import { Waltre } from './waltre';


$(document).ready(function() {
  function displayMessage(wasUser, isUser, message) {
    var outerClass = "";
    if (isUser) outerClass += " class='alignRight'";

    var innerClass = " class='msg";
    if (wasUser != isUser) innerClass += " newSpeaker";
    if (isUser) innerClass += " msg-user'";
    else innerClass += " msg-waltre'";

    $(".chat-log").append("<div" + outerClass + "><div" + innerClass + ">" + message + "</div></div>");
  }

  $(".chat-form").submit(function(event) {
    event.preventDefault();
    var userInput = $(".chat-input").val();
    displayMessage(false, true, userInput);
    displayMessage(true, true, userInput);
    displayMessage(true, false, "echo: " + userInput);
    $(".chat-input").val("");
    $(".chat-log").scrollTop($(".chat-log")[0].scrollHeight);
  });
  // var growthStart = true;

  // var time = new Time();
  // // time.setRate(2);
  //
  // var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.setSize( window.innerWidth, window.innerHeight);
  // document.body.appendChild( renderer.domElement);
  //
  // var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.position.set(0, 1.5, 6);
  // // camera.lookAt(0, 8, 0);
  //
  // var scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xdbf4ff );
  //
  // var directional = new THREE.DirectionalLight( 0xfffed3, 1);
  // directional.castShadow = true;
  // directional.position.set( 0, 10, 0 );
  // scene.add(directional);
  //
  // var ambient = new THREE.AmbientLight(0x606060, 4);
  // scene.add(ambient);
  //
  // var maple1 = new MaplePart(undefined, "trunk");
  // var maple2 = new MaplePart(undefined, "trunk");
  // var maple3 = new MaplePart(undefined, "trunk");
  // var maple4 = new MaplePart(undefined, "trunk");
  // var maple5 = new MaplePart(undefined, "trunk");
  // var maple6 = new MaplePart(undefined, "trunk");
  // var maple7 = new MaplePart(undefined, "trunk");
  //
  //
  // //medium center
  // maple2.group.position.x = -1;
  // maple2.group.position.y = -.2;
  // maple2.group.position.z = -2;
  // maple2.group.scale.set(4,5,4);
  // scene.add(maple2.group);
  //
  // //small farback
  // maple3.group.position.x = 2;
  // maple3.group.position.y = -.5;
  // maple3.group.position.z = -7;
  // maple3.group.scale.set(3,4,3);
  // scene.add(maple3.group);
  //
  // //medium backright
  // maple4.group.position.x = 2.6;
  // maple4.group.position.y = -.5;
  // maple4.group.position.z = -3.3;
  // maple4.group.scale.set(3,4,3);
  // scene.add(maple4.group);
  //
  // //medium back center
  // maple7.group.position.x = -2;
  // maple7.group.position.y = -.5;
  // maple7.group.position.z = -5;
  // maple7.group.scale.set(4,5,4);
  // scene.add(maple7.group);
  //
  // //small left
  // maple1.group.position.x = -4;
  // maple1.group.position.y = -.5;
  // maple1.group.position.z = -4;
  // maple1.group.scale.set(3,4,3);
  // scene.add(maple1.group);
  //
  // //small back left
  // maple5.group.position.x = -4;
  // maple5.group.position.y = -.5;
  // maple5.group.position.z = -6;
  // maple5.group.scale.set(2.5,3,2.5);
  // scene.add(maple5.group);
  //
  // //small back right
  // maple6.group.position.x = 4;
  // maple6.group.position.y = -.5;
  // maple6.group.position.z = -6;
  // maple6.group.scale.set(2.5,3,2.5);
  // scene.add(maple6.group);
  //
  // var soil = new Soil();
  // scene.add(soil.group);
  //
  // // var roots = new RootPart(undefined);
  // // roots.group.rotation.x = Math.PI;
  // // scene.add(roots.group);
  //
  // var waltre = new Waltre();
  // scene.add(waltre.group);
  //
  // var controls = new OrbitControls(camera,  renderer.domElement);
  // controls.addEventListener('change', function() {renderer.render(scene, camera);});
  //
  // time.update();
  // maple1.update(time);
  // maple2.update(time);
  // maple3.update(time);
  // maple4.update(time);
  // maple5.update(time);
  // maple6.update(time);
  // maple7.update(time);
  //
  // // roots.update(time);
  //
  // // $(document.body).mousemove(function(event) {
  // //   console.log(event.clientX + " " + event.clientY);
  // // });
  //
  // function animate() {
  //   time.update();
  //   requestAnimationFrame(animate);
  //   // scene.rotation.y += .002 * time.timeRate;
  //   TWEEN.update();
  //   if (growthStart) maple1.update(time);
  //   if (growthStart) maple2.update(time);
  //   if (growthStart) maple3.update(time);
  //   if (growthStart) maple4.update(time);
  //   if (growthStart) maple5.update(time);
  //   if (growthStart) maple6.update(time);
  //   if (growthStart) maple7.update(time);
  //
  //   // if (growthStart) roots.update(time);
  //   renderer.render(scene, camera);
  // }
  // animate();
});
