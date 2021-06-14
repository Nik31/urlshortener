Make sure you have node v12 installed
To install dependencies
```
    npm install
```

Running the nodeJS app 
```
    npm start
```
Curl command for hittinng the call

```
    curl -X POST \
  http://localhost:8080/api/links \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 18d97a62-4d52-49cc-99d1-8baef5bc318d' \
  -H 'cache-control: no-cache' \
  -d '{
	"url" : "http://google5.com"
}'

```
postman collection link:  https://www.getpostman.com/collections/f6f5e01e2741ff3ab11f
Build the docker image from dockerfile and run it
```
    docker build -t infra-cloud-urlshortener .
    docker run -p 8080:6060 infra-cloud-urlshortener
```

Pull the docker from docker hub
```
docker image pull nikpras31/infra-cloud-urlshortener
docker run -p 8080:6060 nikpras31/infra-cloud-urlshortener

``` 
