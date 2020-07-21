class Github {
  constructor() {
    this.client_id = 'c6197fd29c1e57b2ab7e';
    this.client_secret = '71252af1245ceb787a3abd653e9bcb043d02962c';
  }

  // inserting template literals (from constructor)
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
