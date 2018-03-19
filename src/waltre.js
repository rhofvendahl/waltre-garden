import * as THREE from 'three';

export function Waltre() {

  this.group = new THREE.Group();

  var terracotta = new THREE.MeshLambertMaterial({color: 0x664d37});
  terracotta.side = THREE.DoubleSide;
  var earth = new THREE.MeshLambertMaterial({color: 0x4d3d2f});

  var upperBody = new THREE.Group();
  // upperBody.rotation.x = Math.PI/16;
  this.group.add(upperBody);

  var neckGeometry = new THREE.CylinderGeometry(.025, .05, .1, 24);
  neckGeometry.translate(0, .05, 0);
  var neck = new THREE.Mesh(neckGeometry, earth);
  // // neck.rotation.x = Math.PI/16; //lower thigh
  // // leftThigh.rotation.y = -Math.PI/4; //torque thigh
  // // leftUpperArm.rotation.z = Math.PI/2; //spread thigh
  neck.position.y = .6;
  upperBody.add(neck);

  var headGroup = new THREE.Group();
  headGroup.position.y = .2;
  neck.add(headGroup);

  var headGeometry = new THREE.CylinderGeometry(.15, .15, .15, 24, 1, true);
  headGeometry.translate(0, .075, 0);
  var head = new THREE.Mesh(headGeometry, terracotta);
  headGroup.add(head);

  var foreheadGeometry = new THREE.CylinderGeometry(.165, .165, .09, 24, 1, true);
  var forehead = new THREE.Mesh(foreheadGeometry, terracotta);
  forehead.position.y = .12;
  headGroup.add(forehead);

  var innerHeadGeometry = new THREE.CylinderGeometry(.145, .145, .09, 24, 1, true);
  var innerHead = new THREE.Mesh(innerHeadGeometry, terracotta);
  innerHead.position.y = .12;
  headGroup.add(innerHead);

  var brainGeometry = new THREE.CylinderGeometry(.145, .145, .05, 24);
  var brain = new THREE.Mesh(brainGeometry, earth);
  brain.position.y = .12;
  headGroup.add(brain);

  var rimGeometry = new THREE.RingGeometry(.145, .165, 24);
  var upperRim = new THREE.Mesh(rimGeometry, terracotta);
  var lowerRim = new THREE.Mesh(rimGeometry, terracotta);
  upperRim.rotation.x = -Math.PI/2;
  lowerRim.rotation.x = Math.PI/2;
  upperRim.position.y = .165;
  lowerRim.position.y = .075;
  headGroup.add(upperRim);
  headGroup.add(lowerRim);


  var chinGeometry = new THREE.SphereGeometry(.15, 24, 24);
  var chin = new THREE.Mesh(chinGeometry, terracotta);
  // chin.scale.set(1, .8, 1);
  headGroup.add(chin);

  var noseGeometry = new THREE.CylinderGeometry(.015, .025, .07, 24);
  var nose = new THREE.Mesh(noseGeometry, terracotta);
  nose.position.y = 0;
  nose.position.z = .135;
  headGroup.add(nose);

  // var noseBridgeGeometry = new THREE.CylinderGeometry(.06, .017, .018, 24);
  // var noseBridge = new THREE.Mesh(noseBridgeGeometry, terracotta);
  // noseBridge.position.y = .07;
  // noseBridge.position.z = .135;
  // noseBridge.scale.set(1, 1, .4)
  // headGroup.add(noseBridge);

  var torsoGeometry = new THREE.SphereGeometry(.5, 24, 24);
  var torso = new THREE.Mesh(torsoGeometry, terracotta);
  torso.position.y = .29;
  torso.scale.set(.45, .7, .35);
  upperBody.add(torso);

  var leftShoulderGroup = new THREE.Group();
  var rightShoulderGroup = new THREE.Group();
  leftShoulderGroup.position.y = .5;
  rightShoulderGroup.position.y = .5;
  leftShoulderGroup.rotation.z = 3*Math.PI/8;
  rightShoulderGroup.rotation.z = -3*Math.PI/8;
  upperBody.add(leftShoulderGroup);
  upperBody.add(rightShoulderGroup);

  var shoulderGeometry = new THREE.CylinderGeometry(.025, .04, .1, 24);
  // var shoulderGeometry = new THREE.SphereGeometry(.07, 24, 24);
  var leftShoulder = new THREE.Mesh(shoulderGeometry, earth);
  var rightShoulder = new THREE.Mesh(shoulderGeometry, earth);
  leftShoulder.position.y = .16;
  rightShoulder.position.y = .16;
  // leftShoulder.scale.set(1, .7, 1);
  // rightShoulder.scale.set(1, .7, 1);
  leftShoulderGroup.add(leftShoulder);
  rightShoulderGroup.add(rightShoulder);

  var upperArmGeometry = new THREE.CylinderGeometry(.07, .05, .4, 24);
  upperArmGeometry.translate(0, .2, 0);
  var leftUpperArm = new THREE.Mesh(upperArmGeometry, terracotta);
  var rightUpperArm = new THREE.Mesh(upperArmGeometry, terracotta);
  leftUpperArm.rotation.y = Math.PI/16; //lower thigh
  // leftThigh.rotation.y = -Math.PI/4; //torque thigh
  leftUpperArm.rotation.z = Math.PI/2; //spread thigh
  rightUpperArm.rotation.y = -Math.PI/16;
  // rightThigh.rotation.y = Math.PI/4;
  rightUpperArm.rotation.z = -Math.PI/2; //spread thigh
  leftUpperArm.position.y = .24;
  rightUpperArm.position.y = .24;
  leftShoulderGroup.add(leftUpperArm);
  rightShoulderGroup.add(rightUpperArm);

  var armTopGeometry = new THREE.SphereGeometry(.05, 24, 24);
  var leftArmTop = 	new THREE.Mesh(armTopGeometry, terracotta);
  var rightArmTop = 	new THREE.Mesh(armTopGeometry, terracotta);
  leftUpperArm.add(leftArmTop);
  rightUpperArm.add(rightArmTop);

  var forearmGeometry = new THREE.CylinderGeometry(.07, .07, .4, 24);
  forearmGeometry.translate(0, .2, 0);
  var leftForearm = new THREE.Mesh(forearmGeometry, terracotta);
  var rightForearm = new THREE.Mesh(forearmGeometry, terracotta);
  leftForearm.rotation.x = 4*Math.PI/8; //lower thigh
  // // leftForearm.rotation.y = -Math.PI/4; //torque thigh
  leftForearm.rotation.z = Math.PI/4; //spread thigh
  rightForearm.rotation.x = 4*Math.PI/8;
  // // rightForearm.rotation.y = Math.PI/4;
  rightForearm.rotation.z = -Math.PI/4; //spread thigh
  leftForearm.position.y = .4;
  rightForearm.position.y = .4;
  leftUpperArm.add(leftForearm);
  rightUpperArm.add(rightForearm);

  var elbowGeometry = new THREE.SphereGeometry(.07, 24, 24);
  var leftElbow = 	new THREE.Mesh(elbowGeometry, terracotta);
  var rightElbow = 	new THREE.Mesh(elbowGeometry, terracotta);
  leftForearm.add(leftElbow);
  rightForearm.add(rightElbow);

  var thighGeometry = new THREE.CylinderGeometry(.09, .11, .5, 24);
  thighGeometry.translate(0, .25, 0);
  var leftThigh = new THREE.Mesh(thighGeometry, terracotta);
  var rightThigh = new THREE.Mesh(thighGeometry, terracotta);
  leftThigh.rotation.x = Math.PI/4; //lower thigh
  leftThigh.rotation.y = -Math.PI/4; //torque thigh
  leftThigh.rotation.z = -Math.PI/4; //spread thigh
  rightThigh.rotation.x = Math.PI/4;
  rightThigh.rotation.y = Math.PI/4;
  rightThigh.rotation.z = Math.PI/4; //spread thigh
  leftThigh.position.x = .1;
  rightThigh.position.x = -.1;
  this.group.add(leftThigh);
  this.group.add(rightThigh);

  var hipGeometry = new THREE.SphereGeometry(.11, 24, 24);
  var leftHip = 	new THREE.Mesh(hipGeometry, terracotta);
  var rightHip = 	new THREE.Mesh(hipGeometry, terracotta);
  leftThigh.add(leftHip);
  rightThigh.add(rightHip);

  var calfGeometry = new THREE.CylinderGeometry(.07, .09, .5, 24);
  calfGeometry.translate(0, .25, 0);
  var leftCalf = new THREE.Mesh(calfGeometry, terracotta);
  var rightCalf = new THREE.Mesh(calfGeometry, terracotta);
  leftCalf.rotation.x = 11*Math.PI/16; //bend knees
  rightCalf.rotation.x = 13*Math.PI/16;
  leftCalf.rotation.z = Math.PI/16;
  rightCalf.rotation.z = -Math.PI/16;

  leftThigh.add(leftCalf);
  rightThigh.add(rightCalf);
  leftCalf.position.y = .5;
  rightCalf.position.y = .5;

  var kneeGeometry = new THREE.SphereGeometry(.09, 24, 24);
  var leftKnee = 	new THREE.Mesh(kneeGeometry, terracotta);
  var rightKnee = 	new THREE.Mesh(kneeGeometry, terracotta);
  leftCalf.add(leftKnee);
  rightCalf.add(rightKnee);

  // var hips = new THREE.Group();
  // var rightHip = new THREE.Group();
  // var leftHipMesh = 	new THREE.Mesh(hipGeometry , terracotta );
  // var rightHipMesh = leftHipMesh.clone();
  // leftHip.add(leftHipMesh);
  // rightHip.add(rightHipMesh);
  // hips.add(leftHip);
  // hips.add(rightHip);
  // waltre.add(hips);

  // var sternum = new THREE.Group();
  // waltre.add(sternum);
  //
  // var body = new THREE.Mesh(chestGeometry , terracotta );
  // chest.scale(.02,.1,.03);
  // waltre.add(body);
  // // var chest = new THREE.mesh(chestGeometry, terracotta);
  // // bum.add(chest);
  // scene.add(chest);
}
