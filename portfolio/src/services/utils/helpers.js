export const getNavLink = (page) => {
  const firstWord = page.split(" ")[0];
  return "/#/" + firstWord.toLowerCase();
};
