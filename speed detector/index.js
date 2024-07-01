function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed < speedLimit) {
        console.log("Ok");
        return;  // Exit function if speed is within limit
    }

    // Calculate demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    // Print demerit points
    console.log(`Points: ${demeritPoints}`);

    // Check if license should be suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}

// Example usage:
let speed = 80;  // Change this value to test different speeds
checkSpeed(speed);
