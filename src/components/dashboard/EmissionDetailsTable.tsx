import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

type EmissionRecord = {
  yearMonth: string;
  source: string;
  emissions: number;
};

type EmissionDetailsTableProps = {
  emissions: EmissionRecord[];
  companyName: string;
  totalEmissions: number;
};

export function EmissionDetailsTable({
  emissions,
  companyName,
  totalEmissions,
}: EmissionDetailsTableProps) {
  const sourceNames: { [key: string]: string } = {
    electricity: '전기',
    gasoline: '휘발유',
    diesel: '경유',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{companyName} 상세 배출 내역</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>년월</TableHead>
              <TableHead>배출원</TableHead>
              <TableHead className="text-right">배출량 (tCO2)</TableHead>
              <TableHead className="text-center">비중</TableHead>
              <TableHead className="text-center">상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emissions.map((emission, index) => {
              const percentage = (emission.emissions / totalEmissions) * 100;

              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {emission.yearMonth}
                  </TableCell>
                  <TableCell className="text-[var(--foreground)]/60">
                    {sourceNames[emission.source] || emission.source}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {emission.emissions} tCO2
                  </TableCell>
                  <TableCell className="text-center text-[var(--foreground)]/60">
                    {percentage.toFixed(1)}%
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        percentage > 15
                          ? 'warning'
                          : percentage > 8
                            ? 'default'
                            : 'success'
                      }
                    >
                      {percentage > 15
                        ? 'High'
                        : percentage > 8
                          ? 'Medium'
                          : 'Low'}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
