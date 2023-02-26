import Notiflix from 'notiflix';

export const showWarningNotification = (text, delay) =>
  Notiflix.Notify.failure(text, {
    timeout: delay,
  });
