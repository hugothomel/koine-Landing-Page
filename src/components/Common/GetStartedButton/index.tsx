import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({
  padding,
  label = 'Get Started',
}: {
  padding: string;
  label?: string;
}) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      {label}
    </LinkTo>
  );
};

export default GetStartedButton;
