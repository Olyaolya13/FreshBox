import './Post.css';
import PostCard from '../Post/PostCard/PostCard';
import Title from '../Title/Title';
import PostBerries from '../../../assets/PostBerries.svg';

// const images = [PostBerries];
// const titles = ['Berries'];
// const alt = ['Berries'];
// const data = ['22/12/2022'];
// const subtitle = ['описание'];
// const viewLik = ['2'];

export default function Post() {
  return (
    <section className="post-card">
      <Title title="Latest posts" />
      <PostCard
        title="title"
        data="22/12/2022"
        subtitle="subtitle"
        image={PostBerries}
        viewLike="4"
      />
    </section>
  );
}
