const WorkDays = ({name, workDays}) => {
  // console.log("name", name)
// console.log("workDays", workDays)
  
  const getTodayIndex = () => {
    const data = new Date();
    const day = data.getDay()

    if (day === 0) {
      return 6
    }
    return day - 1
  }
  
  const nomber = getTodayIndex()
  const workInfoToday = workDays[nomber]


  return <>
    {/* <p>Hours work</p> */}
    {workInfoToday.isOpen ?
      (<p id="workTime">{workInfoToday.from} - {workInfoToday.to}</p>) :
      (<p>--------------------------</p>)}
  </>
}

export default WorkDays