import { ModalText } from './Modal.styled';

const WorkHours = ({ workDays }) => {
  const dayLabels = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <ul>
      {workDays.map((day, index) => (
        <ModalText key={day._id}>{dayLabels[index]} {day.from} - {day.to}</ModalText>
      ))}
    </ul>
  );
}

export default WorkHours