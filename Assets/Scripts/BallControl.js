#pragma strict

var rotationSpeed = 100;
var jumpHeight = 8;

var hit01 : AudioClip;
var hit02 : AudioClip;
var hit03 : AudioClip;

var distToGround : float;

function Start() {
    //Getting distance from the center to the ground
    distToGround = GetComponent.<Collider>().bounds.extents.y;
}

function Update () {
    //Handles ball rotation
    var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;
    rotation *= Time.deltaTime;
    GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);

    if (Input.GetKeyDown(KeyCode.W) && IsGrounded())
    { 
        GetComponent.<Rigidbody>().velocity.y = jumpHeight;  
    }

}

function IsGrounded() : boolean {
    //Returns true if we are on the ground
    return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function OnCollisionEnter() {
    var theHit = Random.Range(0, 3);
    switch (theHit) {
        case 0: 
            GetComponent.<AudioSource>().clip = hit01;
            GetComponent.<AudioSource>().pitch = Random.Range(0.5,1.5);
            GetComponent.<AudioSource>().Play();
            break;
        case 1:
            GetComponent.<AudioSource>().clip = hit02;
            GetComponent.<AudioSource>().pitch = Random.Range(0.5,1.5);
            GetComponent.<AudioSource>().Play();
            break;
        case 2: 
            GetComponent.<AudioSource>().clip = hit03;
            GetComponent.<AudioSource>().pitch = Random.Range(0.5,1.5);
            GetComponent.<AudioSource>().Play();
            break;
        default:
            GetComponent.<AudioSource>().clip = hit03;
            GetComponent.<AudioSource>().Play();
            break;
    }
}