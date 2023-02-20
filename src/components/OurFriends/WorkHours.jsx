import { ModalText } from './OurFriends.styled';

const WorkHours = ({ workDays }) => {
  return <ul>
    {workDays.map(day => (
      <ModalText key={day._id} > {day.from} - {day.to}</ModalText>
    ))}
  </ul>
}

export default WorkHours