import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import BlogList from '../../src/components/BlogList';
import Layout from '../../src/hocs/Layout';

const blog = ({posts}) => {
    return (
        <Layout title='Blog: Preetam Raj'>
            <BlogList posts={posts} />
        </Layout>
    );
};

export default blog;

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
        const {data: frontmatter} = matter(markdownWithMeta);
        return {
            slug,
            frontmatter
        }
    });
    
    return {
        props: {
            posts
        }
    }
};