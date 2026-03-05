import { Box, CardContent, Card as MuiCard } from '@mui/material';
import type { CardProps as MuiCardProps } from '@mui/material/Card';
interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return <MuiCard {...props}>{children}</MuiCard>;
};

Card.Main = ({ children, ...props }: { children: React.ReactNode }) => {
  return <CardContent {...props}>{children}</CardContent>;
};

Card.Footer = ({ children, ...props }: { children: React.ReactNode }) => {
  return <Box {...props}>{children}</Box>;
};
