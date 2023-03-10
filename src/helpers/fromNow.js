/* Converts current timestamp in seconds to time from now  */
export const fromNow = (_seconds) => {
  const milliseconds = (new Date().getTime() - _seconds * 1000).toFixed();

  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;
  const parts = [];
  if (days > 0) {
    parts.push(days + ' day');
  }
  if (remainingHours > 0) {
    parts.push(remainingHours + ' hr');
  }
  if (remainingMinutes > 0) {
    parts.push(remainingMinutes + ' min');
  }
  if (remainingSeconds > 0) {
    parts.push(remainingSeconds + ' sec');
  }
  return parts.length ? parts.join(' ') + ' ago' : 'Just now';
};
