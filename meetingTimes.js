function meetingTimes(times) {
    times = times.sort((a, b) => a[0] - b[0]);
    const startTimes = [];
    const endTimes = [];
  
    console.log(times);
    for (let i = 0; i < times.length; i++) {
      startTimes[i] = times[i][0];
    } 
    for (let i = 0; i < times.length; i++) {
      endTimes[i] = times[i][1];
    }
  
    for (let i = 0; i < times.length; i++) {
      if (endTimes[i] > startTimes[i + 1]) {
         return console.log(false);
  
      }
      
  }
  console.log(true);
  }
  
  meetingTimes([
   [5,10], [8,15], [15,20],[20,25]
  ]);
  
  
  // another way and faster way 
  
  const meetTimes = (times) => {
      times.sort((a,b) => a[0] - b[0]);
      for (let i=1; i<times.length; i++) {
          const startTime = times[i][0];
          const prevEndTime = times[i-1][1];
  
          if (prevEndTime > startTime) {
              return console.log(false);        }
  
      }
      return console.log(true)
  }
  meetTimes([ [5,10], [8,15], [15,20],[20,25]])