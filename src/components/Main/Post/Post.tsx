import './Post.css';
import PostCard from '../Post/PostCard/PostCard';
import Title from '../Title/Title';
import PostBerries from '../../../assets/PostBerries.svg';

const name = ['Milly Johns', 'John Kerry', 'Barry Rouse'];
const images = [PostBerries, PostBerries];
const titles = ['Savor the Sweetness: Mini Guide to Delicious Berries', 'Bf'];
const alt = ['Savor the Sweetness: Mini Guide to Delicious Berries', 'Berries'];
const data = ['22/12/2022', '22/12/2022'];
const subtitle = [
  `Berries are nature's candy, offering a burst of flavor and a host of health benefits. From the vibrant red of strawberries to the deep blue of blueberries, each berry brings its own unique taste to the table`,
  'sdds'
];
const viewLike = ['2', '5'];

export default function Post() {
  return (
    <section className="post-card">
      <Title title="Latest posts" />
      {titles.map((title, index) => (
        <PostCard
          key={index}
          name={name[index]}
          title={title}
          data={data[index]}
          subtitle={subtitle[index]}
          image={images[index]}
          viewLike={viewLike[index]}
          alt={alt[index]}
        />
      ))}
    </section>
  );
}
