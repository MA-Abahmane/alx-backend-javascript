
class AppController
{   
    static getHomepage(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
      }

    static getAllStudentsByMajor(req, res) {
        
    }
}

module.exports = AppController
