import { format, formatDistanceToNow } from 'date-fns';

const formatDate = dateString => {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy');
};

const formatDateDistance = dateString => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

export { formatDate, formatDateDistance };
