import React from "react";
import styled from "styled-components";

// Styled component with Tailwind CSS classes
const Card = styled.div`
  @apply flex-1 min-w-200px p-6 border border-primary-20 rounded-lg shadow-md flex gap-6;
`;

const Left = styled.div`
  @apply flex-1 flex flex-col gap-12;
  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const Title = styled.div`
  @apply font-semibold text-primary text-lg md:text-xl;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Value = styled.div`
  @apply font-semibold text-primary text-2xl;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Unit = styled.div`
  @apply text-sm text-primary;
  margin-bottom: 8px;
`;

const Span = styled.div`
  @apply font-medium;
  margin-bottom: 8px;
  ${({ positive }) =>
    positive
      ? `@apply text-green-500;`
      : `@apply text-red-500;`}
`;

const Icon = styled.div`
  @apply p-2 flex items-center justify-center rounded-lg;
  ${({ color, bg }) => `
    @apply bg-${bg} text-${color};
  `}
`;

const Desc = styled.div`
  @apply text-sm text-secondary-90 mb-6;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const CountsCard = ({ item, data }) => {
  return (
    <Card>
      <Left>
        <Title>{item.name}</Title>
        <Value>
          {data && data[item.key].toFixed(2)}
          <Unit>{item.unit}</Unit>
          <Span positive>(+10%)</Span>
        </Value>
        <Desc>{item.desc}</Desc>
      </Left>
      <Icon color={item.color} bg={item.lightColor}>
        {item.icon}
      </Icon>
    </Card>
  );
};

export default CountsCard;
