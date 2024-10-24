import { BaseCard } from './BaseCard.tsx';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints.ts';

// Half width on large screens
export const HalfWidthCard = styled(BaseCard)`
  padding: 10px;
    
    @media (min-width: ${breakpoints.xl}) {
    grid-column: span 6;
  }
`;
