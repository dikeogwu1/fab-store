const PaymentCard = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <rect
        x='2'
        y='4'
        width='20'
        height='16'
        rx='4'
        stroke='#141718'
        strokeWidth='1.5'
      />
      <circle
        cx='2'
        cy='2'
        r='2'
        transform='matrix(1 0 0 -1 10 14)'
        stroke='#141718'
        strokeWidth='1.5'
      />
      <circle
        cx='1'
        cy='1'
        r='1'
        transform='matrix(1 0 0 -1 17 13)'
        fill='#141718'
      />
      <circle
        cx='1'
        cy='1'
        r='1'
        transform='matrix(1 0 0 -1 5 13)'
        fill='#141718'
      />
    </svg>
  );
};

export default PaymentCard;
