import './Comments.css';
import Title from '../Title/Title';
import CommentsPagination from './CommentsPagination/CommentsPagination';

export default function Comments() {
  return (
    <section className="comment">
      <Title title="Comments" />
      <div className="comment__card">
        <CommentsPagination />
      </div>
    </section>
  );
}
