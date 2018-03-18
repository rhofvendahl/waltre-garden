import * as THREE from 'three';

function rotateAndTilt(x, y) {
  return new THREE.Euler(x * Math.PI / 180, y * Math.PI / 180, 0, 'YXZ');
}

export function Soil() {
  var topPoints = [];
  for (var i = 10; i >= 0; i--) {
    topPoints.push(new THREE.Vector2(i, Math.cos(Math.PI/20*i)));
  }
  var bottomPoints = [];
  for (i = 0; i <= 10; i++) {
    bottomPoints.push(new THREE.Vector2(i, -2*(1+Math.cos(Math.PI/10*i))));
  }

  var topGeometry = new THREE.LatheGeometry( topPoints, 6);
  var topMaterial = new THREE.MeshLambertMaterial( { color: 0x344b37 } );

  this.top = new THREE.Mesh( topGeometry, topMaterial );
  this.top.castShadow = true;
  this.top.receiveShadow = true;

  var rimGeometry = new THREE.TorusGeometry(10, .5, 16, 6);

  this.rim = new THREE.Mesh(rimGeometry, topMaterial);
  this.rim.rotation.x = Math.PI/2;
  this.rim.rotation.z = Math.PI/2;
  this.rim.position.y = -.5;

  this.group = new THREE.Group();
  this.stoneMoss = new THREE.Group();
  this.group.add(this.stoneMoss);

  var bottomGeometry = new THREE.LatheGeometry( bottomPoints, 6 );
  var bottomMaterial = new THREE.MeshLambertMaterial( { color: 0x917054 } );
  this.bottom = new THREE.Mesh( bottomGeometry, bottomMaterial );
  this.bottom.position.y = -.8;
  this.bottom.castShadow = true;
  //bottom.receiveShadow = true;

  this.group.add(this.top);
  this.group.add(this.rim);
  this.group.add(this.bottom);

  var material = new THREE.MeshLambertMaterial( {color: 0x423224} );

  for (i = 0; i < 90; i++) {
    var size = Math.random()*.7 + .25;
    var geometry = new THREE.BoxGeometry(size, size, size);
    var x = 1 + Math.random() * 6;
    geometry.translate(x, 0, 0);
    var clod = new THREE.Mesh(geometry, material);
    clod.position.y = -3*(1+Math.cos(Math.PI/10*x))*Math.random() - .5;
    clod.quaternion.setFromEuler(rotateAndTilt(Math.random() * 90, Math.random() * 360));
    this.group.add(clod);
    //clod.castShadow = true;
    clod.receiveShadow = true;

  }

  var stoneMaterial = new THREE.MeshLambertMaterial( {color: 0x656b59} );
  var mossMaterial = new THREE.MeshLambertMaterial( {color: 0x4d5e35} );

  for (i = 0; i < 8; i++) {
    var radius = Math.random() + .5;
    var stoneGeometry = new THREE.SphereGeometry(radius, 8, 8 );
    var mossGeometry = new THREE.SphereGeometry(radius*.95, 8, 8);

    x = 2 + Math.random() * 6.5;
    stoneGeometry.translate(x, 0, 0);
    mossGeometry.translate(x, 0, 0);

    var stone = new THREE.Mesh( stoneGeometry, stoneMaterial );
    var moss = new THREE.Mesh(mossGeometry, mossMaterial);

    stone.castShadow = true;

    var position = Math.cos(Math.PI/20*x);
    var eu = rotateAndTilt(Math.random() * 90, Math.random() * 360);

    stone.position.y = position;
    moss.position.y = position;

    stone.quaternion.setFromEuler(eu);
    moss.quaternion.setFromEuler(eu);

    stone.scale.set(1, .5, 1);
    moss.scale.set(1, .5, 1);

    this.group.add(stone);
    this.stoneMoss.add(moss);
  }

  this.stoneMoss.position.y = .07;
  this.group.scale.set(.05, .05, .05);
}
