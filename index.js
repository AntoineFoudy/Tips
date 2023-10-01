function fetchUsers() {
    fetch("detail.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No response from file");
        }
        return response.json();
      })
      .then((data) => {
        const users = data.user;
  
        users.forEach((user) => {
          console.log(`Username: ${user.username}, Password: ${user.password}`);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }