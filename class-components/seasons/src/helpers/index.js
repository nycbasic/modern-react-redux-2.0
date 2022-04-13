export const getSeason = (lat, month) => {
const data = {
  spring: {
    text: "more daylight!",
    iconName: "sun",
    season: "spring"
  },
  summer: {
    text: "let's hit the beach!",
    iconName: "sun",
    season: "summer"
  },
  winter: {
    text: "burr it's chilly!",
    iconName: "snowflake",
    season: "winter"
  },
};

  if (month > 2 && month < 6) {
    return lat > 0 && data.spring;
  } else if (month > 6 && month < 10) {
    return lat > 0 && data.summer;
  }
  return data.winter;
};
