import { Box } from '@mui/material';
import HeroSection from '../src/components/HeroSection';
import Layout from '../src/hocs/Layout';

const HomePage = () => {
  return (
    <Layout title='Preetam Raj'>
      <Box>
        <HeroSection />
      </Box>
    </Layout>
  );
};

export default HomePage;