const ArrowRight = ({ color }: { color?: boolean }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
    >
      <path
        d='M3.75 9H14.25'
        stroke={color ? "#fff" : "#000"}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75 13.5L14.25 9'
        stroke={color ? "#fff" : "#000"}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75 4.5L14.25 9'
        stroke={color ? "#fff" : "#000"}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowRight;
