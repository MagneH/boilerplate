import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const AnimatedBurger = ({ isOpen }: Props) => {
  return (
    <StyledBurger $isOpen={isOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const StyledBurger = styled.div<{ $isOpen: boolean }>`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(3px)' : 'translateX(0)')};

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      width: ${({ $isOpen }) => ($isOpen ? '2.05rem' : '2.0rem')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      width: ${({ $isOpen }) => ($isOpen ? '2.05rem' : '2.0rem')};
    }
  }
`;
