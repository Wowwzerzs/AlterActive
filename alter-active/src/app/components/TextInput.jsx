import { CloseRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

// Styled component with Tailwind CSS classes
const Container = styled.div`
  @apply flex-1 flex flex-col gap-6;
`;

const Label = styled.label`
  @apply text-xs text-primary p-0.5;
  ${({ error, theme }) =>
    error &&
    `
    @apply text-red;
  `}
  ${({ small }) =>
    small &&
    `
    @apply text-xs;
  `}
  ${({ popup, theme }) =>
    popup &&
    `
  @apply text-popup_text_secondary;
  `}
`;

const OutlinedInput = styled.div`
  @apply rounded-lg border border-text_secondary bg-transparent text-text_primary outline-none px-4 flex items-center gap-12;
  &:focus-within {
    @apply border-secondary;
  }
  ${({ error, theme }) =>
    error &&
    `
    @apply border-red;
  `}

  ${({ chipableInput, height, theme }) =>
    chipableInput &&
    `
    @apply bg-card flex-col items-start gap-8 min-h-${height};
  `}

  ${({ small }) =>
    small &&
    `
    @apply rounded-md px-2 py-2;
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  @apply text-popup_text_secondary border-popup_text_secondary;
  `}
`;

const Input = styled.input`
  @apply w-full text-sm bg-transparent outline-none;
  ${({ small }) =>
    small &&
    `
    @apply text-xs;
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  @apply text-popup_text_secondary;
  `}
`;

const Error = styled.p`
  @apply text-red text-xs m-1;
  ${({ small }) =>
    small &&
    `
    @apply text-xs;
  `}
`;

const ChipWrapper = styled.div`
  @apply flex flex-wrap gap-6;
`;

const Chip = styled.div`
  @apply px-2 py-1 rounded-lg bg-primary bg-opacity-10 text-primary text-sm flex items-center gap-4 cursor-pointer transition-all duration-300;
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  error,
  handelChange,
  textArea,
  rows,
  columns,
  chipableInput,
  chipableArray,
  removeChip,
  height,
  small,
  popup,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container small={small}>
      <Label small={small} popup={popup} error={error}>
        {label}
      </Label>
      <OutlinedInput
        small={small}
        popup={popup}
        error={error}
        chipableInput={chipableInput}
        height={height}
      >
        {chipableInput ? (
          <ChipWrapper>
            {chipableArray.map((chip, index) => (
              <Chip key={index} onClick={() => removeChip(name, index)}>
                <span>{chip}</span>
                <CloseRounded sx={{ fontSize: "14px" }} />
              </Chip>
            ))}
            <Input
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e) => handelChange(e)}
            />
          </ChipWrapper>
        ) : (
          <>
            <Input
              popup={popup}
              small={small}
              as={textArea ? "textarea" : "input"}
              name={name}
              rows={rows}
              columns={columns}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handelChange(e)}
              type={password && !showPassword ? "password" : "text"}
            />
            {password && (
              <>
                {showPassword ? (
                  <>
                    <Visibility
                      onClick={() => setShowPassword(false)}
                      className="cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <VisibilityOff
                      onClick={() => setShowPassword(true)}
                      className="cursor-pointer"
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
      </OutlinedInput>
      {error && (
        <Error small={small} popup={popup}>
          {error}
        </Error>
      )}
    </Container>
  );
};

export default TextInput;
