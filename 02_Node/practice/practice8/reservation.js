const getReservation = function (people) {
  if (people > 5) {
    return function reserveLargeRoom() {
      return '✅ 대형 룸이 예약되었습니다.';
    };
  } else {
    return function reserveStandardSeat() {
      return '✅ 일반석이 예약되었습니다.';
    };
  }
};
module.exports = getReservation;
