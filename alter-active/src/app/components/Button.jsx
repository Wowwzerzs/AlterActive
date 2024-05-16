import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

// Styled component with Tailwind CSS classes
const Button = styled.div`
  @apply rounded-lg text-white text-sm font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 h-min border;
  height: min-content;
  padding: 16px 26px;
  @apply shadow-md;
  @apply border-solid;

  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  ${({ type, theme }) =>
    type === "secondary"
      ? `
  @apply bg-secondary border-secondary;
  `
      : `
  @apply bg-primary border-primary;
`}

  ${({ isDisabled }) =>
    isDisabled &&
    `
  @apply opacity-80 cursor-not-allowed;
  `}

  ${({ isLoading }) =>
    isLoading &&
    `
  @apply opacity-80 cursor-not-allowed;
  `}
${({ flex }) =>
    flex &&
    `
    @apply flex-1;
`}

${({ small }) =>
    small &&
    `
@apply padding: 10px 28px;
`}
  ${({ outlined, theme }) =>
    outlined &&
    `
@apply bg-transparent text-primary shadow-none;
`}
  ${({ full }) =>
    full &&
    `
  @apply w-full;
`}
`;

const ButtonComponent = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
  small,
  outlined,
  full,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()}
      isDisabled={isDisabled}
      type={type}
      isLoading={isLoading}
      flex={flex}
      small={small}
      outlined={outlined}
      full={full}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </Button>
  );
};

export default ButtonComponent;
