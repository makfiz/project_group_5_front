import { ModalText } from './Modal.styled';

const WorkHours = ({ workDays }) => {
  const dayLabels = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const data = new Date();
  const getTodayIndex = (data) => (data.getDay() + 6) % 7;
  const today = getTodayIndex(data)

  return (
    <ul>
      {workDays.map((day, index) => (
        <ModalText
          key={day._id}
          className={today === index ? 'highlight' : ''} // додати клас "highlight", якщо це поточний день тижня
        >
          {dayLabels[index]} {day.from} - {day.to}
        </ModalText>
      ))}
    </ul>
  );
};

export default WorkHours