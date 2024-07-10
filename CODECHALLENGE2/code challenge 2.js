function speedDetector (speed) {
    const speedLimit = 70;
    const MaxDemeritPoints = 12;
   
    if (speed<speedLimit) {
        console.log ('OK');
    } else {
        const demeritPoints = Math.floor((speed-speedLimit) / 5);
        if (demeritPoints > MaxDemeritPoints) {
           
            console.log('License suspended');
        } else {
           
            console.log('Points: ${demeritPoints}');
        }
    }
}