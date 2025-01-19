import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stat, icon: Icon }) => {
  return (
    <>
      <span className={style.icon}>
        <Icon size={30} />
      </span>
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};

export default StatisticsItem;
