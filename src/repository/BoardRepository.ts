class BoardRepository {
  async fetchBoard() {
    try {
      // get data
      return [];
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

const BoardRepoImpl = new BoardRepository();
export { BoardRepoImpl as BoardRepo };
