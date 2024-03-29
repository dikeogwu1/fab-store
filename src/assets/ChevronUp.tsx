const ChevronUp = ({ nav }: { nav?: boolean }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${nav ? "19" : "24"}`}
      height={`${nav ? "18" : "24"}`}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M6.11658 15L12.1166 9L18.1166 15'
        stroke='#141718'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronUp;
