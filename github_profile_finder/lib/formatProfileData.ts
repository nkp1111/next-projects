/**
 * @desc takes github profile and returns object containing all the data formatted
 * @param profile 
 * @returns 
 */
export const formatProfileData = (profile: any) => {
  const { avatar_url, name, login, bio, company, location, followers, following, public_repos, public_gists } = profile;
  return {
    Image: avatar_url,
    Name: name + " || " + login,
    Bio: bio,
    Company: company,
    Location: location,
    Followers: followers,
    Following: following,
    "Number of Repos": public_repos,
    "Number of Gists": public_gists,
  }
};