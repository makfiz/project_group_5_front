const WorkDays = ({name, workDays}) => {
  console.log("name", name)
  console.log("workDays", workDays)

  const data = new Date();
  const day = data.getDay() - 1
  const workInfoToday = workDays[day]


  return <>
    {workInfoToday.isOpen ?
      (<p>{workInfoToday.from} - {workInfoToday.to}</p>) :
      (<p>--------------------------</p>)}
  </>
}

export default WorkDays