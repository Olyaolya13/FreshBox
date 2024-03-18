import CommentCardRead from '../CommentCardRead/CommentCardRead';
import { CommentCardReadData } from '../../../../utils/constants';
import { useEffect, useState } from 'react';
import BtnPaginationLeft from '../../../../assets/BtnPaginationLeft.svg?react';
import BtnPaginationRight from '../../../../assets/BtnPaginationRight.svg?react';

export default function Comments() {
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
    <div className="bestsekers-pagination">
      <BtnPaginationLeft className="bestsekers-pagination__btn" onClick={prevComment} />
      <div className="comment__card">
        {[currentIndex, currentIndex, currentIndex].map((value, index) => (
          <CommentCardRead
            key={index}
            title={CommentCardReadData.title[index % CommentCardReadData.title.length]}
            text={CommentCardReadData.text[index % CommentCardReadData.text.length]}
            readOnlyRatingValue={
              CommentCardReadData.readOnlyRatingValue[
                value % CommentCardReadData.readOnlyRatingValue.length
              ]
            }
          />
        ))}
      </div>
      <BtnPaginationRight className="bestsekers-pagination__btn" onClick={nextComment} />
    </div>
  );
}
