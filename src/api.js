// Base Url

const API_KEY = '835be4f41fc5406ba59ad94b333cac17';

const base_url = "https://api.rawg.io/api/";

// Getting the data
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    
    if(month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();

// Current day/month/year
const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}&key=${API_KEY}`;