function meetingTimes(times) {
  times = times.sort((a,b) => a-b)

  for (let i=1; i<times.length; i++) {
     let startTime = times[i][0];
     let prevEndTime = times[i-1][1]
     if (startTime < prevEndTime) {
      return console.log (false)
     }
  }
  return console.log(true)

}
meetingTimes([[10,20],[20,30],[10,20]])
