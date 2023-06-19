import axios from 'axios';

async function findGameById(player, id) {
  return axios({
    method: 'get',
    url: `/games/${id}`,
    headers: { 'X-Player': player },
  });
}

async function findAvailableGames(player) {
  return axios({
    method: 'get',
    url: '/games',
    headers: { 'X-Player': player },
  });
}

async function getAllPlayersCount(player) {
  return axios({
    method: 'get',
    url: '/games/all-players-count',
    headers: { 'X-Player': player },
  });
}

function createGame(player, playersNum) {
  return axios({
    method: 'post',
    url: '/games',
    headers: { 'X-Player': player },
    data: {
      maxPlayers: playersNum,
    },
  });
}

function suggestCharacter(player, id, name, character) {
  return axios({
    method: 'post',
    url: `/games/${id}/characters`,
    headers: { 'X-Player': player },
    data: {
      nickname: name,
      character: character,
    },
  });
}

async function findTurnInfo(player, id) {
  return axios({
    method: 'get',
    url: `/games/${id}/turn`,
    headers: { 'X-Player': player },
  });
}

function askQuestion(player, id, message) {
  return axios({
    method: 'post',
    url: `/games/${id}/questions`,
    headers: { 'X-Player': player },
    data: {
      message: message,
    },
  });
}

function answerQuestion(player, id, answer) {
  return axios({
    method: 'post',
    url: `/games/${id}/answer`,
    headers: { 'X-Player': player },
    params: {
      answer,
    },
  });
}

function askGuess(player, id, guess) {
  return axios({
    method: 'post',
    url: `/games/${id}/guess`,
    headers: { 'X-Player': player },
    data: {
      message: guess,
    },
  });
}

function answerGuess(player, id, answer) {
  return axios({
    method: 'post',
    url: `/games/${id}/guess/answer`,
    headers: { 'X-Player': player },
    params: {
      answer,
    },
  });
}

function leaveGame(player, id) {
  return axios({
    method: 'delete',
    url: `/games/${id}/leave`,
    headers: { 'X-Player': player },
  });
}

function getHistory(id) {
  return axios({
    method: 'get',
    url: `/games/${id}/history`,
  });
}

function inactivePlayer(player, id) {
  return axios({
    method: 'post',
    url: `/games/${id}/inactivePlayer`,
    headers: { 'X-Player': player },
  });
}

export {
  findGameById,
  findAvailableGames,
  createGame,
  suggestCharacter,
  findTurnInfo,
  askQuestion,
  askGuess,
  answerQuestion,
  getAllPlayersCount,
  leaveGame,
  getHistory,
  inactivePlayer,
  answerGuess,
};
