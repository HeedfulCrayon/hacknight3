
export default class CameraController {
    fillCameraProperties(positionArray, rotationArray) {
        const quaternion = new Quaternion(rotationArray[0], rotationArray[1], rotationArray[2], rotationArray[3]);
		const position = new Vector3(positionArray[0], positionArray[1], positionArray[2]);

        const cameraObjectNotation = new ObjectNotation(position, quaternion);
    }
}