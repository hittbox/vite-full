import supabase from '../Supabase';

export const signInWithGithub = async (redirectURL: string) => {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${redirectURL}`,
    },
  });
};
