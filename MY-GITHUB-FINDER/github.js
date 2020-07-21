class Github {
  constructor() {
    this.client_id = 'c6197fd29c1e57b2ab7e';
    this.client_secret = '71252af1245ceb787a3abd653e9bcb043d02962c';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // inserting template literals (from constructor)
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
