import './CommentsPaginatio.css';
import CommentCardRead from '../CommentCardRead/CommentCardRead';
import { CommentCardReadData } from '../../../../utils/constants';
import { useEffect, useState } from 'react';
import BtnPaginationLeft from '../../../../assets/BtnPaginationLeft.svg?react';
import BtnPaginationRight from '../../../../assets/BtnPaginationRight.svg?react';

export default function CommentsPagination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextComment = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % CommentCardReadData.title.length);
  };

  const prevComment = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex - 1 + CommentCardReadData.title.length) % CommentCardReadData.title.length
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevComment();
    } else if (event.key === 'ArrowRight') {
      nextComment();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="comment-pagination">
      <BtnPaginationLeft className="comment-pagination__btn" onClick={prevComment} />
      <div className="comment__cards">
        {[0, 1, 2].map((_, index) => {
          const commentIndex = (currentIndex + index) % CommentCardReadData.title.length;
          return (
            <CommentCardRead
              key={index}
              title={CommentCardReadData.title[commentIndex]}
              text={CommentCardReadData.text[commentIndex]}
              readOnlyRatingValue={CommentCardReadData.readOnlyRatingValue[commentIndex]}
            />
          );
        })}
      </div>
      <BtnPaginationRight className="comment-pagination__btn" onClick={nextComment} />
    </div>
  );
}
