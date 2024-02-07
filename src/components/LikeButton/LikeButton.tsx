import { useState } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';

interface LikeProps {
    onClick: () => void
}

const LikeButton = ({onClick}: LikeProps) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status)
    onClick()
  }
  if (status)
    return (
      <BsSuitHeartFill
        color="#ff6b81"
        size={20}
        onClick={toggle}
      />
    );
  return <BsHeart size={20} onClick={toggle} />;
};

export default LikeButton;
