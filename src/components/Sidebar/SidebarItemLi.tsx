import styled from 'styled-components';

export const SidebarItemLi = styled.li<{ $isActive?: boolean }>`
  display: flex;
  place-items: center center;
  border-radius: 8px;
  text-decoration: none;
  background-color: ${({ $isActive }) => ($isActive ? '#EDF6FF' : 'inherit')};
  margin: 8px 0;
  cursor: pointer;

  svg {
    fill: ${({ $isActive }) => ($isActive ? '#006ADC' : '#11181C')};
    margin-right: 8px;
  }

  a {
    color: ${({ $isActive }) => ($isActive ? '#006ADC' : '#11181C')};
    display: flex;
    place-items: center center;
  }

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#EDF6FF' : '#f1f3f5')};

    a,
    span {
      color: ${({ $isActive }) => ($isActive ? '#006adc' : '#677176')};
    }

    svg {
      fill: ${({ $isActive }) => ($isActive ? '#006adc' : '#677176')};
    }
  }
`;
