import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import style from './Statistics.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}

      <ul className={style.list}>
        {stats.map((stat, index) => {
          const Icon = icons[index] || MdPeople; // Значок по умолчанию, если индекс выходит за пределы массива
          return (
            <li className={style.item} key={stat.id}>
              <StatisticsItem stat={stat} icon={Icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
