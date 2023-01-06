import { Box } from '@mui/material';
import Experience from '../src/components/Experience';
import HeroSection from '../src/components/HeroSection';
import Services from '../src/components/Services';
import Layout from '../src/hocs/Layout';

const HomePage = () => {
  return (
    <Layout title='Preetam Raj'>
      <Box>
        <HeroSection />
        <Services />
        <Experience />
      </Box>
    </Layout>
  );
};

export default HomePage;