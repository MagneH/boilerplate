import { StyledIcon } from '@styled-icons/styled-icon';
import styled from 'styled-components';

interface Props {
  Icon: StyledIcon;
  title: string;
}

export const PageHeading = ({ title, Icon }: Props) => {
  return (
    <HeadingWrapper>
      <Icon size={36} color="#677176" />
      <StyledH1>{title}</StyledH1>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  display: flex;
  place-items: center;
  margin-bottom: 40px;

  :first-child {
    margin-right: 16px;
  }
`;

const StyledH1 = styled.h1`
  font-weight: lighter;
  font-size: 25px;
`;
