export class DataService {


    getCountry() {
        return fetch('https://restcountries.com/v3.1/all')
                 .then((res) => res.json() )
                 .then((d) =>d)
                 .catch(error => console.error('Error:', error));
     }

     getCars() {
        const _options = {
            method: 'GET',
            headers: {
                'Cache-Control':'no-cache'
            },
            mode: 'no-cors'
          }

        return fetch('https://restcountries.com/v3.1/all', {heeader: {'Cache-Control':'no-cache'}})
                .then((res) => res.json())
                .then((d) => d)
                .catch(error => console.error('Error:', error));
                
            }
            
            getMotorBike() {
                return fetch('https://bikeindex.org/api/v3/search?query=yamaha&type=motorcycle', {heeader: {'Cache-Control':'no-cache'}})
                .then((res) => res.json())
                .then((d) => d.bikes)
                .catch(error => console.error('Error:', error));
            }

            getGithubUsers() {
                return fetch('https://api.github.com/users', {heeader: {'Cache-Control':'no-cache'}})
                .then((res) => res.json())
                .then((d) => d)
                .catch(error => console.error('Error:', error));
            }
}