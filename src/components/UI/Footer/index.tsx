import Image from 'next/image';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Platform',
    links: ['Features', 'Integrations', 'API'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Tutorials', 'Community'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Contact'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <div>
            <h2 style={{ 
              fontFamily: 'PP Mori, Inter, sans-serif', 
              fontSize: '32px', 
              fontWeight: 600,
              color: 'var(--primary)'
            }}>
              Koiné
            </h2>
          </div>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>Scan to access Koiné on web and mobile.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
          </FooterBottom>
        </FooterMainContent>
        <CopyRight>
          <p>
            <Image src={ic_copyright} alt="copyright" /> {new Date().getFullYear()}{' '}
            Koiné Corp, LLC.
          </p>
        </CopyRight>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
