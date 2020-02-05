let camera, scene, renderer, cube;

function init() {
  scene = new THREE.Scene();

  // Init camera (PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Init renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size (whole window)
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render to canvas element
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(3, 3, 3);
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const texture = new THREE.TextureLoader().load('textures/Carbon.png')
  const material = new THREE.MeshBasicMaterial({map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 6;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
  renderer.render(scene, camera);
}

function onWindowResize() {
    console.log(camera)
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// function bmwLoad(){
//  const loader = new THREE.GLTFLoader();
// //  const url = './bmw_i8/scene.gltf'
//  loader.load(
// 	// resource URL
// 	'./bmw_i8/scene.gltf',
// 	// called when the resource is loaded
// 	function ( gltf ) {

// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Scene
// 		gltf.scenes; // Array<THREE.Scene>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log(error );

// 	}
// );
 
// }

window.addEventListener('resize', onWindowResize, false)
init();
// bmwLoad()
animate();
