import { RootLayoutProps } from '@/models/RootLayout.model';
import '@styles/global.css';
import { FC } from 'react';

export const metadata = {
  title: 'PromptJourney',
  dezcription: 'Share & Discover MidJourney Prompts',
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
