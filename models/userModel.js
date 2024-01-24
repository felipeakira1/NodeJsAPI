const connectToDatabase = require('./database');

async function insertUser(user) {
    try {
        const dbConnection = await connectToDatabase();
        const [result] = await dbConnection.execute(
            'INSERT INTO users (name, username, email, password)  VALUES (?, ?, ?, ?)',
            [user.name, user.username, user.email, user.password]
        );
        dbConnection.end();
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    insertUser,
};