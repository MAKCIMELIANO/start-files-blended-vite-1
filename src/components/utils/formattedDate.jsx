import { formatDistanceToNow } from 'date-fns';

const formattedDate = dateString => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

export default formattedDate;
