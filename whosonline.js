function whosOnline(friends) {
  let userStatus = {
    online: [],
    offline: [],
    away: [],
  };

  if (friends.length == 0) {
    return {};
  }

  for (i = 0; i < friends.length; i++) {
    if (friends[i].status == "online" && friends[i].lastActivity <= 10) {
      userStatus.online.push(friends[i].username);
    } else if (friends[i].status == "online" && friends[i].lastActivity > 10) {
      userStatus.away.push(friends[i].username);
    } else if (friends[i].status == "offline") {
      userStatus.offline.push(friends[i].username);
    }
  }
  if (userStatus.online.length == 0) {
    delete userStatus.online;
  }
  if (userStatus.offline.length == 0) {
    delete userStatus.offline;
  }
  if (userStatus.away.length == 0) {
    delete userStatus.away;
  }

  return userStatus;
}
