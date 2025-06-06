import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding, text = "Get Started" }: { padding: string; text?: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      {text}
    </LinkTo>
  );
};

export default GetStartedButton;
