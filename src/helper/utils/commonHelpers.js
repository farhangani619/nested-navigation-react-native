export function getIconForTab (route, focused) {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused
        ? require('../../../src/images/homefocused.png')
        : require('../../../src/images/home.png');
    } else if (route.name === 'Search') {
      //search
      iconName = focused ?
        require('../../../src/images/searchfocused.png')
        : require('../../../src/images/search.png');
    } else if (route.name === 'Reels') {
      //reels
      iconName = focused ?
        require('../../../src/images/reelsfocused.png')
        : require('../../../src/images/reels.png');
    } else if (route.name === 'Activity') {
      //activity
      iconName = focused ?
        require('../../../src/images/heartfocused.png')
        : require('../../../src/images/heart.png');
    } else if (route.name === 'Profile') {
      //profile
      iconName = focused ?
        require('../../../src/images/profilefocused.png')
        : require('../../../src/images/profile.png');
    }

    return iconName
  }

 export const navOptionHandler = () => ({
    headerShown: false
  })