import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '9rskj1sk',
  dataset: 'production',
  apiVersion: '2022-07-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
