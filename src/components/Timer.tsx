import { FC, useEffect, useRef, useState } from 'react';

type Props = {
  milliseconds: number;
};

const Timer: FC<Props> = ({ milliseconds }) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(
      () => setSeconds((prev) => prev + 1),
      milliseconds
    );
  }, [milliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
