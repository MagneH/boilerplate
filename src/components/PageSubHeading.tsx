import { StyledIcon } from '@styled-icons/styled-icon';
import styled from 'styled-components';

interface Props {
  Icon: StyledIcon;
  title: string;
}

export const PageSubHeading = ({ title, Icon }: Props) => {
  return (
    <HeadingWrapper>
      <IconWrapper>
        <Icon size={36} color="#677176" />
      </IconWrapper>
      <StyledH2>{title}</StyledH2>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  display: flex;
  place-items: center;
  grid-column: span 12;
`;

const IconWrapper = styled.div`
  display: flex;
  place-items: center center;
  padding: 4px;
  border: 1px solid #d1d1d1;
  margin-right: 16px;
  border-radius: 8px;
`;

const StyledH2 = styled.h2`
  font-weight: lighter;
  font-size: 25px;
`;
