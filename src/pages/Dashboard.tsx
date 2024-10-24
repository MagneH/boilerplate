import { PageHeading } from '../components/PageHeading.tsx';
import { LayoutTextWindowReverse } from '@styled-icons/bootstrap/LayoutTextWindowReverse';
import { ContentGrid } from '../components/ContentGrid.tsx';
import { PageSubHeading } from '../components/PageSubHeading.tsx';
import { Pulse } from '@styled-icons/boxicons-regular/Pulse';
import { HalfWidthCard } from '../components/Cards/HalfWidthCard.tsx';
import { ScatterChartExample } from '../components/charts/ScatterChartExample.tsx';
import { GeoChartExample } from '../components/charts/GeoChartExample.tsx';
import { GanttChartExample } from '../components/charts/GanttChartExample.tsx';
import { SankeyChartExample } from '../components/charts/SankeyChartExample.tsx';

export const Dashboard = () => {
  return (
    <>
      <PageHeading Icon={LayoutTextWindowReverse} title="Dashboard" />
      <ContentGrid>
        <PageSubHeading title="Example Graphs" Icon={Pulse} />
        <HalfWidthCard>
          <ScatterChartExample />
        </HalfWidthCard>
        <HalfWidthCard>
          <GeoChartExample />
        </HalfWidthCard>
        <HalfWidthCard>
          <GanttChartExample />
        </HalfWidthCard>
        <HalfWidthCard>
          <SankeyChartExample />
        </HalfWidthCard>
      </ContentGrid>
    </>
  );
};
