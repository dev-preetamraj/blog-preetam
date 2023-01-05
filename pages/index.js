import { Box } from '@mui/material';
import HeroSection from '../src/components/HeroSection';
import Services from '../src/components/Services';
import Layout from '../src/hocs/Layout';

const HomePage = () => {
  return (
    <Layout title='Preetam Raj'>
      <Box>
        <HeroSection />
        <Services />
      </Box>
    </Layout>
  );
};

export default HomePage;