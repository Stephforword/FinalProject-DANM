//Javascript for Digital Art and New Media Final Project

var camera, scene, renderer, controls;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(90, width/height, 1, 30000);
  camera.position.set(-50, 2300, 10100); //bottom left = 0,0
  scene.add(camera);

  floor = new THREE.PlaneGeometry(9500, 17000, 50, 50);
  floorMaterial = new THREE.MeshBasicMaterial({color: "#666666", /*grey*/ wireframe: false, side: THREE.DoubleSide});
  floorMesh = new THREE.Mesh(floor, floorMaterial);
  floorMesh.position.y = 50;
  floorMesh.rotation.x = Math.PI/-2;
  scene.add(floorMesh);

  roof = new THREE.PlaneGeometry(9500, 17000, 50, 50);
  roofMaterial = new THREE.MeshBasicMaterial({color: "#8585AD", /*purple*/ wireframe: false, side: THREE.DoubleSide});
  roofMesh = new THREE.Mesh(roof, roofMaterial);
  roofMesh.position.y = 3080;
  roofMesh.rotation.x = Math.PI/-2;
  scene.add(roofMesh);

  wall1 = new THREE.BoxGeometry(100, 3000, 17300, 25, 25, 25);
  wall1Material = new THREE.MeshBasicMaterial({color: "#8A2E00"/*brown*/, side: THREE.DoubleSide});
  wall1Mesh = new THREE.Mesh(wall1, wall1Material);
  wall1Mesh.position.x = -4550;
  wall1Mesh.position.y = 1550;
  wall1Mesh.position.z = 95;
  scene.add(wall1Mesh);

  wall2 = new THREE.BoxGeometry(100, 3000, 17300, 25, 25, 25);
  wall2Material = new THREE.MeshBasicMaterial({color: "#474719" /*green*/, side: THREE.DoubleSide});
  wall2Mesh = new THREE.Mesh(wall2, wall2Material);
  wall2Mesh.position.x = 4550;
  wall2Mesh.position.y = 1550;
  wall2Mesh.position.z = 95;
  scene.add(wall2Mesh);

  /*figure = new THREE.CylinderGeometry(20, 20, 2000);
  figureMaterial = new THREE.MeshBasicMaterial({color: "#B8B800"});
  figureMesh = new THREE.Mesh(figure)*/

  doorside1a = new THREE.BoxGeometry(3400, 3000, 100, 25, 25, 25);
  doorside1aMaterial = new THREE.MeshBasicMaterial({color: "#0029A3" /*dark blue*/, side: THREE.DoubleSide});
  doorside1aMesh = new THREE.Mesh(doorside1a, doorside1aMaterial);
  doorside1aMesh.position.x = 2800;
  doorside1aMesh.position.y = 1550;
  doorside1aMesh.position.z = 50;
  scene.add(doorside1aMesh);

  doorside1b = new THREE.BoxGeometry(3400, 3000, 100, 25, 25, 25);
  doorside1bMaterial = new THREE.MeshBasicMaterial({color: "#0099FF" /*light blue*/, side: THREE.DoubleSide});
  doorside1bMesh = new THREE.Mesh(doorside1b, doorside1bMaterial);
  doorside1bMesh.position.x = -2800;
  doorside1bMesh.position.y = 1550;
  doorside1bMesh.position.z = 50;
  scene.add(doorside1bMesh);



  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

}


function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update();
}


init();
animate();
