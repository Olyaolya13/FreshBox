import './Post.css';
import PostCard from '../Post/PostCard/PostCard';
import Title from '../Title/Title';
import { PostData } from '../../../utils/constants';

export default function Post() {
  return (
    <section className="post">
      <Title title="Latest posts" />
      <div className="post__card">
        {PostData.initialCounts.map((count, index) => (
          <PostCard
            key={index}
            name={PostData.name[index]}
            title={PostData.title[index]}
            data={PostData.data[index]}
            description={PostData.description[index]}
            image={PostData.images[index]}
            countLike={count}
            alt={PostData.alt[index]}
          />
        ))}
      </div>
    </section>
  );
}
